import { React, useState } from "react";
import styles from "../css/Notice.module.css";
import icon_open from "../img/icon_open.png";
import icon_close from "../img/icon_close.png";

function RealContent({ content }) {
  return (
    <div>
      <div>{content.content}</div>
      <img className={styles.ntcimg} src={content.img} alt="가짜이미지" />
    </div>
  );
}

function HashTagColor({ content }) {
  const nameOfTag = {
    NOTICE1: "#4C966E",
    PROGRAME1: "#E7D0B6",
    EVENT1: "#D0C7DE",
  };
  const HTColors = "#4C966E";
  // console.log(nameOfTag.PROGRAME1);
  // 해시태그마다 색 다르게
  return (
    <div className={styles.hashtagContainer}>
      <div
        className={styles.hashtag}
        style={{ backgroundColor: `${content.ht} + 1` }}
        // style={{ backgroundColor: "red" }}
      >
        {content.ht}
      </div>
    </div>
  );
}

const NoticeItem = ({ content }) => {
  const [showMore, setShowMore] = useState(false);
  const [nameOfTag, setnameOfTag] = useState(false);

  // 미리 보기 글자 자르기

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };

  return (
    <div className={styles.ntcItem} onClick={() => setShowMore(!showMore)}>
      <button className={styles.moreBtn}>
        {/* <img className={styles.openArrow} src={icon_open} alt="토긑버튼" /> */}
        {showMore ? (
          <img className={styles.openArrow} src={icon_close} alt="닫는 버튼" />
        ) : (
          <img className={styles.openArrow} src={icon_open} alt="여는 버튼" />
        )}
      </button>
      <HashTagColor content={content} />
      <div className={styles.ntcTitle}>{truncate(content.title, 20)}</div>
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
