

const parent =React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:'child'},
            [
                React.createElement("h1",{},"hello i'm the h1 tag"),
                React.createElement("h2",{},"hello i'm the h1 tag")
            ]
        ),
        React.createElement("div",{id:'child1'},
            [
                React.createElement("h1",{},"hello i'm the h1 tag"),
                React.createElement("h2",{},"hello i'm the h1 tag")
            ]
        )
    ]

);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);