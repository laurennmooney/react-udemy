// this is the first executed file
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// createRoot creates the main entry point of the application
root.render(<App />); // renders the App component (app.js)
