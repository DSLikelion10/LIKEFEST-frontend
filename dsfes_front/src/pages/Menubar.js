import React, { useCallback, useState, useEffect } from 'react';
import '../css/reset.css';
import styles from '../css/Menubar.module.css';
import googleADs from '../img/GoogleADs.png';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Menubar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const MenuStateHandle = useCallback(e => {
    setMenuActive(!menuActive);
  });
  useEffect(e => {
    if (menuActive) {
      console.log("열렸습니다.")
    }
    else {
      console.log("닫혔습니다.")
    }
  }, [menuActive]);

  const menuClose = useCallback(e => {
    setMenuActive(false);
  })

  return (
    <div className={styles.frame}>
      <div className={styles.menubar}>
        <div className={styles.Header}>
          <Link to="/">새로고침</Link>
          <div className={menuActive ? styles.hamburger + ' ' + styles.active : styles.hamburger} onClick={MenuStateHandle}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
        <ul className={menuActive ? styles.NavMenuActive : styles.NavMenu}>
          <NavLink to="/Notice" className={({ isActive }) => isActive ? styles.navActive : styles.nav} onClick={menuClose}>
            <li className={styles.NavItem}>
              공지사항
            </li>
          </NavLink>
          <NavLink to="/TimeTable" className={({ isActive }) => isActive ? styles.navActive : styles.nav} onClick={menuClose}>
            <li className={styles.NavItem}>
              타임테이블
            </li>
          </NavLink>
          <NavLink to="/Event" className={({ isActive }) => isActive ? styles.navActive : styles.nav} onClick={menuClose}>
            <li className={styles.NavItem}>
              이벤트
            </li>
          </NavLink>
          <NavLink to="/Map" className={({ isActive }) => isActive ? styles.navActive : styles.nav} onClick={menuClose}>
            <li className={styles.NavItem}>
              지도
            </li>
          </NavLink>
          <NavLink to="/Board" className={({ isActive }) => isActive ? styles.navActive : styles.nav} onClick={menuClose}>
            <li className={styles.NavItem}>
              게시판
            </li>
          </NavLink>
        </ul>
        <div className={styles.Content}>
          <Outlet />
        </div>
        <div className={styles.AdBanner}><img src={googleADs} /></div>
        <div className={styles.FooterMenu}>
          <p>2022 덕성여자대학교 근화제 [새로고침]</p>
          <div className={styles.FooterContent1}>
            <p className={styles.F_Header}>개발</p>
            <div className={styles.F_Content}>
              <p className={styles.name}>멋쟁이 사자처럼 덕성여자대학교</p>
              <p>Front-end</p>
              <p className={styles.name}>강태영 권은빈 김수정 허은</p>
              <p>Back-end</p>
              <p className={styles.name}>남서현 유다영 홍인혜</p>
            </div>
          </div>
          <div className={styles.FooterContent2}>
            <p className={styles.F_Header}>디자인</p>
            <div className={styles.F_Content}>
              <p>UI/UX</p>
              <p className={styles.name}>정지영</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};
export default Menubar;