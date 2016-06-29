(ns aviary.export
  (:require [aviary.util :as util]
            [stasis.core :as stasis]
            [cljs.build.api :as cljs]))

(defmulti export #(:type %2))

(defmethod export :build [target {:keys [build]}]
  (let [prepend-target
        #(if (string? %) (util/join-paths target %) %)]
    (cljs/build
      (apply cljs/inputs (:source-paths build))
      (-> build :compiler
        (update :output-to prepend-target)
        (update :output-dir prepend-target)
        (update :source-map prepend-target)))))

(defmethod export :manifest [target {:keys [manifest config]}]
  (stasis/export-pages (manifest) target config))

(defmethod export :directory [target {:keys [directory]}]
  (util/merge-directories target directory))

(defn export-to [target specs]
  (println
    (str "Exporting \"" target "\"..."))
  (println
    (str "Exported \"" target "\" in")
    (util/elapsed
      (stasis/empty-directory! target)
      (doseq [[n spec] specs]
        (print (str "  " n " => "))
        (println (util/elapsed (export target spec)) "seconds.")))
    "seconds."))
