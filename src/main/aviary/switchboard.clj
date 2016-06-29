(ns aviary.switchboard
  (:require [aviary.util :as util]
            [clojure.core.async :as async]
            [com.stuartsierra.component :as component]))

(defrecord Chans [specs]
  component/Lifecycle

  (component/start [this]
    (update this :chans
      #(or % (util/valmap (fn [f] (f)) specs))))

  (component/stop [this]
    (doseq [[_ chan] (:chans this)]
      (async/close! chan))
    (dissoc this :chans)))

(defn new-chans [specs]
  (map->Chans {:specs specs}))

(defrecord Switchboard [wire]
  component/Lifecycle

  (component/start [this]
    (update this :wired?
      #(or % (do
               (wire this)
               (assoc this :wired? true)))))

  (component/stop [this]
    (dissoc this :wired?)))

(defn new-switchboard [wire]
  (map->Switchboard {:wire wire}))
