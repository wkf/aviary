(ns aviary.styles
  (:require [garden.units :refer [percent]]))

(def reset
  [[:html
    {:color :black
     :background :white
     :box-sizing :border-box
     "-ms-text-size-adjust" (percent 100)
     "-webkit-text-size-adjust" (percent 100)}]
   [:* :*:after :*:before
    {:box-sizing :inherit}]
   [:a :a:hover :a:active :a:visited
    {:text-decoration :none}]
   [:body :div :dl :dt :dd :ul :ol :li :h1 :h2 :h3 :h4 :h5 :h6 :pre :code :form :fieldset :legend :input :textarea :p :blockquote :th :td
    {:margin 0
     :padding 0}]
   [:table
    {:border-collapse :collapse
     :border-spacing 0}]
   [:fieldset :img
    {:border 0}]
   [:address :caption :cite :code :dfn :em :strong :th :var
    {:font-style :inherit
     :font-weight :inherit}]
   [:ol :ul
    {:list-style :none}]
   [:caption :th
    {:text-align :left }]
   [:h1 :h2 :h3 :h4 :h5 :h6
    {:font-size "100%"
     :font-weight :normal}]
   [:q:before :q:after
    {:content "''"}]
   [:abbr :acronym
    {:border 0
     :font-variant :normal}]
   [:sup
    {:vertical-align :text-top}]
   [:sub
    {:vertical-align :text-bottom}]
   [:input :textarea :select
    {:font-family :inherit
     :font-size :inherit
     :font-weight :inherit}]
   [:input :textarea :select
    {"*font-size" "100%"}]
   [:legend
    {:color :black}]])
