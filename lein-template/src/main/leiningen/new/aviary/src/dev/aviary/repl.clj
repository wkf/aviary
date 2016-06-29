(ns {{namespace}}.repl
  (:require [{{namespace}}.site :as site]
            [reloaded.repl :refer [system go stop reset reset-all]]))

(reloaded.repl/set-init! site/watch)
