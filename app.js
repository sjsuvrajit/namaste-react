
import React from "react";
import ReactDOM from "react-dom/client";


//React Element
// const heading = (<h1 className="Heading">
//     Hello From JSX</h1>
//     )

const Title = () => (<h1 className="Heading">
    Hello From JSX 🚀</h1>
    )

const jsVariable = 100;

// React Component
const HeadingComponent = () => (
    <div className="parent">
        {jsVariable}
        {Title()}
        <Title/>
        <Title></Title>
        <h1 className="Heading">Hello from functional component</h1>
    </div>
)    

console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);