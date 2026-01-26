# React Internals

### 1. Basics of HTML, JavaScript & React

index.html:

- emmet : its a feature & it will provide the basic markup/html element code.
- ! or html:5 -> will generate basic html page
- div#root : will create a div tag with id=root => <div id="root"></div>
- div.container : will create a div tab with class="container" : <div class="container"></div>

#

Display **_Hello World_** on a page using HTML, JavaScript and React.

Two ways to get the **_react & react-dom_** into the project
First way: Import the CDN links : [React CDN Links](https://legacy.reactjs.org/docs/cdn-links.html)

- crossorigin :
  the script will be loaded from another origin (different domain)
  Stack trace, it provides detailed error information to help debugging if something goes wrong
  the browser will handle it using CORS protocols/rules
  If we don't provide crossorigin, we can load and use the script but it will not expose any internal details like file name, line numbers, stack trace.

Second way: install react and react-dom from npm

**_Order of the scripts tag matters_**
CDN links should be imported before the actual react code gets start executing.
Example, React.createElement("div", {key:"parent"}, "Parent Container")

**_react is a library_** and it can be added to an existing web application, it can run only on a sidebar/header/footer
**_react_** is not a framework like Angular, hence it is easy to start with react, easy to configure, developer friendly as it won't come up with more protocols.

#

### 2. npm (package manager for Node)

Most of libraries/packages/dependencies are available on npm for JavaScript Applications
npm init : initialize the npm -> package.json will be created and it is configuration file for npm
npm install package-name,
Examples:

- npm install react (normal dependecies and will be used on production)
- npm install -D parcel (dev dependencies and will be used only during development, -D or --save-dev)
- ~ & ^ : Example: "parcel": "^2.16.3" or "parcel": "~2.16.3"
  ^ : Minor version of the package gets upgraded when we re-build : "parcel": "^2.xx.3"
  ~ : Only new patches will get upgraded : "parcel": "~2.16.x"
- package-lock.json : will have the exact version of the dependencies/transitive dependencies, it will have exact version and hash integrity
- node_modules : will contain/collection all the code of the dependencies and transitive dependencies
  example: parcel package -> this package needs babel -> babel might need other dependencies
  each dependent packages will have their own package.json
  node_module not required to push to github as we can re-create it using npm install
  .gitignore : used to keep all the folder/file to ignore from pushing to github

#

### Bundler (webpack, parcel, vite)

1. Bundles/packages the whole code into : .js, .css, .html
2. Provides dev server
3. HRM (Hot Module Replacement)
4. Dev/Production build
5. Code splitting/chuncking
6. Minification
7. Compressed
8. Cached
9. Image optimization
10. Remove comments/cleaned
11. .... parcel is a BEAST 🔥
