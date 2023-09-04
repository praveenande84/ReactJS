/* Component */
/*
A Component is a JS function that returns a JSX element.
The component name should always start with a capital letter as react treats the components starting with lowercase letters as HTML elements.
*/

// what to render

// Component
const Welcome = (props) => {
    // We can access props here, props is an object.
    // The component accept props as parameters
    console.log(props);

    // props Object destructuring
    const {name, greet} = props
    return (
        <div>
            <h1 className="greeting">Hello</h1>
            <p>{greet} {name}...</p>
        </div>
        );

};

// where to render
const rootElement = document.getElementById("root");

// ReactDOM.render(what, where);
ReactDOM.render(<Welcome name="praveen" greet="Good to see you"/>, rootElement);  // We can call the function with self-closing tags as shown  <Welcome />.