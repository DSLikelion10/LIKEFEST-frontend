import { React, useState } from "react";
import styles from "../css/Notice.module.css";
import icon_open from "../img/icon_open.png";
import icon_close from "../img/icon_close.png";

function RealContent({ content }) {
  return (
    <div>
      <div>{content.content}</div>
      <div className={styles.imgContainer}>
        <img className={styles.ntcimg} src={content.img} alt="imgs" />
      </div>
    </div>
  );
}

function HashTagColor({ content }) {
  const several = `${content.ht}`;
  const nameOfTag = {
    NOTICE: "#4C966E",
    PROGRAME: "#E7D0B6",
    EVENT: "#D0C7DE",
  };
  return (
    <div className={styles.hashtagContainer}>
      <div
        className={styles.hashtag}
        style={{ backgroundColor: nameOfTag }}
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
    // 글 흰 박스 아무 곳이나 누르면 열린 거 닫히기
    <div className={styles.ntcItem} onClick={() => setShowMore(!showMore)}>
      {/* 여닫는 버튼 */}
      <button className={styles.moreBtn}>
        {showMore ? (
          <img className={styles.openArrow} src={icon_close} alt="닫는 버튼" />
        ) : (
          <img className={styles.openArrow} src={icon_open} alt="여는 버튼" />
        )}
      </button>
      {/* 해시태그 보여주기 */}
      <HashTagColor content={content} />
      {/* 타이틀 : 20글자 넘어가면 자르기 */}
      {showMore ? (
        <div className={styles.ntcTitle}>{content.title}</div>
      ) : (
        <div className={styles.ntcTitleCut}>{truncate(content.title, 19)}</div>
      )}
      {/* 글 내용 -> 클릭 시 글 전부 보여주기 */}
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
