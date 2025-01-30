/*
! JavaScript Tooling & Workflows
* Limitations of Basic Projects
  - Micromanagement of imports or lots of unnecessary HTTP requests
  - Unoptimizied code (not as small as possible)
  - Potentially sub-optimal browser support
  - Need to reload page manually after making changes to the code
  - Code quality is not checked

* Helpful Tools & Why to Use Them
? webpack-dev-server or serve
  - A development server enabling us to have more realistic circumstances, auto-reloads

? Webpack
  - A bundling tool that lets us combine multiple files into bundled code

? Webpack Optimizer Plugins
  - A code optimization tool that will shorten function names, remove whitespace, etc.

? Babel
  - A code compilation tool that transpiles our modern code and gets an older version as output.

? ESLint
  - A code quality checker that looks for and corrects conventions and patterns.

! Setup
During Development (upon 'Save')
Linting (ESLint)
Bundling (Webpack)
Reload Dev Server

npm & NodeJS
- Installed globally to install and orchestrate different packages and tools

For Production (upon command)
Linting (again - ESLint)
Bundling (Webpack)
Compilation (Babel)
Optimization
Production-ready Code
  */
