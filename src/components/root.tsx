import React from "react";
import { Provider } from "react-redux";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { HashRouter } from "react-router-dom";
import AppContainer from "./app_container";

const Root = ({
  store
}: any) => (
  <Provider store={store}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>
);

export default Root;
