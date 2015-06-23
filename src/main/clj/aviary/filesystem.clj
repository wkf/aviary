(ns aviary.filesystem
  (:refer-clojure :exclude [merge])
  (:require [aviary.console :as console]
            [clojure.java.io :as io])
  (:import (org.apache.commons.io FileUtils
                                  FilenameUtils)))

(defn clean
  "Recursively delete the contents of a directory."
  [target]
  (let [file (io/file target)]
    (when (and (.exists file)
               (.isDirectory file))
      (FileUtils/cleanDirectory file))))

(defn merge
  "Recursively merge source path into target path."
  [source target]
  (FileUtils/copyDirectory (io/file source) (io/file target)))

(defn- normalize-path
  "path      :>> path/index.html
   path/     :>> path/index.html
   path.html :>> path.html"
  [path extension]
  (let [p (.replaceAll path "/$" "")
        e (FilenameUtils/getExtension p)]
    (if-not (empty? e)
      p
      (-> p
          (str "/index." extension)
          (.replaceAll "^/" "")))))

(defn relativize
  ([file] (relativize (System/getProperty "user.dir") file))
  ([path file]
   (.toString
     (.relativize (-> (io/file path) .getAbsoluteFile .toPath)
                  (-> (io/file file) .getAbsoluteFile .toPath)))))

(defn export
  "Write manifest contents to an output directory.

   Transform bare paths to a folder with and index file with
   the specified extension."
  [{:keys [path resources manifests clean?]}]
  (when-not (= clean? false)
    (console/warn :export/clean (relativize path))
    (clean path))
  (when resources
    (doseq [resource resources]
      (console/info :export/merge (str (relativize (io/resource resource)) " " :-> " " path))
      (merge (io/resource resource) path)))
  (when manifests
    (doseq [[extension
             manifest] manifests
            [path' f] (manifest)]
      (let [file (io/file
                   path (normalize-path path' extension))
            content (f)]
        (console/info :export/asset (relativize file))
        (FileUtils/writeStringToFile file content "UTF-8")))))
