import React from "react";
import ReactDOM from "react-dom/client";

// Component name should start with an uppercase letter
const Heading = () => <h1>Hello, world!</h1>;

// Create the root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component as JSX
root.render(<Heading />);
