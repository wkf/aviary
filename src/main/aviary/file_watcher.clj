(ns aviary.file-watcher
  (:require [aviary.util :as util]
            [hawk.core :as hawk]
            [clojure.core.async :as async]
            [com.stuartsierra.component :as component]))

(defn- make-watch-specs [specs chans]
  (map
    (fn [[_ paths] [_ chan]]
      {:paths paths
       :handler #(async/put! chan %2)})
    specs chans))

(defrecord HawkFileWatcher [specs chans]
  component/Lifecycle

  (component/start [this]
    (update this :watcher
      #(or % (hawk/watch!
               (make-watch-specs specs (:chans chans))))))

  (component/stop [this]
    (some-> this :watcher hawk/stop!)
    (dissoc this :watcher)))

(defn new-file-watcher [specs]
  (map->HawkFileWatcher {:specs specs}))
