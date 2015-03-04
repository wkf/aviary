(defproject aviary/aviary-serve "0.1.5"
  :description "Aviary module for serving content with http-kit."
  :dependencies [[org.clojure/clojure _]
                 [aviary/aviary-core _]
                 [ring "1.3.2"]
                 [http-kit "2.1.18"]
                 [bidi "1.18.0" :exclusions [org.clojure/clojure]]]
  :plugins [[lein-modules "0.3.10"]])
