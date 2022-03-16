import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SignupAuthFormContainer from './SignupAuthFormContainer';
import LoginAuthFormContainer from './LoginAuthFormContainer';
import styles from './MainAuth.module.css';

const MainAuth = () => (
  <div className={styles.main}>
    <Switch>
      <AuthRoute path="/login" component={LoginAuthFormContainer} />
      <AuthRoute path="/" component={SignupAuthFormContainer} />
    </Switch>
    <div className={styles.splash}>
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'splash' does not exist on type 'Window &... Remove this comment to see the full error message
      <img src={window.splash} alt="" />
    </div>
  </div>
);

export default MainAuth;
