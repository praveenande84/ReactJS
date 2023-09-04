/* Component */
/*
A Component is a JS function that returns a JSX element.
The component name should always start with a capital letter as react treats the components starting with lowercase letters as HTML elements.
*/

// what to render

// Component
const Welcome = () => (
    <div>
        <h1 className="greeting">Hello</h1>
        <p>Good to see you praveen...</p>
    </div>
);

// where to render
const rootElement = document.getElementById("root");

// ReactDOM.render(what, where);
ReactDOM.render(<Welcome/>, rootElement);  // We can call the function with self-closing tags as shown  <Welcome />.