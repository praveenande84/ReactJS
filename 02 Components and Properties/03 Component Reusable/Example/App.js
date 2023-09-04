/* Component */
/*
A Component is a JS function that returns a JSX element.
The component name should always start with a capital letter as react treats the components starting with lowercase letters as HTML elements.
*/

// what to render

// Component
const Welcome = (props) => {
    // We can access props here
    const { name, greeting } = props;
    return (
        <h1 className="message">
            {greeting}, {name}
        </h1>
    );
};

// <Welcome /> is a Reusable Component
const finalElement = (
    // A Component is a piece of reusable code that can be used in various parts of an application.
    // We can pass props here.
    // Here <Welcome /> is a Reusable Component
    <div>
        <Welcome name="Rahul" greeting="Hello"/>
        <Welcome name="Ram" greeting="Hi"/>
    </div>
);

// where to render
const rootElement = document.getElementById("root");


// ReactDOM.render(what, where);
ReactDOM.render(finalElement, rootElement);