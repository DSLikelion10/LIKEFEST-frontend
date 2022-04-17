import React from "react";
import s from '../css/HeaderTitle.module.css';
const HeaderTitle = (props) => {
  return (
    <div className={s.header}>
      <p className={s.headerTitle}>{props.title}</p>
    </div>
  );
};

export default HeaderTitle;
