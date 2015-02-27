(ns aviary.watch-test
  (:require [aviary.system :as system]
            [clojure.java.io :as io]
            [clojure.tools.namespace.find :as find]
            [clojure.tools.namespace.file :as file]
            [clojure.test :refer :all]
            [aviary.watch :refer :all])
  (:import (org.apache.commons.io FileUtils)))

(defn touch [path]
  (FileUtils/touch (io/file path)))

(defn find-source-files
  "Returns all source files declaring the given namespace."
  ([ns]
   (find-source-files ns "."))
  ([ns dir]
   (filter
     #(= (-> % file/read-file-ns-decl second) ns)
     (find/find-clojure-sources-in-dir (io/file dir)))))

(deftest watch-test
  (testing "when touched, a watched file"
    (let [ns 'aviary.watch-test.touch
          path (-> ns find-source-files first .getCanonicalPath)
          fired (promise)
          system (system/start
                   (system/system
                     (watch
                       [(watch-clj path #(deliver fired %))])))]
      ;; explicitly removing the namespace makes testing for its existence much more straightforward
      (remove-ns ns)
      (assert (nil? (find-ns ns)))
      (touch path)
      (is (= ns (deref fired 1000 :timeout)) "should fire callback")
      (is (find-ns ns) "should be reloaded")
      (system/stop system))))
