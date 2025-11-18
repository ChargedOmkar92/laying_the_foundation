import React from "react";
import ReactDOM from "react-dom/client";


// create an element
// React.createElement => React Element => JS object => HTML Element => render
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: 1 },
      [
        React.createElement("h1", { id: "h1", key: 1 }, "Hii H1 here"),
        React.createElement("h2", {id: "h2", key: 2}, "Hi H2 here")
      ]
    ),
    React.createElement(
    "div",
    { id: "child2", key: 2 },
    [
      React.createElement("h1", { id: "h1", key: 1 }, "Hii H1 here"),
      React.createElement("h2", {id: "h2", key: 2}, "Hi H2 here")
    ]
  )
  ]
);

// JSX => Babel transplies to React.createElement => React Elelment => JS object => HTML Element => render
// Babel is JS compiler or transpiler
const jsxHeading = <h1 className="jsxheading">Namaste React - Laying the foundation</h1>;
// above code is not a valid pure JS code, JS engine won't understand this

// So above code is transpiled before goint to the JS engine
// Trnasplied means converting the code so JS engine & React can understand and its done by Babel and  managed by Parcel

// If we check both variables they are in same format
console.log(parent);
console.log(jsxHeading);

// create a root node
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the root
root.render(jsxHeading);
