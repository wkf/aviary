(defproject aviary "0.1.19"
  :url "https://github.com/wkf/aviary"
  :scm {:name "git"
        :url "https://github.com/wkf/aviary"}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :test-paths ["src/test"]
  :source-paths ["src/main"]
  :description "Static site builder with enough room to fly."
  :dependencies [[org.clojure/clojure "1.9.0-alpha5"]
                 [org.clojure/clojurescript "1.9.36"]
                 [org.clojure/core.async "0.2.382"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [com.stuartsierra/component "0.3.1"]
                 [ring/ring-core "1.5.0"]
                 [figwheel-sidecar "0.5.4-2"]
                 [stasis "2.3.0"]
                 [enlive "1.1.6"]
                 [garden "1.3.2"]
                 [http-kit "2.1.19"]
                 [prone "1.1.1"]
                 [commons-io "2.5"]]
  :plugins [[lein-modules "0.3.11"]]
  :modules {:subprocess false}
  :release-tasks [["vcs" "assert-committed"]
                  ["test"]
                  ["modules" "change" "version" "leiningen.release/bump-version" "release"]
                  ["change" "version" "leiningen.release/bump-version" "release"]
                  ["vcs" "commit"]
                  ["vcs" "tag"]
                  ["modules" ":dirs" "lein-template" "deploy" "clojars"]
                  ["deploy" "clojars"]
                  ["modules" "change" "version" "leiningen.release/bump-version"]
                  ["change" "version" "leiningen.release/bump-version"]
                  ["vcs" "commit"]
                  ["vcs" "push"]])
