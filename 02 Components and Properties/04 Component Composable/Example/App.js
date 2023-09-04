/* Component */
/*
A Component is a JS function that returns a JSX element.
The component name should always start with a capital letter as react treats the components starting with lowercase letters as HTML elements.
*/

// what to render
const Welcome = (props) => {
    // We can access props here
    const { name, greeting } = props;
    return (
        <h1 className="message">
            {greeting}, {name}
        </h1>
    );
};


// composable component
// We can include a component inside another component.
const Greetings = () => (
    // A Component is a piece of reusable code that can be used in various parts of an application.
    // We can pass props here
    <div>
        <Welcome name="Rahul" greeting="Hello"/>
        <Welcome name="Ram" greeting="Hi"/>
    </div>
);

const finalElement = Greetings();

// where to render
const rootElement = document.getElementById("root");


// ReactDOM.render(what, where);
ReactDOM.render(finalElement, rootElement);