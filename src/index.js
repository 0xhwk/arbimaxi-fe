import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MoralisProvider initializeOnMount={false}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>
);
