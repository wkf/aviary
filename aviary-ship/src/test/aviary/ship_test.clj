(ns aviary.ship-test
  (:require [aviary.ship.git :as git]
            [clojure.test :refer :all]
            [aviary.ship :refer :all]))

(deftest ship-git-test
  (testing "ship a path to a git branch"
    (is (ship
          {:type :git
           :branch "aviary-ship-test"}))
    (git/delete-branch! "aviary-ship-test")
    (git/push-branch! ":aviary-ship-test")))
