(defproject aviary/aviary-figwheel "0.1.10"
  :description "Aviary figwheel module for compiling clojurescript and reloading assets."
  :test-paths ["src/test/clj"]
  :source-paths ["src/main/clj"
                 "src/main/cljs"]
  :dependencies [[org.clojure/clojure _]
                 [org.clojure/core.async _]
                 [org.clojure/clojurescript _]
                 [aviary/figwheel _]
                 [aviary/figwheel-sidecar _]
                 [aviary/aviary-core _]
                 [clojurescript-build "0.1.5"]]
  :plugins [[lein-modules "0.3.10"]]
  :profiles {:dev {:dependencies [[ring "1.3.2"]
                                  [http-kit "2.1.18"]]}})
