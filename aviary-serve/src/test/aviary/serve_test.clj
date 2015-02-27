(ns aviary.serve-test
  (:refer-clojure :exclude [get])
  (:require [aviary.system :as system]
            [org.httpkit.client :as http]
            [clojure.test :refer :all]
            [aviary.serve :refer :all])
  (:import (java.io File)))

(system/defsystem artemis-tau
  (serve {:port 9000
          :resources ["assets"]
          :manifests {"text/html" (fn []
                                    {"" #(str "hello shepard")
                                     "hello" #(str "hello miranda")})}}))

(defn get [path]
  @(http/get (str "http://127.0.0.1:9000/" path)))

(deftest serve-test
  (testing "starting a system with a serve component"
    (system/start artemis-tau)
    (are [result path] (= result (:body (get path)))
         "hello shepard" ""
         "hello miranda" "hello"
         "DEADBEEF\n" "deadbeef.txt")
    (system/stop artemis-tau)))
