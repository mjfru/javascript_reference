/*
! NodeJS - A Refresher
* JS is a 'hosted' language, therefore letting it be available in different environments.
Until now, the browser has hosted it for us with APIs and executes it.
* Now, we'll take the JS engine and use it in other places, allowing us to write our own APIs.
! One way to do this is with Node.js, and extracted V8 JS engine, enriched by extra APIs.

! Express JS - A Refresher
* A framework for Node.js that makes building web servers more streamlined!

! CORS - Cross-Origin Resource Sharing
* Imagine you have a website running, we also have another server with a backend, and we want them to communicate with each other.
* If we want to exchange a script or request between these two, we encounter a problem.
? By default, only requests to the same origin/domain are allowed; the browser blocks this behavior!
In the modern web where this is common practice, we want to tell our browser that it OK.
* This is where CORS come in.

* This is accomplished by adding some extra headers.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', *);
    res.setHeader('Access-Control-Allow-Methods', 'POST', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    })
    next();
*/
