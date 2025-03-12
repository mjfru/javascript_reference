/*
! Performance Optimizations
? What exactly is "performance" in the context of web sites and applications?
* Lots of things:
  - Startup time
    - How long does it take to see something on the screen?
    - How quickly is a user able to interact with the page?

  - Runtime performance:
    - How smoothly does the application run (are there freezes or lag)?
    - How smooth do animations play? Is there any "visual lag"?
    - Are there any memory leaks, is the page getting slower over time?

* All of this is influenced by a lot of factors; CSS code, HTML code, and of course JS.
- Also is influenced by server speed and configurations.

? What exactly influences performance?
* JavaScript Execution:
Startup Time:
  - How fast does the script load
  * The bundle / script size: Delays initial parsing / execution
  * The number of HTTP roundtrips (because of non-bundled code, third-party library CDNs); delays initial parsing / execution

Runtime Performance:
  - How much "work" does the script do?
  - How much memory is occupied?
  * Optimizing code execution, DOM access: Avoid unncessary code execution, especially DOM operations / repaints.
  ! Utitlizing the DOM can be "expensive".
  * Avoiding memory leaks: Can crash your application in the worst case, but it will slow it down in all cases.
  ? It's always a good idea to be open to finding code alternatives with better performance; especially important for 'high-frequency' code parts.
  * Micro-optimizations in your code: Optimize for a very specific use-case

! Measuring & Auditing
* Don't guess what's slowing down your code, measure it!
  - Check roundtrips and script size, set the script and bundle size budgets.
  - Measure performance with devtools.
  - Explore best practices, patterns, and benchmarks on the internet
  ! Be sure to measure your production code, not development!

* Some helpful code snippets we can utilize are:
  ? performance.now()
    - Checks the execution time (difference) for certain operations.
  ? Browser DevTools
    - Can detect unnecessary code executions, HTTP requests, and measure execution time + memory leaks
  ? jsperf.com
    - Compare alternative code snippets and measure performance
  ? webpagetest.com
    - Test your entire live web page to detect optimization potential
  */
