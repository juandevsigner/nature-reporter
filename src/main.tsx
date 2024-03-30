import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/appRouter.route";
import { AppContextProvider } from "./context/app.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </React.StrictMode>
);
