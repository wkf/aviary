(ns aviary.system-test
  (:require [clojure.test :refer :all]
            [aviary.system :refer :all]))

(def thumper-state (atom {:running? false}))
(def doodler-state (atom {:running? false}))

(defcomponent thumper
  "A component for thumping"
  [x]
  ([_] (swap! thumper-state assoc :running? true) x)
  ([_ x] (swap! thumper-state assoc :running? false)))

(defcomponent doodler
  "A component for doodling"
  [x]
  ([_] (swap! doodler-state assoc :running? true) x)
  ([_ x] (swap! doodler-state assoc :running? false)))

(defsystem attican-beta
  (doodler 1))

(defsystem* artemis-tau
  :doodler (doodler 1)
  :thumper (thumper 1))

(defsystem* hades-gamma
  :doodler (doodler 1)
  :thumper (using [d :doodler] (thumper (-> d :state))))

(defmacro with-systems
  "A helper macro to start and cleanup systems."
  [bindings & body]
  (let [bs (partition 2 bindings)
        ss (map (comp gensym str first) bs)
        bs (mapcat
             (fn [[sym sys] sym']
               [[sym' `(start ~sys)] [sym sym']])
             bs ss)
        ss (map
             (fn [s] `(stop ~s)) ss)]
    `(let ~(vec (apply concat bs))
       (try ~@body (finally ~@ss)))))

(deftest start-stop-single-system-test
  (testing "cycling a single system"
    (let [s (start (thumper 1))]
      (is (:running? @thumper-state)
          "should start the system")
      (stop s)
      (is (not (:running? @thumper-state))
          "should stop the system"))))

(deftest start-stop-multiple-systems-test
  (testing "cycling multiple systems"
    (with-systems [_ (system (thumper 1))
                   _ (system (doodler 1))]
      (is (and (:running? @thumper-state)
               (:running? @doodler-state))
          "should start all the systems"))
    (is (not (or (:running? @thumper-state)
                 (:running? @doodler-state)))
        "should stop all the systems")))

(deftest examine-system-state-test
  (testing "examining system state"
    (with-systems [s (system* :thumper (thumper 1))]
      (is (= 1 (-> s :thumper :state))
          "should match what was passed"))))

(deftest start-stop-defsystem-test
  (testing "system created with defsystem"
    (start attican-beta)
    (is (:running? @doodler-state) "should start")
    (stop attican-beta)
    (is (not (:running? @doodler-state)) "should stop")))

(deftest start-stop-defsystem*-test
  (testing "system created with defsystem*"
    (start artemis-tau)
    (is (and (:running? @doodler-state)
             (:running? @thumper-state)) "should start")
    (stop artemis-tau)
    (is (not (or (:running? @doodler-state)
                 (:running? @thumper-state))) "should stop")))

(deftest examine-state-with-using-test
  (testing "system with a dependency expressed via `using`"
    (with-systems [s (system*
                      :thumper (thumper "hello")
                      :doodler (using
                                [t :thumper] (doodler (-> t :state))))]
      (is (= (-> s :thumper :state)
             (-> s :doodler :state))
          "should have components with the same state"))))
