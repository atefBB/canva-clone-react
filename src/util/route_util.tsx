import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({
  component: Component,
  path,
  loggedIn,
  exact
}: any) => (
  <Route
    path={path}
    exact={exact}
    render={(props: any) => !loggedIn ? <Component {...props} /> : <Redirect to="/" />}
  />
);

const Protected = ({
  component: Component,
  path,
  loggedIn,
  exact
}: any) => (
  <Route
    path={path}
    exact={exact}
    render={(props: any) => loggedIn ? <Component {...props} /> : <Redirect to="/" />}
  />
);


const mapStateToProps = (state: any) => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
