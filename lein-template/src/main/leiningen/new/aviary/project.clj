(defproject {{raw-name}} "0.1.0-SNAPSHOT"
  :description "FIXME: Write a description."
  :url "FIXME: Add a URL."
  :scm {:name "git"
        :url "FIXME: Add a URL."}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main {{namespace}}.site
  :source-paths ["src/main"]
  :test-paths ["src/test"]
  :dependencies [[org.clojure/clojure "1.9.0-alpha5"]
                 [org.clojure/clojurescript "1.9.36"]
                 [aviary "{{aviary-version}}"]]
  :profiles {:dev {:source-paths ["src/dev"]
                   :dependencies [[reloaded.repl "0.2.2"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   :repl-options {:init (go)
                                  :init-ns {{namespace}}.repl
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
  :aliases {"watch" ["run" "watch"]
            "export" ["run" "export"]})
