(ns aviary.filesystem-test
  (:refer-clojure :exclude [merge])
  (:require [clojure.set :as set]
            [clojure.java.io :as io]
            [clojure.test :refer :all]
            [aviary.filesystem :refer :all])
  (:import (org.apache.commons.io FileUtils)))

(defn new-temp-path []
  (str (System/getProperty "java.io.tmpdir") (gensym "aviary") "/"))

(def dir-empty?
  (comp empty? rest file-seq io/file))

(def dir-not-empty?
  (complement dir-empty?))

(defn dir-contains? [path files]
  (set/superset? (set (file-seq (io/file path)))
                 (set (map #(io/file path %) files))))

(defn spit-hard
  "Spit so hard that it creates all necessary parent directories."
  [content & path-components]
  (FileUtils/writeStringToFile (apply io/file path-components) (str content) "UTF-8"))

(defn create-all [path files]
  (doseq [file files]
    (spit-hard "DEADBEEF\n" path file)))

(deftest clean-directory-test
  (testing "cleaning a non-empty directory"
    (let [temp (new-temp-path)
          files #{"test-a/hello.txt"
                  "test-b/hello/gunter.txt"}]
      (create-all temp files)
      (assert (dir-contains? temp files))
      (clean temp)
      (is (dir-empty? temp)
        "should remove all files and directories inside"))))

(deftest merge-directories-test
  (testing "merging a source directory into an empty target directory"
    (let [temp-a (new-temp-path)
          temp-b (new-temp-path)
          files #{"test-a/hello.txt"
                  "test-b/hello/gunter.txt"}]
      (create-all temp-a files)
      (assert (dir-empty? temp-b))
      (assert (dir-contains? temp-a files))
      (merge temp-a temp-b)
      (is (dir-contains? temp-b files)
        "should copy files and directories from source to target"))))

(deftest merge-not-empty-directories-test
  (testing "merging a source directory into an not empty target directory"
    (let [temp-a (new-temp-path)
          temp-b (new-temp-path)
          files-a #{"test-a/hello.txt"
                    "test-b/hello/gunter.txt"}
          files-b #{"test-c/goodbye.txt"
                    "test-d/goodbye/gunter.txt"}]
      (create-all temp-a files-a)
      (create-all temp-b files-b)
      (assert (dir-contains? temp-a files-a))
      (assert (dir-contains? temp-b files-b))
      (merge temp-a temp-b)
      (is (and (dir-contains? temp-b files-a)
               (dir-contains? temp-b files-b))
        "should copy files and directories from source to target and preserve target directory content"))))

(deftest export-manifest-test
  (testing "exporting a manifest"
    (let [temp (new-temp-path)
          files #{"index.html"
                  "help/page.html"
                  "contact/index.html"
                  "deadbeef.txt"}
          manifests {"html"
                    (fn []
                      {"" #(str "some content")
                       "contact" #(str "other content")
                       "help/page.html" #(str "some page content")})}]
      (export
        {:base temp
         :resources ["assets"]
         :manifests manifests})
      (is (dir-contains? temp files)
        "should create listed files and directories"))))
