(ns aviary.namespace-refresher
  (:require [aviary.util :as util]
            [clojure.core.async :as async]
            [clojure.tools.namespace.repl :as namespace.repl]
            [clojure.tools.namespace.file :as namespace.file]
            [com.stuartsierra.component :as component]))

(defn- refresh-namespaces []
  (binding [*ns* *ns*]
    (namespace.repl/refresh)))

(defn- refreshed-namespaces-for-file [f]
  (->
    @#'namespace.repl/refresh-tracker
    (namespace.file/add-files [f])
    :clojure.tools.namespace.track/load))

(defrecord NamespaceRefresher [chans]
  component/Lifecycle

  (component/start [this]
    (if (:started? this)
      this
      (let [{:keys [files namespaces]} (:chans chans)]
        (async/go-loop []
         (when-let [{:keys [file]} (async/<! files)]
           (when (namespace.file/clojure-file? file)
             (refresh-namespaces)
             (doseq [n (refreshed-namespaces-for-file file)]
               (async/>! namespaces n)))
           (recur)))
        (assoc this :started? true))))

  (component/stop [this]
    (dissoc this :started?)))

(defn new-namespace-refresher []
  (map->NamespaceRefresher {}))
