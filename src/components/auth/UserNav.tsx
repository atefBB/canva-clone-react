import React from "react";
import { Link } from "react-router-dom";

import HaveUserNav from "./HaveUserNav";

import styles from "./UserNav.module.css";

const UserNav = ({ currentUser, logout }: any) => {
  const noUser = (
    <>
      <Link to="/login">
        <button type="button" className="btn-width btn-outline">
          Log in
        </button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn-width btn-blue ml-16">
          Sign up
        </button>
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
      ) : (
        noUser
      )}
    </div>
  );
};

export default UserNav;
