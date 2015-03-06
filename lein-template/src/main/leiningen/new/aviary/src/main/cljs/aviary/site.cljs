(ns {{namespace}}.site)

(defonce site (atom {:running? false}))

(defn start
  "Start the site. Attempt to be idempotent."
  []
  (when-not (:running? @site)
    (swap! site assoc :running? true)))

(defn stop
  "Stop the site. Attempt to be idempotent. Useful for interactive local development."
  []
  (when (:running? @site)
    (swap! site assoc :running? false)))

(start)
