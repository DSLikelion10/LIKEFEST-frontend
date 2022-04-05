import React from 'react';
import styles from '../css/Menubar.module.css';

import dsllLogo from '../img/dsllLogo.jpg';
import googleADs from '../img/GoogleADs.png';
import FesLogo from '../img/FesLogo.jpg';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Menubar = () => {

  return (
    <div className={styles.menubar}>
      <div className={styles.Header}><Link to="/"><img src={FesLogo} /></Link></div>
      <div className={styles.NavMenu}>
        <NavLink to="/Notice" className={({ isActive }) => isActive ? styles.navActive : styles.nav}>공지사항</NavLink>
        <NavLink to="/TimeTable" className={({ isActive }) => isActive ? styles.navActive : styles.nav}>타임테이블</NavLink>
        <NavLink to="/Event" className={({ isActive }) => isActive ? styles.navActive : styles.nav}>이벤트</NavLink>
        <NavLink to="/Map" className={({ isActive }) => isActive ? styles.navActive : styles.nav}>지도</NavLink>
      </div>
      <div className={styles.Content}>
        <Outlet />
      </div>
      <div className={styles.FooterMenu}>
        <div className={styles.DSLLBanner}><img src={dsllLogo} /></div>
        <div className={styles.AdBanner}><img src={googleADs} /></div>
      </div>
    </div>
  );
};
export default Menubar;