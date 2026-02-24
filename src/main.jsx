import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* ===== ENV DEBUG START ===== */
console.log("==== ENV DEBUG START ====");
console.log("import.meta.env =", import.meta.env);
console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);
console.log("==== ENV DEBUG END ====");
/* ===== ENV DEBUG END ===== */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
