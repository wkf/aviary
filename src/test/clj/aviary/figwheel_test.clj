(ns aviary.figwheel-test
  "Just testing that we can start the figwheel server and get a response,
   though it would also be nice to test the actual clojurescript building
   flow..."
  (:refer-clojure :exclude [get])
  (:require [aviary.system :as system]
            [org.httpkit.client :as http]
            [ring.util.response :as ring]
            [clojure.test :refer :all]
            [aviary.figwheel :refer :all]))

(defn ring-handler [req]
  (when (#{"/shepard"} (:uri req))
    (-> (ring/response "grunt")
        (ring/content-type "text/plain"))))

(system/defsystem artemis-tau
  (serve {:port 9000
          :output-to "target/assets/js/out/main.js"
          :output-dir "target/assets/js/out"
          :ring-handler 'aviary.figwheel-test/ring-handler}))

(defn get [path]
  @(http/get (str "http://127.0.0.1:9000/" path)))

(deftest serve-test
  (testing "starting a system with a serve component"
    (system/start artemis-tau)
    (are [result path] (= result (:body (get path)))
         "grunt" "shepard")
    (system/stop artemis-tau)))
