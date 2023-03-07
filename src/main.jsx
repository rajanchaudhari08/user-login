import React from "react";
import ReactDOM from "react-dom/client";
import { AuthenticationContextProvider } from "../AuthenticationContext/authentication-context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </React.StrictMode>
);
