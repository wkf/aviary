(ns {{namespace}}.site
  (:gen-class)
  (:require {{namespace}}.styles
            {{namespace}}.markup
            [aviary.core :as aviary]))

(defn watch []
  (aviary/watch {:styles {:pretty-print? true}}))

(defn export []
  (aviary/export {:styles {:pretty-print? false}}))

(defn -main [command & _]
  (condp = command
    "watch" (-> (watch) aviary/start aviary/browse)
    "export" (export)
    (println "lein run [watch|export]")))
