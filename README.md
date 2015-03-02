# Aviary

[![Join the chat at https://gitter.im/wkf/aviary](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/wkf/aviary?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A Clojure library designed to improve your development experience without putting you in a cage. I created it originally to help generate static sites, but it has grown into something with wider application.

Aviary attempts to tastefully stitch together preexisting clojure tools (like [http-kit](https://github.com/http-kit/http-kit "http-kit"), [hawk](https://github.com/wkf/hawk "hawk"), and [figwheel](https://github.com/bhauman/lein-figwheel "figwheel")) to provide a cohesive development environment. It relies on Sturt Sierra's [component](https://github.com/stuartsierra/component "component") library to manage service lifecycle, and comes with a number of useful components to help kickstart initial setup. Since they are "just" components, you can write your own, or use someone else's.

Aviary can provide a similar experience to [chestnut](https://github.com/plexus/chestnut "chestnut"), but since it's a library, it's easier to integrate into existing projects.

Some (potentially) interesting Aviary features:

* Uses plain components
* Very flexible
* Easily configurable
* Uniform log messages
* A name related to birds

## Installation

To install, add the following dependency to your `project.clj` file:

    [aviary "0.1.1"]

Alternatively, since aviary is split into modules, you could install just the ones you need. For example, if you were only using aviary to reload clj files as you make changes, you could include just the `aviary-core` and `aviary-watch` modules:

    [aviary/aviary-core "0.1.1"]
    [aviary/aviary-watch "0.1.1"]


## Usage

Using Aviary is mostly about building systems of components, and then running the system. We'll start with some simple examples.

### A Simple System

Let's build a simple system to reload clj namespaces as the files are changed on disk.

Begin by requiring the necessary Aviary namespaces:

    (require '[aviary.system :refer [defsystem defsystem* start stop]
             '[aviary.watch :refer [watch watch-clj])

Then define the system with the `defsystem` macro:

    (defsystem dev
      (watch [(watch-clj ["src"])]))

It's also possible to name system components using the `defsystem*` macro. This is functionally equivalent to the above example:

    (defsystem dev
       :watch (watch [(watch-clj ["src"])]))

Now you can use the `start` and `stop` functions to control the lifecycle of the system (and all its components).

    ;; start the system
    (start dev)

    ;; stop the system
    (stop dev)

While the system is running, namespaces are reloaded as you save changes to source files.

See the API documentation for more details.

### A More Complicated System

Now let's see a more complicated example. This system will reload namespaces with `aviary.watch`, rebuild cljs with `aviary.figwheel`, and serve development assets with `aviary.serve`. Figwheel is also used to reload the browser when files change.

    (require '[example.style :as :style]
             '[example.markup :as :markup]
             '[aviary.system :refer [defsystem* start stop]
             '[aviary.watch :refer [watch] :as w]
             '[aviary.serve :refer [serve]]
             '[aviary.figwheel :as fw])

    ;; ...

    ;; manifests are functions that return a map of paths to content producing functions
    ;; example: (fn [config] {"" #(str "hello world")})
    (defn style-manifest []
      (style/manifest style-config))

    ;; same as above, but for markup files
    (defn markup-manifest []
      (markup/manifest markup-config))

    (defsystem* dev
      ;; create a component to serve development assets
      :serve (serve
               {:port 3000
                ;; serve files from these resource paths
                :resources ["assets"
                            "target/assets"]
                ;; manifests are functions that return a map of paths to content producing functions
                ;; (fn [config] {"" #(str "hello world")})
                :manifests {"text/css" style-manifest
                            "text/html" markup-manifest}})
      ;; the `using` macro is similar to `using` from the component library, but also creates a lexical binding for any dependencies.
      :watch (using [fw :figwheel]
               ;; create a component to watch source code files for changes
               (watch [(w/watch-clj
                         ["src/dev/clj"
                          "src/main/clj"]
                         ;; the `watch-clj` handler accepts the reloaded namespace as an argument
                         #(condp = %
                            ;; when the 'example.style namespace changes, send a list of changed files to the client with figwheel
                            'example.style (->> (style-manifest) keys (fw/reload-css fw))
                            ;; same as above, only for markup changes
                            'example.markup (->> (markup-manifest) keys (fw/reload-html fw)) nil))
                       ;; watch far changes to cljs source files
                       (fw/watch-cljs fw {:source-paths ["src/dev/cljs"
                                                         "src/main/cljs"]
                                          ;; build cljs files and send a list of changes to the client with figwheel
                                          :build-options {:output-to "resources/target/assets/js/out/main.js"
                                                          :output-dir "resources/target/assets/js/out"
                                                          :optimizations :none
                                                          :source-map true
                                                          :pretty-print true
                                                          :warnings {:single-segment-namespace false}}})]))
      ;; create a component to manage the figwheel websocket server
      :figwheel (fw/serve {:port 3001
                           :output-to "resources/target/assets/js/out/main.js"
                           :output-dir "resources/target/assets/js/out"}))

    ;; start the dev system
    (start dev)

    ;; stop the dev system
    (stop dev)

On the client, connect to the figwheel server to receive update notifications.

    (require '[example.core :as example]
             '[aviary.figwheel :as fw]))

    ;; start the figwheel client
    (fw/start
      ;; Since cljs is updated without refreshing the page, it can be necessary to update your app's state
      {:on-jsload #(do (example/stop) (example/start))
       ;; since figwheel isn't serving static assets, it's necessary to specify the figwheel websocket url
       :websocket-url "ws://localhost:3001/figwheel-ws"})


## API

For now, the best API documentation is the docstrings in the source code.

## Tests

To run the tests for all Aviary modules, use lein modules:

    lein modules test

## License

Copyright (c) 2015 Will Farrell

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
