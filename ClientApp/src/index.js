import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./store/configureStore";
import { createBrowserHistory } from "history";
import { App } from "./App";
import { BrowserRouter } from 'react-router-dom'

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(initialState);
const defaultHistory = createBrowserHistory();

window.renderApp = (
  containerId,
  history,
  appConfig,
  withConnectedRouter = false
) => {
  const _render = () => {
    return withConnectedRouter ? (
      <ConnectedRouter
        history={history || defaultHistory}
        context={ReactReduxContext}
        store={store}
      >
        {" "}
        <App history={history || defaultHistory} />{" "}
      </ConnectedRouter>
    ) : (
      <BrowserRouter>
      <App history={history || defaultHistory} appConfig={appConfig} />
      </BrowserRouter>
    );
  };

  ReactDOM.render(
    <Provider store={store} context={ReactReduxContext}>
      {_render()}
    </Provider>,
    document.getElementById(containerId)
  );
};

window.unmountApp = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
