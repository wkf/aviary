(defproject aviary/aviary-www "0.1.5-SNAPSHOT"
  :description "GitHub pages site for Aviary."
  :url "https://github.com/wkf/aviary"
  :scm {:name "git"
        :url "https://github.com/wkf/aviary"}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main aviary-www.site
  :source-paths ["src/main/clj"
                 "src/main/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [aviary "0.1.6"]
                 [enlive "1.1.5"]
                 [garden "1.2.5"]
                 [endophile "0.1.2"]
                 [clygments "0.1.1"]]
  :profiles {:dev {:source-paths ["src/dev/clj"
                                  "src/dev/cljs"]
                   :dependencies [[weasel "0.5.0"]
                                  [com.cemerick/piggieback "0.1.5"]]
                   :repl-options {:init (aviary-www.dev/start)
                                  :init-ns aviary-www.dev
                                  :nrepl-middleware
                                  [cemerick.piggieback/wrap-cljs-repl]}}}
  :aliases {"ship" ["run" ":ship"]
            "export" ["run" ":export"]})
