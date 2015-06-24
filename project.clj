(defproject aviary "0.1.14"
  :url "https://github.com/wkf/aviary"
  :scm {:name "git"
        :url "https://github.com/wkf/aviary"}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :test-paths ["src/test/clj"]
  :source-paths ["src/main/clj"
                 "src/main/cljs"]
  :description "Static site builder with enough room to fly."
  :dependencies [[org.clojure/clojure "1.7.0-RC2"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [com.stuartsierra/component "0.2.2"]
                 [figwheel-sidecar "0.3.3"]
                 [clojurescript-build "0.1.6"]
                 [commons-io "2.4"]
                 [hawk "0.2.5"]
                 [ring "1.3.2"]
                 [http-kit "2.1.18"]
                 [bidi "1.18.0" :exclusions [org.clojure/clojure]]]
  :plugins [[lein-modules "0.3.10"]]
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
