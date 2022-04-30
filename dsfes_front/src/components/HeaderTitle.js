import React from "react";
import { useLocation } from "react-router-dom";
import s from "../css/HeaderTitle.module.css";
const HeaderTitle = (props) => {
  function TagList() {
    return (
      <div className={s.htContainer}>
        <div className={s.htNotice}> NOTICE </div>
        <div className={s.htEvent}> EVENT </div>
        <div className={s.htProgram}> PROGRAM </div>
      </div>
    );
  }
  const location = useLocation();
  return (
    <div className={s.header}>
      <p className={s.headerTitle}>{props.title}</p>
      <div>{`${location.pathname}` == "/Notice" ? <TagList /> : null} </div>
    </div>
  );
};

export default HeaderTitle;
