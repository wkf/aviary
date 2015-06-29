(defproject aviary/lein-template "0.1.17-SNAPSHOT"
  :description "A Leiningen template for a basic Aviary project."
  :url "https://github.com/wkf/aviary"
  :scm {:name "git"
        :url "https://github.com/wkf/aviary"}
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :test-paths ["src/test"]
  :source-paths ["src/main"]
  :plugins [[lein-modules "0.3.10"]]
  :eval-in-leiningen true)
