const customers = ["Matt", "Jim", "Austin"];

const activeCustomers = ["Jim", "Austin"];

//* LoDash can help us find the difference between these two arrays without writing our own function

// I downloaded the file and included it in my HTML <script>, but NPM is an option too.
// To include a library, there are many options, npm i --save lodash or using a CDN.

const inactiveCustomers = _.difference(customers, activeCustomers);
console.log(inactiveCustomers)