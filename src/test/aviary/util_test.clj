(ns aviary.util-test
  (:require [aviary.util :refer :all]
            [clojure.test :refer :all]
            [clojure.set :as set]
            [clojure.java.io :as io])
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

(defn clean-directory
  "Recursively delete the contents of a directory."
  [target]
  (let [file (io/file target)]
    (if-not (.exists file)
      (FileUtils/forceMkdir file)
      (when (.isDirectory file)
        (FileUtils/cleanDirectory file)))))

(deftest merge-directories-test
  (testing "merging a source directory into an empty target directory"
    (let [temp-a (new-temp-path)
          temp-b (new-temp-path)
          files #{"test-a/hello.txt"
                  "test-b/hello/gunter.txt"}]
      (clean-directory temp-b)
      (create-all temp-a files)
      (assert (dir-empty? temp-b))
      (assert (dir-contains? temp-a files))
      (merge-directories temp-b temp-a)
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
      (merge-directories temp-b temp-a)
      (is (and (dir-contains? temp-b files-a)
            (dir-contains? temp-b files-b))
        "should copy files and directories from source to target and preserve target directory content"))))

(deftest stable-free-ports-test
  (testing "free-ports"
    (is (=
          (first (free-ports))
          (first (free-ports)))
      "should return the same ports in the same order")))
