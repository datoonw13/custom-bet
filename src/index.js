import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

const renderApp = () =>
   render(
      <Provider store={store}>
         <App />
      </Provider>,
      document.getElementById("root")
   );

if (process.env.NODE_ENV !== "production" && module.hot) {
   module.hot.accept("./app/App", renderApp);
}

renderApp();

serviceWorker.unregister();
