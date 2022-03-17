import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import AppContainer from "./app_container";

export const Main = ({ store }: any) => (
  <Provider store={store}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>
);
