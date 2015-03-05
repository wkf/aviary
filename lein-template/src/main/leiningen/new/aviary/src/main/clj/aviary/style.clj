(ns {{namespace}}.style
  (:require [garden.core :refer [css]]
            [garden.units :refer [px em]]
            [garden.color :as color :refer [rgb]]))

(def black (rgb 0 0 0 ))

(def purple (rgb 152 90 163))

(def white (rgb 255 255 255))

(def defaults
  [[:html
    {:box-sizing :border-box}]
   [:*
    :*:after
    :*:before
    {:box-sizing :inherit}]
   [:body
    {:margin 0
     :padding 0}]
   [:a
    :a:hover
    :a:active
    :a:visited {:text-decoration :none}]])

(def fonts
  [[:body
    {:font-size (px 22)
     :font-family "'Crimson Text', serif"}]
   [:h1
    :h2
    :h3
    {:font-family "'Raleway', sans-serif"}]
   [:h1
    {:color white
     :font-size (px 42)}]
   [:h2
    {:color purple
     :font-size (px 32)}]
   [:h3
    {:color purple
     :font-size (px 22)}]
   [:code
    {:font-size (px 18)
     :font-family "'Inconsolata', monospace"}]
   ["::selection" {:color white
                   :background purple}]])

(def main [])

(def screen
  (concat defaults fonts main))

(defn manifest [config]
  {"css/out/screen.css" #(css config screen)})
