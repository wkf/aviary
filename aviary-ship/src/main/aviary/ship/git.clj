(ns aviary.ship.git
  (:require [aviary.ship.core :refer [ship]]
            [aviary.console :as console]
            [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.java.shell :refer [sh]]))

(defn- get-proj-dir
  "Get the project root directory path."
  []
  (System/getProperty "user.dir"))

(defn- sub-path
  "Subtract one path from another."
  [s s']
  (-> (.replace s s' "")
      (.replaceAll "^/" "")))

(defn- add-path
  "Combine two paths."
  [s s']
  (if (= s "")
    s'
    (.getPath (io/file s s'))))

(defn git [& args]
  (let [{:keys [out err exit]} (apply sh "git" args)]
    (when (= exit 0) out)))

(defn root-dir
  "Get the git root directory path."
  []
  (when-let [dir (git "rev-parse" "--show-toplevel")]
    (-> dir str/trim-newline io/file .getCanonicalPath)))

(defn branch-exists? [branch]
  (git "show-ref" "--verify" (str "refs/heads/" branch)))

(defn delete-branch!
  [branch]
  (console/info :git/delete-branch branch)
  (if-not (branch-exists? branch)
    true
    (git "branch" "-D" branch)))

(defn create-branch!
  [branch & [prefix]]
  (let [prefix (when-not (= prefix "") prefix)]
    (console/info :git/create-branch (str branch " " prefix))
    (if-not prefix
      (git "branch" branch)
      (git "subtree" "split" "--prefix" prefix "--branch" branch
           :dir (root-dir)))))

(defn push-branch!
  [branch & [remote]]
  (let [remote (or remote "origin")]
    (console/info
      :git/push-branch (str branch " " remote))
    (git "push" remote branch "--force")))

(defmethod ship :git [{:keys [path remote branch]}]
  (let [path (or path "")
        branch (or branch "gh-pages")
        prefix (-> (get-proj-dir)
                   (sub-path (root-dir))
                   (add-path path))]
    (and (delete-branch! branch)
         (create-branch! branch prefix)
         (push-branch! branch remote) true)))
