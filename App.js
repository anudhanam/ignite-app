import React from "react";
import ReactDOM from "react-dom";
// JSX is HTML like or XML like structure
// React Element
const heading = React.createElement('h1', {id: "heading"}, "Hello World from React app");
// (JSX trnspiled before it reaches JS Engine) => PARCEL is doing this for you => PARCEL uses BABEL for this

const elem  = "React Element";

//React Functional Component
// Functional component is a javascript function which returns a react element.
// Component Composition - means compositing 2 component one another

//any js element  can put inside JSX

const Title = () => (
    <h1 className="heading">Title Component</h1>
)

const HeadingComponent = () => {
    return <div className="container">
        <Title />
        <p>Hello world from React Functional Component</p>
        <p>{30+20}</p>
        <p>{ elem }</p>
        </div>
    };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);