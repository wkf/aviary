(ns aviary.web-handler
  (:require [aviary.util :as util]
            [stasis.core :as stasis]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.file :refer [file-request]]
            [ring.middleware.head :refer [wrap-head]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.not-modified :refer [wrap-not-modified]]
            [com.stuartsierra.component :as component]))

(defmulti make-handler :type)

(defmethod make-handler :manifest [{:keys [manifest config]}]
  (let [handler (stasis/serve-pages manifest (or config {}))]
    (fn [request]
      (let [response (handler request)]
        (and (not= (:status response) 404) response)))))

(defmethod make-handler :directory [{:keys [directory config]}]
  (wrap-head
    (fn [request]
      (file-request request directory (or config {})))))

(defn- combine-handlers [specs]
  (let [handlers (mapv (comp make-handler val) specs)]
    (fn [request]
      (some #(% request) handlers))))

(defrecord StasisWebHandler [specs]
  component/Lifecycle

  (component/start [this]
    (update this :handler
      #(or % (->
               (combine-handlers specs)
               (wrap-content-type)
               (wrap-not-modified)
               (wrap-exceptions)))))

  (component/stop [this]
    (dissoc this :handler)))

(defn new-web-handler [specs]
  (map->StasisWebHandler {:specs specs}))
