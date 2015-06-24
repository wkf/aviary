(ns aviary.network
  "The Network protocol is for linking `nodes` together to build
   processing graphs. A node is a function taking an input and an
   output channel. Data is taken from the input channel, processed,
   and put on the output channel. If a nil is returned, processing
   stops.

   ;; a simple node
   (node #(assoc % :hello :world))

   Vectors can be used to chain nodes together. Data is passed
   and sent through the nodes in order:

   [(node #(assoc % :hello :world)
   (node #(assoc % :hello :chuck)]

   Maps can be used to route data to different nodes based on a
   predicate.

   {odd? (node dec)
   even? (node inc)}

   This can be combined with a vectors to build more complicated
   graphs:

   ;; always increment
   [(node inc)
   ;; ...then split the data
   {odd? (node dec)
   even? (node inc)}
   ;; ...then mix the channels
   (node inc)]

   Happy networking."
  (:require [clojure.core.async :as async])
  (:import (clojure.lang Fn
                         IPersistentMap
                         IPersistentVector)))

(defprotocol Network
  (wire [this i o] "Recursively connects channels to nodes."))

(extend-protocol Network
  Fn
  (wire [this i o] (this i o))

  IPersistentVector
  (wire [this i o]
    (async/pipe
      (reduce
        (fn [i x]
          (let [i' (->> (async/chan)
                        (async/pipe i))
                o' (async/chan)]
            (wire x i' o')
            o')) i this)
      o))

  IPersistentMap
  (wire [this i o]
    (let [i* (async/mult i)
          o* (async/mix o)]
      (doseq [[p x] this]
        (let [i' (->> (async/chan)
                      (async/tap i*)
                      (async/filter< p))
              o' (async/chan)]
          (async/admix o* o')
          (wire x i' o'))))))

(defn node
  "High-order function wrappng a function f in a go-loop in a function ready for wiring."
  [f]
  (fn [i o]
    (async/go-loop
      []
      (when-let [e (async/<! i)]
        (when-let [e' (f e)]
          (async/>! o e'))
        (recur)))))

(defmacro defnode
  "Convinience macro to create and def a node."
  [name & args]
  (let [[docstring bindings & body]
        (if (string? (first args)) args (conj args ""))]
    `(def ~name ~docstring
       (node
         (fn ~bindings ~@body)))))
