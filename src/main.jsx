import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { insertCoin } from "playroomkit";

insertCoin({
  skipLobby: true,
  gameId: "axzb9pnHq9zHMAPnND8S",
  discord: true,
}).then(() => 
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);