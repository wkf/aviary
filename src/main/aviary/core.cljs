(ns aviary.core
  (:require [aviary.figwheel-client :as figwheel]))

(defn setup []
  (figwheel/load-message-watchers!))
