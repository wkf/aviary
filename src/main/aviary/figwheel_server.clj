(ns aviary.figwheel-server
  (:require [aviary.util :as util]
            [clojure.core.async :as async]
            [figwheel-sidecar.repl-api :as figwheel]
            [figwheel-sidecar.components.figwheel-server :as figwheel-server]
            [com.stuartsierra.component :as component]))

(defn- send-message [figwheel m]
  (figwheel-server/send-message
    (:figwheel-system figwheel)
    ::figwheel-server/broadcast m))

(defrecord FigwheelServer [config chans]
  component/Lifecycle

  (component/start [this]
    (when-not (figwheel/figwheel-running?)
      (figwheel/start-figwheel! config)
      (async/go-loop []
        (when-let [m (async/<! (-> chans :chans :messages))]
          (send-message figwheel/*repl-api-system* m)
          (recur))))
    this)

  (component/stop [this]
    (when (figwheel/figwheel-running?)
      (figwheel/stop-figwheel!)
      ;; HACK: stopping figwheel isn't synchronous
      (Thread/sleep 500))
    this))

(defn new-figwheel-server [config]
  (map->FigwheelServer {:config config}))

(defn styles-changed-message [paths]
  {:msg-name :css-files-changed
   :files (map (fn [path] {:type :css :file path}) paths)})

(defn markup-changed-message [paths]
  {:msg-name :html-files-changed
   :files (map (fn [path] {:type :html :file path}) paths)})
