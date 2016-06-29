(ns {{namespace}}.styles
  (:require [aviary.styles :as styles]
            [garden.core :refer [css]]
            [garden.units :refer [px em]]
            [garden.color :as color :refer [rgb]]))

(def main
  [
   ;; FIXME: add styles here
   ])

(def screen
  (concat styles/reset main))

(defn manifest []
  {"css/out/screen.css" #(css % screen)})
