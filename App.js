const heading = React.createElement(
  "h1",
  { key: 123, className: "heading1" },
  "Just a React.createElement",
);

console.log(
  "It's called as React Element and a plain JS Object! but not a Virtual DOM",
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
