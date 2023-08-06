import React from "react";
import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1", {}, "Hello My name is Asim")
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const crrea = React.createElement('div',{id: 'parent'},
// [
//     React.createElement('div',{id:'child'},
// [React.createElement('h1',{},"I am Asim Son of Gulame Mustafa"), React.createElement('h6',{},"i am h8 now")
// ]),
// React.createElement('div',{id:'child2'},
// [React.createElement('h1',{},"I am Asim Son of Mustafa"), React.createElement('h6',{},"i am h8")
// ])
// ]
// )

// const rt = ReactDOM.createRoot(document.getElementById('root'));
// rt.render(crrea);
// React Element=> is an object, when we render this on to DOM then it become a html element
// const heading = React.createElement("h1",{id: "head"},"My name is arif");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX is syntax 
const jsxHeading = (<h1 className="heading">Hi there html is not inside javascript it is inside jsx</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);console.log(jsxHeading)