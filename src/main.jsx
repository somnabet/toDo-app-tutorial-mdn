import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
const DATA = [{ id: "todo-0", name: "afegir tasques", completed: false }];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
