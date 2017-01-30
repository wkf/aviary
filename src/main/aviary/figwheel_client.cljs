(ns aviary.figwheel-client
  (:require [figwheel.client :as figwheel]
            [figwheel.client.utils :as utils]))

(defn load-message-watchers! []
  (figwheel/add-message-watch
    :html-watcher
    (fn [{:keys [msg-name files] :as msg}]
      (when (= msg-name :html-files-changed)
        (utils/log :debug "Figwheel: html file(s) changed, reloaded page.")
        (utils/log :info (pr-str (map :file files)))
        (.setTimeout js/window #(.reload js/window.location true) 2000)))))
