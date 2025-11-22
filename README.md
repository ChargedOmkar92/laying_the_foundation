For starting our server we were doing "npx parcel index.html"

will keep this command and build command in scripts in our package.json as below
    "scripts" : {
        "start" : "parcel index.html",
        "build" : "parcel build index.html"
    }

so for start our appp server we can simply hit "npm run start" or "npm start"

"start" is a keyword reserver by npm so we can use that short command as "npm start"

for build we can hit "npm run build"

React.createElement is a core React API that creates React elements: plain JavaScript objects describing what the UI should look like.

These React elements represent HTML elements (like <div>, <h1>) or user-defined components, along with their properties (props) and children.

React elements are created via React.createElement(type, props, children) calls, but writing these manually is verbose.

To improve developer experience, JSX was introduced: a syntax that looks like HTML within JavaScript.

JSX is syntactic sugar that compiles to React.createElement calls under the hood. For example:

<h1 className="jsxheading">Namaste React - Laying the foundation</h1>

React.createElement("h1", { className: "jsxheading"}, "Namaste React - Laying the foundation")

Browsers do not understand JSX natively, so JSX must be transpiled (converted) to JavaScript using tools like Babel during the build process.

Bundlers like Parcel manage this transpilation and module bundling to produce code the browser understands.

Finally, React uses the React DOM API to convert React elements (JavaScript objects) into actual DOM elements and insert them into the HTML document. This process is triggered by:

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); 

Both parent (created with createElement) and jsxHeading (created via JSX syntax) hold the same kind of React Element object. React treats them equivalently during rendering.