import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTransition } from "react-spring";
import styles from "../css/Notice.module.css";
import DeleteModal from "./DeleteModal";
import icon_open from "../img/icon_open.png";
import icon_close from "../img/icon_close.png";
import button_edit from "../img/button_edit.png";
import icon_delete from "../img/icon_delete.png";
import icon_modify from "../img/icon_modify.png";

const NoticeItem = ({ content }) => {
  // 이미지 추가 태영언니는 신입니다.
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    const hope = content.noImg.data;
    const img_url = [];
    for (let i = 8; i < hope.length; i++) {
      img_url.push(String.fromCharCode(hope[i]));
      setImgurl("http://localhost:3001/" + img_url.join(""));
    }
  }, []);

  // 해시태그 추가
  const myTag = [
    {
      noTag: 1,
      bgColor: "#4C966E",
      NameOfTag: "NOTICE",
    },
    {
      noTag: 2,
      bgColor: "#D0C7DE",
      NameOfTag: "EVENT",
    },
    {
      noTag: 3,
      bgColor: "#E7D0B6",
      NameOfTag: "PROGRAM",
    },
  ];

  // 글 더보기, 수정삭제
  const [showMore, setShowMore] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  // 더보기했을때 보여질 전체 텍스트 (최적화 추후에 하기)
  function FullContent({ content }) {
    return showMore ? (
      <div>
        <div className={styles.ntcContentCut}>{content.noText}</div>
        <div className={styles.imgContainer}>
          <img className={styles.ntcimg} src={imgurl} alt="imgs" />
        </div>
      </div>
    ) : null;
  }
  // 운영진 주소일때 보여질 컴포넌트들
  const location = useLocation();

  // 점 세개 눌렀을 때
  const clickShowEdit = () => {
    setShowEdit((showEdit) => !showEdit);
  };

  // 수정,삭제 버튼 TY
  function EditBtnF() {
    const [openModal, setOpenModal] = useState(false);

    const transitions = useTransition(openModal, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });
    return (
      <div>
        <div className={styles.btnContainer}>
          <Link
            to="/update"
            state={{
              content: content,
              imgurl: imgurl,
            }}
            className={styles.noCss}
          >
            <button className={styles.editBtn}>
              수정하기{" "}
              <img
                className={styles.editdeleteicon}
                src={icon_modify}
                alt="editImg"
              />
            </button>
          </Link>
          <hr id={styles.edithr} />
          <button
            className={styles.deletebtn}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            삭제하기
            <img
              className={styles.editdeleteicon}
              src={icon_delete}
              alt="deleteImg"
            />
          </button>

          {transitions(
            (style, item) =>
              item && (
                <DeleteModal
                  content={content}
                  style={style}
                  closeModal={() => setOpenModal(false)}
                />
              )
          )}
        </div>
      </div>
    );
  }

  // 미리 보기 글자 자르기
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };
  const TagId = content.noTag - 1;

  return (
    <div className={styles.ntcItem}>
      {/* 여닫는 버튼 */}
      <button className={styles.moreBtn} onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <img className={styles.openArrow} src={icon_close} alt="닫는 버튼" />
        ) : (
          <img className={styles.openArrow} src={icon_open} alt="여는 버튼" />
        )}
      </button>
      {/* 해시태그 보여주기 */}
      <div className={styles.tagCon}>
        <div
          className={styles.hashtag}
          style={{ backgroundColor: myTag[TagId].bgColor }}
        >
          {myTag[TagId].NameOfTag}
        </div>
      </div>
      {/* adminntc 수정, 삭제 버튼 보이게 */}
      {`${location.pathname}` === "/adminntc" ? (
        <div className={styles.editbtn}>
          <img
            className={styles.button_edit}
            src={button_edit}
            onClick={clickShowEdit}
            alt="여는 버튼"
          />
          {showEdit ? <EditBtnF /> : null}
        </div>
      ) : null}
      {/* 타이틀 : 20글자 넘어가면 자르기 */}
      {showMore ? (
        <div className={styles.ntcTitle}>{content.noTitle}</div>
      ) : (
        <div className={styles.ntcTitleCut}>
          {truncate(content.noTitle, 24)}
        </div>
      )}

      {/* 글 내용 -> 클릭 시 글 전부 보여주기 */}
      <div className={styles.ntcContent}>
        {showMore ? (
          <FullContent content={content} />
        ) : (
          `${truncate(content.noText, 50)}`
        )}
      </div>
    </div>
  );
};

export default NoticeItem;
