(ns {{namespace}}.markup
    (:require [aviary.markup :as markup]
              [net.cgrand.enlive-html :as html :refer [html]]))

(def defaults
  {:title "Aviary"
   :styles ["css/out/screen.css"]
   :scripts ["js/out/main.js"]})

(html/deftemplate page
  (markup/html5
    [:html
     [:head
      [:title]]
     [:body
      [:header
       [:img.logo {:src "aviary-white.svg"}]
       [:h1]]
      [:main]]])

  [{:keys [title scripts requires styles]} content]

  [:title] (html/content title)
  [:head] (html/prepend
            (map
              #(html [:link {:type "text/css" :rel "stylesheet" :href %}]) styles))
  [:body] (html/append
            (map
              #(html [:script {:type "text/javascript" :src %}]) scripts)
            (map
              #(html [:script {:type "text/javascript"} (str "goog.require('" % "')")]) requires))
  [:header :h1] (html/content title)
  [:main] (html/content content))

(defn main []
  (html
    [:h2 "Spread Your Wings"]
    [:p
     "You just created a new project with Aviary. Great job. Seriously, nice."]
    [:p
     "Anyway, looking for some help? For more documentation, "
     [:a {:href "https://wkf.github.io/aviary/"}
      "click right here."]]))

(defn manifest []
  {"/" #(markup/render (page (merge defaults %) (main)))})
