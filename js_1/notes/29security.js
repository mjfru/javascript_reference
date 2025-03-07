/*
! Security in JavaScript
? What could go wrong?

With JavaScript in your browser, there are multiple security concerns:
Security details in your code, cross-site scripting (XSS) attacks, cross-site request forgery (CSRF), and cross-origin resource sharing (CORS).

* Your JS code is part of what the browser downloads and runs, meaning anyone can view your code; including security-relevant details.
Attackers may be able to abuse exposed data, like database access credentials.
* Don't put important information into your front-end code!

! XSS - Cross-site Scripting
* Attack pattern where malicious JS code gets injected and executed in your application.
Injected code can do anything your code could do as well.
Example: Unchecked user-generated content.
* This can be prevented by 'sanitising' user-generated data, via packages or custom code.
? Additionally, 3rd party libraries can be taken advantaged of if they're not activiely maintained and secure.

! CSRF - Cross-site Request Forgery
* People trick you into clicking on a link, image, etc, and abuse your local storage cookies.
Requests to malicious servers are made with user's cookies and are executed without the user knowing (until it's too late).
Not quite a JavaScript, but a general server security issue.

! CORS - Cross-Origin Resource Sharing
* Not an attack pattern but a security concept; requests are only allowed from the same origin (domain).
Controlled via server-side response headers and browser.
Example: JavaScript modules

! Quiz
? What should you NOT store in your client-side (browser-side) JavaScript code?
* Database credentials to open a connection to a database.

? What's a potential XSS scenario?
* You output user-generated content (e.g. user input in an <input> field) via innerHTML.

? How could attackers execute malicious code on your website (for everyone visiting your site)?
* Attackers can prepare a script and enter it in a page input which in turn might be stored in a database or URL; abuse missing sanitization.
*/
