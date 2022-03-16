import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
// import UserNav from './auth/UserNav';
import UserNavContainer from './auth/user_nav_container';
import styles from './NavBar.module.css';


const NavBar = ({
  mode
}: any) => (
  <div className={mode === 'splash' ? 'container' : 'container-wide border-bottom'}>
    <div className={styles.navBar}>
      <Link to="/">
        <div className={styles.logo}>
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'logo' does not exist on type 'Window & t... Remove this comment to see the full error message
          <img src={window.logo} alt="logo" />
        </div>
      </Link>
      <ul className={styles.nav}>
        {/* <li>Home</li>
        <li>Templates</li>
        <li>Discover</li>
        <li>Learn</li>
        <li>Pricing</li> */}
      </ul>
      <UserNavContainer />
    </div>
  </div>
);

export default NavBar;
