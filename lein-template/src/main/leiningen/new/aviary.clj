(ns leiningen.new.aviary
  "A Leiningen template for a basic Aviary project."
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [leiningen.new.templates :refer [->files name-to-path sanitize-ns renderer year project-name]]))

(def render (renderer "aviary"))

(defn unpack
  "Modified from:
   https://github.com/tailrecursion/hlisp-template/blob/65b89bd257eca86c4ce76b82066a0b059323cdfb/src/leiningen/new/hlisp.clj"
  [name-proj name-in name-out]
  (let [p  (str/join "/" ["leiningen" "new" "aviary" name-in])
        i  (io/resource p)
        o  (-> (io/file
                 (System/getProperty "leiningen.original.pwd"))
               (io/file name-proj name-out))
        _  (io/make-parents o)
        is (io/input-stream i)
        os (io/output-stream o)]
    (io/copy is os)
    (.flush os)))

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
             ["src/dev/clj/{{path}}/dev.clj" (render "src/dev/clj/aviary/dev.clj" data)]
             ["src/dev/cljs/{{path}}/dev.cljs" (render "src/dev/cljs/aviary/dev.cljs" data)]
             ["src/main/clj/{{path}}/site.clj" (render "src/main/clj/aviary/site.clj" data)]
             ["src/main/clj/{{path}}/style.clj" (render "src/main/clj/aviary/style.clj" data)]
             ["src/main/clj/{{path}}/markup.clj" (render "src/main/clj/aviary/markup.clj" data)]
             ["src/main/cljs/{{path}}/site.cljs" (render "src/main/cljs/aviary/site.cljs" data)])
    (mapv #(apply unpack (:name data) %)
          [["resources/assets/favicon.ico" "resources/assets/favicon.ico"]
           ["resources/assets/aviary-tile.jpg" "resources/assets/aviary-tile.jpg"]
           ["resources/assets/aviary-white.svg" "resources/assets/aviary-white.svg"]])))
