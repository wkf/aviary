(defproject aviary "0.1.0-SNAPSHOT"
  :description "Static site builder with enough room to fly."
  :url "https://github.com/wkf/aviary"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [aviary/aviary-core _]
                 [aviary/aviary-watch _]
                 [aviary/aviary-serve _]
                 [aviary/aviary-figwheel _]
                 [aviary/aviary-filesystem _]]
  :plugins [[lein-modules "0.3.10"]]
  :modules {:subprocess false
            :versions {aviary :version
                       org.clojure/clojure "1.6.0"
                       org.clojure/clojurescript "0.0-2850"
                       org.clojure/core.async "0.1.346.0-17112a-alpha"
                       com.stuartsierra/component "0.2.2"}
            :inherited {:test-paths ["src/test"]
                        :source-paths ["src/main"]}})
