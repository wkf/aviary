(ns aviary.network-test
  (:require [clojure.test :refer :all]
            [aviary.network :refer :all]
            [clojure.core.async :as async]))

(def timeout 1000)

(defn >!!
  "Puts with a timeout"
  ([ch v] (>!! ch v timeout))
  ([ch v timeout']
   (let [to (async/timeout timeout')]
     (async/alt!!
       to nil
       [[ch v]] true))))

(defn <!!
  "Takes with a timeout"
  ([ch] (<!! ch 1000))
  ([ch timeout']
   (let [to (async/timeout timeout')]
     (async/alt!!
       to nil
       ch ([v] v)))))

(defn wire*
  "Like like aviary.network/wire, but creates and returns i/o channels"
  [n]
  (let [i (async/chan)
        o (async/chan)]
    (wire n i o)
    [i o]))

(deftest wire-single-identity-node-test
  (testing "wiring a single identity node"
    (let [[i o] (wire* (node identity))]

      (>!! i "hello")
      (is (= "hello" (<!! o))
          "should echo what was passed in"))))

(deftest wire-vector-identity-nodes-test
  (testing "wiring a vector of identity nodes"
    (let [[i o] (wire* [(node identity)
                        (node identity)])]

      (>!! i "hello")
      (is (= "hello" (<!! o))
          "should echo what was passed in"))))

(deftest wire-vector-inc-nodes-test
  (testing "wiring a vector of inc nodes"
    (let [[i o] (wire* [(node inc)
                        (node inc)])]
    (>!! i 0)
    (is (= 2 (<!! o))
        "should increment the input for each node"))))

(deftest wire-map-nodes-test
  (testing "wiring a map of nodes"
    (let [[i o] (wire* {odd? (node dec)
                        even? (node inc)})]
      (>!! i 0)
      (>!! i 1)
      (is (= [1 0] [(<!! o)
                    (<!! o)])
          "should route based on the map key predicate"))))

(deftest wire-vector-map-nodes-test
  (testing "wiring a map in a vector of nodes"
    (let [[i o] (wire* [(node inc)
                        {odd? (node dec)
                         even? (node inc)}
                        (node inc)])]
      (>!! i 0)
      (>!! i 1)
      (is (= [1 4] [(<!! o)
                    (<!! o)])
          "should split and then combine again after map node"))))

(deftest wire-single-blackhole-node-test
  (testing "wiring a single blackhole node"
    (let [[i o] (wire* (node (constantly nil)))]
      (>!! i "anything")
      (is (nil? (<!! o))
          "should not pass anything to the output"))))
