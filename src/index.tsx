import React from "react";
import ReactDOM from "react-dom";

import { Main } from "./components/Main";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'currentUser' does not exist on type 'Win... Remove this comment to see the full error message
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'currentUser' does not exist on type 'Win... Remove this comment to see the full error message
        users: { [window.currentUser.id]: window.currentUser },
      },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'currentUser' does not exist on type 'Win... Remove this comment to see the full error message
      session: { id: window.currentUser.id },
      ui: { mode: "browse" },
    };
    store = configureStore(preloadedState);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'currentUser' does not exist on type 'Win... Remove this comment to see the full error message
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Main store={store} />, root);
});
