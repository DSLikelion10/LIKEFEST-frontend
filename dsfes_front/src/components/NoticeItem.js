import { React, useState } from "react";
import styles from "../css/Notice.module.css";
import closedArrow from "../img/closedArrow.svg";
import openArrow from "../img/openArrow.svg";

const NoticeItem = ({ content }) => {
  const showing = content.content;
  const [showMore, setshowMore] = useState();
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };
  return (
    <div className={styles.ntcItem}>
      {/* <div className={styles.hashtag}>해시태그자리</div> */}
      <div className={styles.ntcTitle}>{content.title}</div>
      <button className={styles.moreBtn} onClick="">
        <img src={openArrow} alt="닫는 버튼" />
      </button>
      <div className={styles.ntcContent}>{truncate(content.content, 50)}</div>
    </div>
  );
};

export default NoticeItem;
