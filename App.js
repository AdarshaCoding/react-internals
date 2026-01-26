const heading = React.createElement(
  "h1",
  { key: 123, className: "heading1" },
  "Hello.......",
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
