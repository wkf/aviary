(defproject aviary/aviary-figwheel "0.1.0"
  :description "Aviary figwheel module for compiling clojurescript and reloading assets."
  :url "https://github.com/wkf/aviary"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :test-paths ["src/test/clj"]
  :source-paths ["src/main/clj"
                 "src/main/cljs"]
  :dependencies [[org.clojure/clojure _]
                 [org.clojure/core.async _]
                 [org.clojure/clojurescript _]
                 [aviary/aviary-core _]
                 [clojurescript-build "0.1.5"]
                 [figwheel "0.2.5-SNAPSHOT"]
                 [figwheel-sidecar "0.2.5-SNAPSHOT"]]
  :plugins [[lein-modules "0.3.10"]]
  :profiles {:dev {:dependencies [[ring "1.3.2"]
                                  [http-kit "2.1.18"]]}})
