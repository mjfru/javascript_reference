/*
! HTTP Network Requests in JavaScript

? What & Why?
Consider the following:

* <Your JavaScript>
getUserInput();
storeOnServer();
fetchPosts();

? These two (JS and HTML interact by getting user input, updating posts, deleting, etc.)

* Web Page (Rendered HTML)
<form>
  UserInput
</form>

<ul>
  List of Posts
</ul>

? The web page and backend server should NOT directly communicate to avoid reloads

* Backend Server (API - Application Programming Interface)
POST /posts {title: "...", content: "..."}
GET /posts

? Instead, the script and backend should be having some 'behind the scenes' communication.


! HTTP Overview
* <Script> (Client-side)
The frontend, detached from the backend
Responsible for fetching and sending data

* HTTP Requests
URL (domain + path) www.mypage.com/posts
HTTP Methods: GET, POST, PATCH, PUT, DELETE, sent the the backend
HTTP Headers - Extra metadata
HTTP Body - Data to be sent in different formats, like JSON

* Server
May run on a different server / domain
Responsible for storing and retrieving data (with a database)
*/