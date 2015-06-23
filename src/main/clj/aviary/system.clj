(ns aviary.system
  (:require [com.stuartsierra.component :as component])
  (:import (clojure.lang Atom)
           (com.stuartsierra.component Lifecycle)))

(defn system
  "Create a system map with anonymous component names"
  [& components]
  (apply component/system-map
         (mapcat
           #(vector (keyword (str *ns*) (str (gensym))) %)
           components)))

(defn system*
  "Create a system map, exactly the same as component/system-map"
  [& components]
  (apply component/system-map components))

(defmacro defsystem
  "Def an atom with a system of anonymous components"
  [name & args]
  (let [[docstring & components]
        (if (string? (first args)) args (conj args ""))]
    `(defonce ~name
       (atom (system ~@components)))))

(defmacro defsystem*
  "Def an atom with a system of named components"
  [name & args]
  (let [[docstring & components]
        (if (string? (first args)) args (conj args ""))]
    `(defonce ~name
       (atom (system* ~@components)))))

(defn- atom? [a]
  (instance? Atom a))

(defn start
  "Delegate to component/start, unless given an atom.

   In that case, update system in place and return the atom."
  [s]
  (if (atom? s)
    (and (swap! s component/start) s)
    (component/start s)))

(defn stop
  "Delegate to component/stop, unless given an atom.

   In that case, update system in place and return the atom."
  [s]
  (if (atom? s)
    (and (swap! s component/stop) s)
    (component/stop s)))

(defn restart
  "Stop and the start. Really"
  [s]
  (-> s stop start))

(defmacro defcomponent
  "Remove some of the cermony required to create a component.

   Creates a record that implements the component/Lifecycle protocol,
   as well as a simple constructor."
  [name & args]
  (let [[docstring bindings start-form stop-form]
        (if (string? (first args)) args (conj args ""))
        record-sym (gensym name)
        stop-form (or stop-form '([_ _]))]
    `(do
       (defrecord ~record-sym ~bindings
         component/Lifecycle
         (component/start [c#]
           (if (:state c#)
             c#
             (assoc c# :state (let [~(-> start-form first first) c#]
                                ~@(rest start-form)))))
         (component/stop [c#]
           (when-let [state# (:state c#)]
             (let [~(-> stop-form first first) c#
                   ~(-> stop-form first second) state#]
               ~@(rest stop-form)))
           (dissoc c# :state)))
       (defn ~name [& args#]
         (apply ~(symbol (str "->" record-sym)) args#)))))

(defmacro using
  "Wrap a component to add a dependency that can be used when constructing
   the wrapped component.

   This is useful for creating a generic component that takes a function,
   like a web server with a handler. The handler might depend on the state
   of another component, but not the webserver.

   This macro creates an intermediate component to express the dependency.

   It might be pretty janky."
  [bindings body]
  (let [m (gensym)]
    `(letfn [(f# [~m]
               (component/using
                 (reify
                   ;; implement enough of Associative for component/start to inject dependencies
                   clojure.lang.Associative
                   (assoc [_# k# v#] (f# (assoc ~m k# v#)))
                   component/Lifecycle
                   ;; implement enough of Lifecycle for component/start to start the wrapped component
                   (start [_#]
                     (let ~(->> bindings
                                (map-indexed
                                  #(if (even? %1) %2 `(get ~m ~%2)))
                                vec)
                       (component/start ~body))))
                 ~(vec (take-nth 2 (rest bindings)))))]
       (f# {}))))
