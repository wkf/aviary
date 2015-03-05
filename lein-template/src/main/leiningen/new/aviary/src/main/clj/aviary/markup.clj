(ns {{namespace}}.markup
  (:require [net.cgrand.enlive-html :as html :refer [html]]))

(def defaults
  {:title "Aviary"
   :styles ["css/out/screen.css"
            "//fonts.googleapis.com/css?family=Raleway:500"
            "//fonts.googleapis.com/css?family=Crimson+Text"
            "//fonts.googleapis.com/css?family=Inconsolata"]
   :scripts ["js/out/main.js"]})

(defn html5 [& nodes]
  (apply html {:type :dtd :data ["html"]} nodes))

(defn render [nodes] (apply str nodes))

(html/deftemplate page
  (html5
    [:html
     [:head
      [:title]
      [:link {:rel "icon" :type "image/png" :href "/favicon-32x32.png" :sizes "32x32"}]
      [:link {:rel "icon" :type "image/png" :href "/favicon-96x96.png" :sizes "96x96"}]
      [:link {:rel "icon" :type "image/png" :href "/favicon-16x16.png" :sizes "16x16"}]]
     [:body
      [:header
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

(defn manifest [config]
  (let [config (merge defaults config)]
    {"" #(render
           (page config "Hello World!"))}))
