import React from "react";
import ReactDOM from "react-dom";
// JSX is HTML like or XML like structure
// React Element
const heading = React.createElement('h1', {id: "heading"}, "Hello World from React app");
// (JSX trnspiled before it reaches JS Engine) => PARCEL is doing this for you => PARCEL uses BABEL for this

//React Functional Component
// Functional component is a javascript function which returns a react element.

const HeadingComponent = () => {
    return <h1 className="heading">Hello world from React Functional Component</h1>
    };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);