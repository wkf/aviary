(ns aviary.watch
  (:require [aviary.system :as system]
            [aviary.network :as network]
            [aviary.console :as console]
            [hawk.core :as hawk]
            [clojure.core.async :as async]
            [clojure.tools.namespace.file :refer [read-file-ns-decl clojure-file?]]))

(system/defcomponent watch [specs]
  ([_] (apply hawk/watch! specs))
  ([_ watcher] (hawk/stop! watcher)))

(defn reload-file
  "Reload a namespace given a file"
  [file]
  (when (and file (clojure-file? file))
    (let [ns' (-> file read-file-ns-decl second)]
      (try
        (require ns' :reload)
        ns'
        (catch Exception e
          (.printStackTrace e))))))

(defn watch-clj
  ([paths] (watch-clj paths identity))
  ([paths f]
   [{:paths (if (string? paths) [paths] paths)
     :handler (fn [_ e]
                (when-let [ns' (-> e :file reload-file)]
                  ;; TODO: replace these with a more uniform logging function
                  (console/info :clj/reload ns')
                  (f ns')))}]))

(system/defcomponent watch*
  "Component to watch for file and folder changes.

   `specs` is a map, each key is either a string (or an array
   of strings) of paths to watch. Each value must implements the
   aviary.network/Network protocol.

   For example, to reload clojure source files at `path`:

   (watch {path (reload)})"
  [specs]
  ([_] (let [chans (map
                     #(vector (async/chan)
                              (async/chan))
                     specs)]
         {:chans chans
          :watcher (hawk/watch!
                     (map
                       (fn [[paths machine] [i o]]
                         (network/wire machine i o)
                         [{:paths (if (string? paths) [paths] paths)
                           :handler (fn [_ e] (async/put! i e))}])
                       specs chans))}))
  ([_ ctx] (let [{:keys [watcher chans]} ctx]
             (doseq [[i o] chans]
               (async/close! i)
               (async/close! o))
             (hawk/stop! watcher))))

(network/defnode reload
  "Reload a namespace from a map containing :file, and
   return a map including the namespace."
  [e]
  (when-let [ns' (-> e :file reload-file)]
    (assoc e :ns ns')))
