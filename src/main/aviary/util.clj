(ns aviary.util
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.core.async :as async])
  (:import (java.net ServerSocket)
           (java.nio.file Paths)
           (java.io IOException)
           (org.apache.commons.io FileUtils)))

(defn valmap
  "Map over map vals and return a map."
  [f m]
  (into {} (for [[k v] m] [k (f v)])))

(defn lein-project-name
  "Read project name from lein project definition file."
  []
  (-> "project.clj" slurp edn/read-string second))

(defn free-ports
  "Lazy seq of free ports in (optional) `range`."
  ([]
   (free-ports (range 3000 10000)))
  ([r]
   (->> r
     (map #(try
             (with-open [s (ServerSocket. %)]
               (.getLocalPort s))
             (catch IOException _ nil)))
     (remove nil?))))

(defn fan-out
  "Pipe `from` chan to all `tos` chans"
  [from tos]
  (let [from-mult (async/mult from)]
    (doseq [to tos]
      (async/tap from-mult to))))

(defn join-paths
  "Combine multiple path segments."
  [path & paths]
  (.toString
    (Paths/get path (into-array String paths))))

(defn merge-directories
  "Recursively merge source path into target path."
  [target & sources]
  (doseq [source sources]
    (FileUtils/copyDirectory (io/file source) (io/file target))))

(defmacro elapsed [& body]
  `(let [start# (System/nanoTime)]
     ~@body
     (/ (double (- (System/nanoTime) start#)) 1000000000.0)))
