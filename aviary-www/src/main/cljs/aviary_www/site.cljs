(ns aviary-www.site
  (:require [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.style :as style]
            [goog.events :as events]
            [cljs.core.async :refer [<! put! close! chan dropping-buffer]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:import (goog.fx.dom Scroll)))

(defonce site (atom {:running? false}))

(defn listen
  "Return a core.async chan to receive the events for which you are listening"
  [el type]
  (let [out (chan
              (dropping-buffer 10))]
    (events/listen
      el type #(put! out %))
    out))

(defn scroll-page []
  (let [scroll (dom/getDocumentScroll)
        body (aget (dom/getElementsByTagNameAndClass "body") "0")]
    (.play (Scroll. body
                    (array (aget scroll "x")
                           (aget scroll "y"))
                    (array (aget scroll "x") 0)
                    500))))

(defn update-nav []
  (let [top (aget
              (dom/getDocumentScroll) "y")
        nav (aget
              (dom/getElementsByTagNameAndClass "nav") "0")
        nav-height (aget
                     (style/getSize nav) "height")
        header (aget
                 (dom/getElementsByTagNameAndClass "header") "0")
        header-height (aget
                        (style/getSize header) "height")]
    ((if (>= top (- header-height nav-height))
       classes/add
       classes/remove) nav "active")))

(defn start
  "Start the site. Attempt to be idempotent."
  []
  (when-not (:running? @site)
    (swap! site assoc :running? true))
  (when-not (:scrolls @site)
    (let [scrolls (listen (dom/getWindow) "scroll")
          clicks (listen
                   (aget (dom/getElementsByTagNameAndClass "a" "scroll") "0") "click")]
      (swap! site assoc :clicks clicks)
      (swap! site assoc :scrolls scrolls)
      (go (while (alt!
                   clicks ([e] (when e (scroll-page) true))
                   scrolls ([v] (when v (update-nav) true))))))))

(defn stop
  "Stop the site. Attempt to be idempotent. Useful for interactive local development."
  []
  (when (:running? @site)
    (swap! site assoc :running? false))
  (when-let [clicks (:clicks @site)]
    (close! clicks)
    (swap! site dissoc :clicks))
  (when-let [scrolls (:scrolls @site)]
    (close! scrolls)
    (swap! site dissoc :scrolls)))

(start)
