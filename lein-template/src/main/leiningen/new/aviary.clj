(ns leiningen.new.aviary
  "A Leiningen template for a basic Aviary project."
  (:require [leiningen.new.templates :refer [->files name-to-path sanitize-ns renderer year project-name]]))

(def render (renderer "aviary"))

(defn aviary
  "A Leiningen template for a basic Aviary project."
  [name & options]
  (let [data {:name (project-name name)
              :raw-name name
              :year (year)
              :path (name-to-path name)
              :namespace (sanitize-ns name)}]
    (->files data
             ["README.md" (render "README.md" data)]
             [".hgignore" (render "hgignore" data)]
             [".gitignore" (render "gitignore" data)]
             ["project.clj" (render "project.clj" data)]
             ["src/dev/clj/{{path}}/dev.clj" (render "src/dev/clj/aviary/dev.clj" data)]
             ["src/dev/cljs/{{path}}/dev.cljs" (render "src/dev/cljs/aviary/dev.cljs" data)]
             ["src/main/clj/{{path}}/site.clj" (render "src/main/clj/aviary/site.clj" data)]
             ["src/main/clj/{{path}}/style.clj" (render "src/main/clj/aviary/style.clj" data)]
             ["src/main/clj/{{path}}/markup.clj" (render "src/main/clj/aviary/markup.clj" data)]
             ["src/main/cljs/{{path}}/site.cljs" (render "src/main/clj/aviary/site.cljs" data)])))
