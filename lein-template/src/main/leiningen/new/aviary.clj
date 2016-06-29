(ns leiningen.new.aviary
  "A Leiningen template for a basic Aviary project."
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [leiningen.new.templates :refer [->files name-to-path sanitize-ns renderer year project-name]]))

(def render (renderer "aviary"))

(defn load-props
  "Copied from:
   https://github.com/plexus/chestnut/blob/a6c74c8e18e1619f256a4aaf61f6efd8691a85b6/src/leiningen/new/chestnut.clj#L70"
  [file-name]
  (with-open [^java.io.Reader reader (clojure.java.io/reader file-name)]
    (let [props (java.util.Properties.)]
      (.load props reader)
      (into {} (for [[k v] props] [(keyword k) v])))))

(defn aviary-version []
  (->> "META-INF/maven/aviary/lein-template/pom.properties" io/resource load-props :version))

(defn aviary
  "A Leiningen template for a basic Aviary project."
  [name & options]
  (let [data {:name (project-name name)
              :raw-name name
              :year (year)
              :path (name-to-path name)
              :namespace (sanitize-ns name)
              :aviary-version (aviary-version)}]
    (->files data
             ["README.md" (render "README.md" data)]
             ["LICENSE" (render "LICENSE" data)]
             [".hgignore" (render "hgignore" data)]
             [".gitignore" (render "gitignore" data)]
             ["project.clj" (render "project.clj" data)]
             ["src/dev/{{path}}/dev.clj" (render "src/dev/aviary/repl.clj" data)]
             ["src/dev/{{path}}/dev.cljs" (render "src/dev/aviary/repl.cljs" data)]
             ["src/main/{{path}}/site.clj" (render "src/main/aviary/site.clj" data)]
             ["src/main/{{path}}/styles.clj" (render "src/main/aviary/styles.clj" data)]
             ["src/main/{{path}}/markup.clj" (render "src/main/aviary/markup.clj" data)]
             ["src/main/{{path}}/site.cljs" (render "src/main/aviary/site.cljs" data)])))
