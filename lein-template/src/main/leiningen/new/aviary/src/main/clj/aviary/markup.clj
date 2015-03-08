(ns {{namespace}}.markup
  (:require [net.cgrand.enlive-html :as html :refer [html]]))

(def defaults
  {:title "Aviary"
   :styles ["css/out/screen.css"
            "//fonts.googleapis.com/css?family=Raleway:500"
            "//fonts.googleapis.com/css?family=Crimson+Text"]
   :scripts ["js/out/main.js"]})

(defn html5 [& nodes]
  (apply html {:type :dtd :data ["html"]} nodes))

(defn render [nodes] (apply str nodes))

(html/deftemplate page
  (html5
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

(defn manifest [config]
  (let [config (merge defaults config)]
    {"" #(render (page config (main)))}))
