(ns aviary.markup
  (:require [clojure.edn :as edn]
            [clojure.string :as str]
            [markdown.core :as markdown]
            [net.cgrand.tagsoup :as tagsoup]
            [net.cgrand.enlive-html :as html :refer [html]])
  (:import (java.io StringReader)))

(def html5-dtd
  {:type :dtd :data ["html"]})

(defn html5 [& nodes]
  (apply html html5-dtd nodes))

(defn render
  "Render an enlive template into an html string."
  [nodes] (str/join nodes))

(defn edn-parser
  "Parse edn files into enlive-compatible nodes."
  [stream]
  (-> stream slurp edn/read-string html))

(defn markdown-parser [stream]
  (with-open [stream (StringReader.
                       (-> stream
                         slurp
                         markdown/md-to-html-string))]
    (-> stream
      tagsoup/parser
      (html/select [:body :> :*]))))
