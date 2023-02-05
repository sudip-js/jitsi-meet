import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import FullScreenSpinner from "./components/spinner/FullScreenSpinner";
import "./styles/index.scss";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

const persistor = persistStore(store);
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<FullScreenSpinner loadingMessage="Loading..." />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Suspense>
);
