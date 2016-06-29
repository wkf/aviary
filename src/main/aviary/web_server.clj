(ns aviary.web-server
  (:require [aviary.util :as util]
            [org.httpkit.server :as http-kit]
            [com.stuartsierra.component :as component]))

(defrecord HttpKitWebServer [web-handler config]
  component/Lifecycle

  (component/start [this]
    (update this :server
      #(or % (http-kit/run-server (:handler web-handler) config))))

  (component/stop [this]
    (when-let [s (:server this)]
      (s))
    (dissoc this :server)))

(defn new-web-server [config]
  (map->HttpKitWebServer {:config config}))
