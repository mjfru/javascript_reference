/*
! Browser Storage

! Browser vs. Server Storage

* A browser can store things temporarily, almost as a convenience, and on the machine of our user.
? It can do this via utilizing one or more of the following: localStorage, sessionStorage, cookies, and indexedDB.

* A server uses a server-side database and stores and persists data.


Since this page is about browser storage, let's break down the difference between LocalStorage, Cookies, and IndexedDB

* Local/Session Storage
Simple key-value store, useful for sessions IDs, analytics, user preferences or basic user-data.
Can be cleared by the user and via JS.
Easy to use, versatile, but bad for complex data.

* Cookies
Simple key-value pairs (with some config options)
Used for basic preferences and can be cleared with JS by the user.
A bit clunky to use, quite versatile, sent to a server, but bad for complex data.

* IndexedDB
Relatively sophisticated, client-side database
Manages complex data your web app needs
Can be cleared via the user and via JS
Clunky to use but great for complex (non-critical) data, good performance.
*/
