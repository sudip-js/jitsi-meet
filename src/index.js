import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import FullScreenSpinner from "./components/spinner/FullScreenSpinner";
import "./index.css";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<FullScreenSpinner loadingMessage="Loading..." />}>
    <App />
  </Suspense>
);
