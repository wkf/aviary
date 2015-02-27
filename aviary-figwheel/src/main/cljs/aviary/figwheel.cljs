(ns aviary.figwheel
  (:require [figwheel.client :as figwheel]))

(defn- html-reloader-plugin [opts]
  (fn [[{:keys [msg-name]} & _]]
    (when (= msg-name :html-files-changed)
      (.reload js/location))))

(defn start [options]
  (figwheel/start
    (merge-with
      merge options {:merge-plugins
                     {::html-reloader-plugin html-reloader-plugin}})))
