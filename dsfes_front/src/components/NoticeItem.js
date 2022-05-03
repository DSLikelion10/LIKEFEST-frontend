import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../css/Notice.module.css";
import icon_open from "../img/icon_open.png";
import icon_close from "../img/icon_close.png";
import button_edit from "../img/button_edit.png";

function Editbtn() {
  return (
    <button className={styles.editbtn}>
      <img className={styles.button_edit} src={button_edit} alt="여는 버튼" />
    </button>
  );
}

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
  return (
    <div className={styles.hashtagContainer}>
      <div className={styles.hashtag} style={{ backgroundColor: "" }}>
        {content.ht}
      </div>
    </div>
  );
}

const NoticeItem = ({ content }) => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // 미리 보기 글자 자르기

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };

  return (
    // 글 흰 박스 아무 곳이나 누르면 열린 거 닫히기
    <div
      className={styles.ntcItem}
      // onClick={() => setShowMore(!showMore)}
    >
      {/* 여닫는 버튼 */}
      <button className={styles.moreBtn} onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <img className={styles.openArrow} src={icon_close} alt="닫는 버튼" />
        ) : (
          <img className={styles.openArrow} src={icon_open} alt="여는 버튼" />
        )}
      </button>
      {/* 해시태그 보여주기 */}
      <HashTagColor content={content} />
      {/* adminntc 수정, 삭제 버튼 보이게 */}
      {`${location.pathname}` === "/adminntc" ? <Editbtn /> : null}
      {/* 타이틀 : 20글자 넘어가면 자르기 */}
      {showMore ? (
        <div className={styles.ntcTitle}>{content.title}</div>
      ) : (
        <div className={styles.ntcTitleCut}>{truncate(content.title, 24)}</div>
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
