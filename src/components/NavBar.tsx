import React from "react";
import { Link } from "react-router-dom";

import UserNavContainer from "./auth/user_nav_container";
import styles from "./NavBar.module.css";

const NavBar = ({ mode }: any) => (
  <div
    className={mode === "splash" ? "container" : "container-wide border-bottom"}
  >
    <div className={styles.navBar}>
      <Link to="/">
        <div className={styles.logo}>
          {/* @ts-expect-error ts-migrate(2339) FIXME */}
          <img src={window.logo} alt="logo" />
        </div>
      </Link>
      <ul className={styles.nav}></ul>
      <UserNavContainer />
    </div>
  </div>
);

export default NavBar;
