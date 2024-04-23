import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { tasksApi } from "./rtk-query/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={tasksApi}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
);
