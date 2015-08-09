(ns aviary.serve
  (:require [aviary.system :as system]
            [taoensso.timbre :refer [info warn error]]
            [bidi.ring :as bidi]
            [bidi.bidi :refer [compile-route]]
            [ring.util.response :as ring]
            [org.httpkit.server :refer [run-server]]))

(defn- ensure-trailing-slash
  "Use regular expression (with negative lookbehind) to ensure a trailing slash"
  [path]
  (.replaceAll path "(?<!/)$" "/"))

(defn- make-resource-routes [resources]
  (when resources
    (map
      (fn [path]
        ["/" (bidi/resources-maybe {:prefix
                                   (ensure-trailing-slash path)})])
      resources)))

(defn- make-manifest-handler [content-type content]
  (fn [req]
    (-> (content)
        (ring/response)
        (ring/content-type content-type))))

(defn- make-manifest-routes [manifests]
  (when manifests
    (mapv
      (fn [[content-type manifest]]
        ["/" (mapv
               (fn [[path content]]
                 [path (make-manifest-handler content-type content)])
               (manifest))])
      manifests)))

(defn- make-routes [config]
  ["" (vec
        (concat
          (-> config :resources make-resource-routes)
          (-> config :manifests make-manifest-routes)))])

(defn- make-dynamic-handler [config]
  (fn [req]
    (let [res ((-> config make-routes bidi/make-handler) req)
          key (keyword "http" (name (:request-method req)))
          path (:uri req)
          code (or (:status res) 404)]
      (cond
        (<= code 299) (info key (format "[%s] %s" code path))
        (<= code 399) (warn key (format "[%s] %s" code path))
        (<= code 599) (error key (format "[%s] %s" code path)))
      res)))

(defn- make-static-handler [config]
  (-> config make-routes compile-route bidi/make-handler))

(system/defcomponent serve [config]
  ([_] (let [handler (if (:static? config)
                       (make-static-handler config)
                       (make-dynamic-handler config))]
         (run-server handler (select-keys config [:port]))))
  ([_ stop] (stop)))
