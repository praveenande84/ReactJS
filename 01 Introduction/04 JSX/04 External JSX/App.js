// what to render
// Nested JSX
const element = (
    <div>
        <h1 className="greeting">Hello</h1>
        <p>Good to see you praveen...</p>
    </div>
);

// where to render
const rootElement = document.getElementById("root");

// ReactDOM.render(what, where);
ReactDOM.render(element, rootElement);