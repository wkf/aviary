(ns aviary.core
  (:require [aviary.util :as util]
            [aviary.export :as export]
            [aviary.file-watcher :refer [new-file-watcher]]
            [aviary.figwheel-server :refer [new-figwheel-server] :as figwheel]
            [aviary.namespace-refresher :refer [new-namespace-refresher]]
            [aviary.web-handler :refer [new-web-handler]]
            [aviary.web-server :refer [new-web-server]]
            [aviary.switchboard :refer [new-chans new-switchboard]]
            [com.stuartsierra.component :as component]
            [clojure.core.async :as async]
            [clojure.java.browse :as browse]))

(defn get-defaults []
  (let [project-name (util/lein-project-name)
        styles-ns-str (str project-name ".styles")
        markup-ns-str (str project-name ".markup")]
    {:styles-ns-str styles-ns-str
     :markup-ns-str markup-ns-str
     :styles-ns-sym (symbol styles-ns-str)
     :markup-ns-sym (symbol markup-ns-str)
     :styles-manifest #(@(resolve (symbol styles-ns-str "manifest")))
     :markup-manifest #(@(resolve (symbol markup-ns-str "manifest")))
     :client-repl-ns-str (str project-name ".repl")
     :client-site-ns-str (str project-name ".site")}))

(defn watch [config]
  (let [{:keys [styles-ns-sym
                markup-ns-sym
                styles-manifest
                markup-manifest
                client-repl-ns-str]} (get-defaults)
        [web-server-port
         figwheel-server-port] (take 2 (util/free-ports))]
    (->
      (component/system-map
        :file-watcher
        (new-file-watcher
          {:code ["src/main"]
           :assets ["resources/assets"]
           :content ["resources/content"]})
        :file-watcher-chans
        (new-chans
          {:code #(async/chan 1)
           :assets #(async/chan 1)
           :content #(async/chan 1)})
        :figwheel-server
        (new-figwheel-server
          {:build-ids ["dev"]
           :all-builds
           [{:id "watch"
             :figwheel true
             :source-paths ["src/dev" "src/main"]
             :compiler (merge
                         {:main client-repl-ns-str
                          :asset-path "js/out"
                          :output-dir "target/public/js/out"
                          :output-to "target/public/js/out/main.js"
                          :optimizations :none
                          :source-map true
                          :pretty-print true}
                         (:client config))}]
           :figwheel-options
           {:server-port figwheel-server-port}})
        :figwheel-server-chans
        (new-chans
          {:messages #(async/chan 1)})
        :namespace-refresher
        (new-namespace-refresher)
        :namespace-refresher-chans
        (new-chans
          {:files #(async/chan 1)
           :namespaces #(async/chan 1)})
        :web-handler
        (new-web-handler
          {:public {:type :directory
                    :directory "target/public"}
           :assets {:type :directory
                    :directory "resources/assets"}
           :markup {:type :manifest
                    :manifest markup-manifest
                    :config (:markup config)}
           :styles {:type :manifest
                    :manifest styles-manifest
                    :config (:styles config)}})
        :web-server
        (new-web-server
          {:port (or (:port config) web-server-port)})
        :switchboard
        (new-switchboard
          (fn [{:keys [switchboard-chans
                       file-watcher-chans
                       figwheel-server-chans
                       namespace-refresher-chans]}]
            (let [{:keys [messages]} (:chans figwheel-server-chans)
                  {:keys [content assets code]} (:chans file-watcher-chans)
                  {:keys [files namespaces]} (:chans namespace-refresher-chans)
                  {:keys [styles markup styles* markup*]} (:chans switchboard-chans)]
              (async/pipe code files)
              (util/fan-out namespaces [styles markup])
              (async/pipe styles styles*)
              (async/pipe
                (async/merge [content assets markup]) markup*)
              (async/pipe
                (async/merge [styles* markup*]) messages))))
        :switchboard-chans
        (new-chans
          {:styles #(async/chan 1 (filter #{styles-ns-sym}))
           :markup #(async/chan 1 (filter #{markup-ns-sym}))
           :styles* #(async/chan 1 (map (comp
                                          figwheel/styles-changed-message
                                          (fn [_] (keys (styles-manifest)))
                                          (fn [_] (println "Refreshing styles")))))
           :markup* #(async/chan 1 (map (comp
                                          figwheel/markup-changed-message
                                          (fn [_] (keys (markup-manifest)))
                                          (fn [_] (println "Refreshing markup")))))}))
      (component/system-using
        {:web-server [:web-handler]
         :file-watcher {:chans :file-watcher-chans}
         :figwheel-server {:chans :figwheel-server-chans}
         :namespace-refresher {:chans :namespace-refresher-chans}
         :switchboard [:switchboard-chans
                       :file-watcher-chans
                       :figwheel-server-chans
                       :namespace-refresher-chans]}))))

(defn export [{:keys [target] :as config}]
  (let [{:keys [styles-manifest
                markup-manifest
                client-site-ns-str]} (get-defaults)]
    (export/export-to (or target "public")
      {:assets {:type :directory
                :directory "resources/assets"}
       :markup {:type :manifest
                :manifest markup-manifest
                :config (:markup config)}
       :styles {:type :manifest
                :manifest styles-manifest
                :config (:styles config)}
       :client {:type :build
                :build
                {:id "export"
                 :source-paths ["src/main"]
                 :compiler
                 (merge
                   {:main client-site-ns-str
                    :asset-path "js/out"
                    :output-dir "js/out"
                    :output-to "js/out/main.js"
                    :source-map "js/out/main.js.map"
                    :optimizations :advanced
                    :pretty-print false}
                   (:client config))}}})))

(defn browse [system]
  (when-let [port (get-in system [:web-server :config :port])]
    (browse/browse-url (str "http://localhost:" port))))

(defn start [system]
  (component/start system))

(defn stop [system]
  (component/stop system))
