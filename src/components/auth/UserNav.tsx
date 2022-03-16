import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import styles from './UserNav.module.css';
import HaveUserNav from './HaveUserNav';

const UserNav = ({
  currentUser,
  logout
}: any) => {
  const noUser = (
    <>
      <Link to="/login">
        <button type="button" className="btn-width btn-outline">Log in</button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn-width btn-blue ml-16">Sign up</button>
      </Link>
    </>
  );

  return (
    <div className={styles.userNav}>
      {currentUser ? (
        <HaveUserNav
          // @ts-expect-error ts-migrate(2322) FIXME: Type '{ currentUser: any; logout: any; }' is not a... Remove this comment to see the full error message
          currentUser={currentUser}
          logout={logout}
        />
      ) : noUser}
    </div>
  );
};

export default UserNav;
