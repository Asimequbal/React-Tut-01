// const heading = React.createElement("h1", {}, "Hello My name is Asim")
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const crrea = React.createElement('div',{id: 'parent'},
[
    React.createElement('div',{id:'child'},
[React.createElement('h1',{},"I am Asim Son of Mustafa"), React.createElement('h6',{},"i am h8")
]),
React.createElement('div',{id:'child2'},
[React.createElement('h1',{},"I am Asim Son of Mustafa"), React.createElement('h6',{},"i am h8")
])
]
)



const rt = ReactDOM.createRoot(document.getElementById('root'));
rt.render(crrea);