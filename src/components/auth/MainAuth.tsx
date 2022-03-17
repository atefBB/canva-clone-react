import React from "react";
import { Switch } from "react-router-dom";

import { AuthRoute } from "../../util/route_util";
import SignupAuthFormContainer from "./SignupAuthFormContainer";
import LoginAuthFormContainer from "./LoginAuthFormContainer";

import styles from "./MainAuth.module.css";

export const MainAuth = () => (
  <div className={styles.main}>
    <Switch>
      {/* @ts-expect-error */}
      <AuthRoute path="/login" component={LoginAuthFormContainer} />
      {/* @ts-expect-error */}
      <AuthRoute path="/" component={SignupAuthFormContainer} />
    </Switch>
    <div className={styles.splash}>
      {/* @ts-expect-error */}
      <img src={window.splash} alt="" />
    </div>
  </div>
);
