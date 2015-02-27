(ns aviary.figwheel
  (:require [aviary.system :as system]
            [aviary.network :as network]
            [aviary.console :refer [decolor-string transform-out-lines] :as console]
            [clojure.core.async :as async]
            [clojurescript-build.auto :as cljs]
            [figwheel-sidecar.core :as figwheel]
            [figwheel-sidecar.auto-builder :as figwheel-auto]))

(defn start-figwheel-server [& args]
  (apply (-> figwheel/start-server
             (transform-out-lines
               (fn [line]
                 (condp re-matches (decolor-string line)
                   #"Figwheel: Starting server at (.*)" :>>
                   (fn [matches]
                     (console/info :figwheel/start (matches 1) str))
                   line))))
         args))

(defn make-figwheel-builder [state]
  (-> state
      figwheel-auto/builder
      cljs/make-conditional-builder
      (transform-out-lines
        (fn [line]
          (condp re-matches (decolor-string line)
            #"Compiling .*" :>> (constantly nil)
            #"notifying browser that file changed:  (.*)" :>>
            (fn [matches]
              (console/info :cljs/reload (matches 1) str))
            #"Successfully compiled \"(.*)\" in (.*) seconds\." :>>
            (fn [matches]
              (console/info :cljs/build (matches 1) str))
            line)))))

(system/defcomponent serve [config]
  ([_] (start-figwheel-server (assoc config :server-port (:port config))))
  ;; FIXME: This throws because figwheel never closes the channel
  ([_ server] (figwheel/stop-server server)))

(defn watch-cljs [fw config]
  (let [build (-> config cljs/prep-build)
        builder (-> fw :state make-figwheel-builder)]
    [{:paths (-> config :source-paths)
      :context (fn [_]
                 (builder build))
      :handler (fn [ctx _]
                 (builder ctx))}]))

(defn build-cljs [config]
  (cljs/build-once
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
