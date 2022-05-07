import React from "react";
import NoticeList from "../components/NoticeList";
import styles from "../css/Notice.module.css";
import { NavLink } from "react-router-dom";

function AdminNotice() {
  return (
    <div className={styles.fCon}>
      <NavLink to="/manager">
        <button className={styles.toWrite}>글쓰기</button>
      </NavLink>
      <NoticeList />
    </div>
  );
}

export default AdminNotice;
