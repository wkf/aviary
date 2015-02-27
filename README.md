# Aviary

A Clojure library designed to improve your development experience without putting you in a cage. I created it originally to help generate static sites, but it has grown into something with wider application. 

Aviary attempts to tastefully stich together prexisting clojure tools (like http-kit, hawk, and figwheel) to provide a cohesive development environment. It relies on the component library to manage service lifecycle, and comes with a number of prebuilt components to help kickstart initial setup. Since they are "just" components, you can write your own, or use someone else's. 

Aviary is similar to chestnut, but since it's a library, it's easier to integrate into existing projects.

Some (potentially) interesting Aviary features:

* Uses plain components
* Very flexible
* Easily configurable
* Uniform log messages
* A name related to birds

## Installation

To install, add the following dependency to your project.clj file:

    [aviary "0.1.1"]

Alternatively, since aviary is split into modules, you could install just the ones you need. For example, if you were only using aviary to reload clj files as you make changes, you could include just the `aviary-core` and `aviary-watch` modules:

    [aviary/aviary-core "0.1.1"]
    [aviary/aviary-watch "0.1.1"]


## Usage    
    
TODO

## License

Copyright (c) 2015 Will Farrell

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
