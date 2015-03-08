(ns {{namespace}}.style
  (:require [garden.core :refer [css]]
            [garden.units :refer [px em]]
            [garden.color :as color :refer [rgb]]))

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
   ["::selection" {:color white
                   :background purple}]])

(def main
  [[:header {:width "100%"
             :overflow :hidden
             :background {:color purple
                          :image "url(\"../../aviary-tile.jpg\")"}
             :min-height (px 400)
             :padding-top (px 50)
             :margin-bottom (px 120)}
    [:img :h1 {:display :table
               :margin {:left :auto
                        :right :auto}}]
    [:img {:width (px 196)}]
    [:h1 {:font-kerning :normal
          :letter-spacing (px 5)
          :text-transform :uppercase}]]
   [:main {:width "100%"
           :padding {:left "16.5%"
                     :right "16.5%"
                     :bottom (px 50)}}]

   [:a {:color purple
        :border-bottom {:width (px 2)
                        :style :solid
                        :color white}
        :transition "border 250ms"}
    [:&:hover {:border-bottom {:width (px 2)
                               :style :solid
                               :color purple}}]]])

(def screen
  (concat defaults fonts main))

(defn manifest [config]
  {"css/out/screen.css" #(css config screen)})
