(ns aviary.console
  (:require [clojure.string :as str])
  (:import (java.io PipedReader
                    PipedWriter
                    BufferedReader)))

(def reset "\u001b[0m")
(def bold "\u001b[1m")

(def default "\u001b[39m")
(def white "\u001b[37m")
(def black "\u001b[30m")
(def red "\u001b[31m")
(def green "\u001b[32m")
(def blue "\u001b[34m")
(def yellow "\u001b[33m")

(def color238 "\u001b[38;5;238m")
(def color240 "\u001b[38;5;240m")
(def color251 "\u001b[38;5;251m")

(def logger
  "An agent to serialize log output from asynchronous producers."
  (agent nil))

(defn- print-line [line]
  (send-off logger #(println %2) line))

(defn decolor-string
  "Remove ANSI color sequences from string"
  [s]
  (str/replace s #"\u001b\[[^m]+m" ""))

(defn transform-out-lines
  "Wraps a function f, capturing lines sent to *out*, and transforming them with function g."
  [f g]
  (fn [& args]
    (let [out (PipedWriter.)
          ready (promise)
          reader (future
                   (let [in (-> out PipedReader. BufferedReader.)]
                     (deliver ready true)
                     (dorun
                       (->> (line-seq in)
                            (take-while identity)
                            (map #(some-> % g print-line))))
                     (.close in)))
          ready? @ready
          result (binding [*out* out] (apply f args))]
      (doto out
        .flush
        .close)
      @reader
      result)))

(defn- now []
  (-> "MM/dd/yyyy HH:mm:ss"
      (java.text.SimpleDateFormat.)
      (.format
        (java.util.Date.))))

(defn log
  ([k message]
   (log k message default))
  ([k message color]
   (log k message color nil))
  ([k message color f]
   (let [message' (str color238 (now) " "
                       color k
                       color238 " -" reset " " message)]
     ((or f print-line) message'))))

(defn info [k message & [f]]
  (log k message green f))

(defn warn [k message & [f]]
  (log k message yellow f))

(defn error [k message & [f]]
  (log k message red f))
