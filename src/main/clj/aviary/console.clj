(ns aviary.console
  (:require [clojure.string :as str]
            [taoensso.timbre :as timbre]
            [taoensso.timbre.appenders.core :as appenders])
  (:import (java.io PipedReader
                    PipedWriter
                    BufferedReader)))
(def colors
  {:info :green
   :warn :yellow
   :error :red
   :fatal :purple
   :report :blue})

(defn- color-output-by-level [{:keys [level] :as data}]
  (timbre/default-output-fn
    (update-in data [:vargs_]
      #(->> %
         deref
         (mapv
           (partial timbre/color-str (colors level)))
         delay))))

(timbre/merge-config!
  {:appenders
   {:println
    {:async? true
     :output-fn color-output-by-level}
    :spit
    (appenders/spit-appender {:async? true
                              :fname "aviary.log"})}})

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
                       (->>
                         (line-seq in)
                         (take-while identity)
                         (map #(some-> % g))))
                     (.close in)))
          ready? @ready
          result (binding [*out* out] (apply f args))]
      (doto out
        .flush
        .close)
      @reader
      result)))
