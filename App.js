import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement("div", { key: 123, id: "parent" }, [
  React.createElement("h1", {}, "Child 1"),
  React.createElement("h1", {}, "Child 2"),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
