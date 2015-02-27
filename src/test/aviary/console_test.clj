(ns aviary.console-test
  (:require [clojure.test :refer :all]
            [aviary.console :refer :all]))

(deftest transform-out-lines-test
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
              (await-for 1000 logger))))
        "should output the result of passing each line to through the transformer")))

(deftest empty-transform-out-lines-test
  (testing "a function wrapped w ith transform-out-lines"
    (is (= ""
           (with-out-str
             ((transform-out-lines #(println "anything") (constantly nil)))))
        "should not output anything if the transformer returns nil")))
