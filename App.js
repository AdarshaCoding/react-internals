/**
 * <div id="parent">
 *     <h1 id="child1"> Child 1 </h1>
 *     <h1 id="child2"> Child 2 </h1>
 * </div>
 */

// React.createElement will create a Node and Vitual DOM is a combination of such nodes, just like above exmaple

const parent = React.createElement("div", { key: 123, id: "parent" }, [
  React.createElement("h1", {}, "Child 1"),
  React.createElement("h1", {}, "Child 2"),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
