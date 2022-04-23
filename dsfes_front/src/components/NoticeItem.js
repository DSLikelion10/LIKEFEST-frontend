import { React, useState, useEffect, useCallback } from "react";
import styles from "../css/Notice.module.css";
import closedArrow from "../img/closedArrow.svg";
import openArrow from "../img/openArrow.svg";

function RealContent({ content }) {
  return (
    <div>
      <div>{content.content}</div>
      <img className={styles.ntcimg} src={content.img} alt="가짜이미지" />
    </div>
  );
}

const NoticeItem = ({ content }) => {
  const [showMore, setShowMore] = useState(false);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };

  return (
    <div className={styles.ntcItem} onClick={() => setShowMore(!showMore)}>
      {/* <div className={styles.hashtag}>해시태그자리</div> */}
      <div className={styles.ntcTitle}>{content.title}</div>
      <button className={styles.moreBtn}>
        {showMore ? (
          <img src={closedArrow} alt="닫는 버튼" />
        ) : (
          <img src={openArrow} alt="여는 버튼" />
        )}
      </button>
      <div className={styles.ntcContent}>
        {showMore ? (
          <RealContent content={content} />
        ) : (
          `${truncate(content.content, 50)}`
        )}
      </div>
    </div>
  );
};

export default NoticeItem;
