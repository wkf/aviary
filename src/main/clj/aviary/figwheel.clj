(ns aviary.figwheel
  (:require [aviary.system :as system]
            [aviary.network :as network]
            [aviary.console :refer [decolor-string transform-out-lines]]
            [taoensso.timbre :refer [info]]
            [clojure.core.async :as async]
            [clojurescript-build.auto :as cljs]
            [figwheel-sidecar.core :as figwheel]
            [figwheel-sidecar.auto-builder :as figwheel-auto]))

(defn start-figwheel-server [& args]
  (apply (transform-out-lines
           figwheel/start-server
           (fn [line]
             (condp re-matches (decolor-string line)
               #"Figwheel: Starting server at (.*)" :>>
               (fn [matches]
                 (info :figwheel/start (matches 1)))
               line)))
         args))

(defn- transform-cljs-builder-out-line [line]
  (condp re-matches (decolor-string line)
    #"Compiling \"(.*)\" from (\[.*\]).*" :>>
    (fn [matches]
      (info :cljs/build (matches 2)))
    #"notifying browser that file changed:  (.*)" :>>
    (fn [matches]
      (info :cljs/reload (matches 1)))
    #"Successfully compiled \"(.*)\" in (.*) seconds\." :>>
    (fn [matches]
      (info :cljs/build (str (matches 1) " [" (matches 2) "s]")))
    line))

(defn make-figwheel-builder [state]
  (-> state
      figwheel-auto/builder
      cljs/make-conditional-builder
      (transform-out-lines
        transform-cljs-builder-out-line)))

(defn build-cljs-once [& args]
  (apply (transform-out-lines
           cljs/build-once
           transform-cljs-builder-out-line) args))

(system/defcomponent serve [config]
  ([_] (start-figwheel-server (assoc config :server-port (:port config))))
  ;; FIXME: This throws because figwheel never closes the channel
  ([_ server] (figwheel/stop-server server)))

(defn watch-cljs [fw config]
  (let [build (cljs/prep-build config)
        builder (-> fw :state make-figwheel-builder)]
    [{:paths (-> config :source-paths)
      :context (fn [_]
                 (builder build))
      :handler (fn [ctx _]
                 (builder ctx))}]))

(defn build-cljs [config]
  (build-cljs-once
    (cljs/prep-build config)))

(defn reload-css [fw files]
  (let [files' (map (fn [f] {:file f
                             :type :css}) files)]
    (figwheel/send-message!
      (:state fw) :css-files-changed {:files files'})))

(defn reload-html [fw files]
  (let [files' (map (fn [f] {:file f
                             :type :html}) files)]
    (figwheel/send-message!
      (:state fw) :html-files-changed {:files files'})))
