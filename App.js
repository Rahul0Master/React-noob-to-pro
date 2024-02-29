const heading = React.createElement(        // JavaScript Object
    "h1", 
    {id:"heading"}, 
    "Hello from React"
    );

const parent = React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am a Tag"),
        React.createElement("h2",{},"I am also Tag"),
        ]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"I am a Tag"),
        React.createElement("h3",{},"I am also Tag"),
        ]
    )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);