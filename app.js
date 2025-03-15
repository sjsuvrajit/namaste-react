/*
<div id="parent">
    <div id="child">
        <h1>I am a h1 tag</h1>
        <h2>I am a h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am a h1 tag</h1>
        <h2>I am a h2 tag</h2>
    </div>
</div>


*/

import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div",
    { id: "parent"},
    [
        React.createElement(
            "div",
            { id: "child" },
            [ React.createElement("h1", {}, "I am a h1 tag"),
              React.createElement("h2", {}, "I am a h2 tag")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [ React.createElement("h1", {}, "I am a h1 tag"),
              React.createElement("h2", {}, "I am a h2 tag")
            ]
        )
    ]
);

console.log(parent);



// const heading = React.createElement(
//     "h1",
//     { id: "heading", style: {color: "red"}},
//     "Hello World from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);