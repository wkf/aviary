(ns aviary.console-test
  (:require [clojure.test :refer :all]
            [aviary.console :refer :all]))

;; FIXME: figure out how to wait for the timbre agent to finish up...
#_(deftest transform-out-lines-test
  (testing "a function wrapped with transform-out-lines"
    (is (= "x\ny\nz\n"
          (with-out-str
            (do
              ((transform-out-lines
                 (fn []
                   (println "a")
                   (println "b")
                   (println "c"))
                 (fn [x]
                   (condp = x
                     "a" "x"
                     "b" "y"
                     "c" "z"))))
              (Thread/sleep 500))))
        "should output the result of passing each line to through the transformer")))

(deftest empty-transform-out-lines-test
  (testing "a function wrapped w ith transform-out-lines"
    (is (= ""
           (with-out-str
             ((transform-out-lines #(println "anything") (constantly nil)))))
        "should not output anything if the transformer returns nil")))
