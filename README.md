# React

### Basics of HTML, JavaScript & React

index.html:

- emmet : its a feature & it will provide the basic markup/html element code.
- ! or html:5 -> will generate basic html page
- div#root : will create a div tag with id=root => <div id="root"></div>
- div.container : will create a div tab with class="container" : <div class="container"></div>

#

Display **_Hello World_** on a page using HTML, JavaScript and React.
HTML -

```html
<body>
  <div id="root">
    <h1>Hello World!</h1>
  </div>
</body>
```

JavaScript:

```js
<body>
  <div id="root">
    <h1>Hello World!</h1>
  </div>

  <script>
    const heading = document.createElement("h1"); heading.innerText = "Hello
    World! from JavaScript"; const root = document.getElementById("root");
    root.appendChild(heading);
  </script>
</body>
```

React:
Two ways to get the react & react-dom into the project
First way: Import the CDN links : [text](https://legacy.reactjs.org/docs/cdn-links.html)

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

Second way: install react and react-dom from npm
