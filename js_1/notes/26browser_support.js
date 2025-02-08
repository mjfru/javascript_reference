/*
! Browser Support

? Suppose you want to use the convenient fetch().
You can't control which browser your users will use and can't rely that your users will use the same as you.
When Internet Explorer was still around, it didn't support this, even though all other browsers did (since ~2017).

! Browser Features vs. JS Syntax
The browser decides what features it offers (fetch(), geolocation, DOM, API, etc.)
These are implemented individually, per browser.

JS Syntax are features that are built into the JS engine and the browser's JS engine determines which JS syntax/version is supported.
Ex: let, const, async/await, Promises...
Implemented individually or in chunks (ES6, ES7...)

* Not all browsers support all features and support changes all the time in modern ('evergreen') browsers.
Legacy browsers (Internet Explorer) do not receive features anymore.

! Checking Features & Browser Support
* MDN - Check feature article - browser support table
Also often includes notes, fallbacks, and alternatives.

* caniuse.com - Search for a feature name to get a detailed overview, including browser market shares!

* Google - Might return information for more complex issues, such as StackOverflow topics and discussions.

* ES / JS Compatable - For next-gen JS Syntax features
Provides detailed feature split and also includes support of transpilers.

? Which browser support do you need?
Naive thought: Support ALL browsers and versions...
! Don't do this, you'll ship too much code, pass up on some features

* Analyze your market; who will be your users?
An internal tool/app: company browser might be clearly defined!
Tech-savvy users: Very likely to use cutting-edge browsers & versions
Older/non-tech people: Likely to use older/not updated browsers

! Using Feature Detection & Fallbacks
Check if available ('not undefined')
Available?:
Execute code and use feature

Not available?:
Execute fallback code, show an error message

! Using Polyfill
? Say you want to use Promises, which may or may not be included in all browsers.

* Including a Polyfill, a third-party JS code which add an unsupported feature to the brower (for script execution).
This is only possible for some features (i.e. where you can re-create the missing functionality in other ways).

! Using Transpilation
* For JavaScript essential features (let, const, async/await), you cannot really get around getting a subsitute method for browsers.
* We will 'convert' (transpile) modern code to 'older' code
Third-party tools like Babel convert your code to code that works in older browsers as well.
? Write modern code, use cutting-edge features ---> Ship (deploy) cross-browser code


*/
