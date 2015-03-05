(defproject aviary "0.1.8"
  :description "Static site builder with enough room to fly."
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [aviary/aviary-core _]
                 [aviary/aviary-ship _]
                 [aviary/aviary-watch _]
                 [aviary/aviary-serve _]
                 [aviary/aviary-figwheel _]
                 [aviary/aviary-filesystem _]]
  :plugins [[lein-modules "0.3.10"]]
  :modules {:versions {aviary :version
                       aviary/figwheel "0.2.5"
                       aviary/figwheel-sidecar "0.2.5"
                       org.clojure/clojure "1.6.0"
                       org.clojure/clojurescript "0.0-2850"
                       org.clojure/core.async "0.1.346.0-17112a-alpha"
                       com.stuartsierra/component "0.2.2"}
            :inherited {:url "https://github.com/wkf/aviary"
                        :scm {:name "git"
                              :url "https://github.com/wkf/aviary"}
                        :license {:name "Eclipse Public License"
                                  :url "http://www.eclipse.org/legal/epl-v10.html"}
                        :test-paths ["src/test"]
                        :source-paths ["src/main"]}}
  :release-tasks [["vcs" "assert-committed"]
                  ["modules" "test"]
                  ["modules" "change" "version" "leiningen.release/bump-version" "release"]
                  ["change" "version" "leiningen.release/bump-version" "release"]
                  ["vcs" "commit"]
                  ["vcs" "tag"]
                  ["modules" "deploy" "clojars"]
                  ["deploy" "clojars"]
                  ["modules" "change" "version" "leiningen.release/bump-version"]
                  ["change" "version" "leiningen.release/bump-version"]
                  ["modules" "install"]
                  ["vcs" "commit"]
                  ["vcs" "push"]])
