import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styles from "../css/Notice.module.css";
import icon_open from "../img/icon_open.png";
import icon_close from "../img/icon_close.png";
import button_edit from "../img/button_edit.png";
import icon_delete from "../img/icon_delete.png";
import icon_modify from "../img/icon_modify.png";
import { useTransition } from "react-spring";
import DeleteModal from "./DeleteModal";
import axios from "axios";

// 수정,삭제 버튼 TY
function EditBtnF() {
  const [openModal, setOpenModal] = useState(false);

  const transitions = useTransition(openModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className={styles.btnContainer}>
      <button className={styles.editdelete}>
        수정하기{" "}
        <img
          className={styles.editdeleteicon}
          src={icon_modify}
          alt="editImg"
        />
      </button>
      <hr id={styles.edithr} />
      <button
        className={styles.editdelete}
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
            <DeleteModal style={style} closeModal={() => setOpenModal(false)} />
          )
      )}
    </div>
  );
}

const NoticeItem = ({ content }) => {
  const navigate = useNavigate();
  // 이미지 추가 태영언니는 신입니다.
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    // console.log("콘텐트 보여줘 // ", typeof content.noTitle);
    const hope = content.noImg.data;
    const img_url = [];
    for (let i = 8; i < hope.length; i++) {
      // console.log(String.fromCharCode(hope[i]));
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

  // 더보기했을때 보여질 전체 텍스트 (최적화 추후에 하기)
  function FullContent({ content }) {
    return (
      <div>
        <div className={styles.ntcContent}>{content.noText}</div>
        <div className={styles.imgContainer}>
          <img className={styles.ntcimg} src={imgurl} alt="imgs" />
        </div>
      </div>
    );
  }
  // 운영진 주소일때 보여질 컴포넌트들
  const location = useLocation();

  // 더보기, 수정하기 삭제하기
  const [showMore, setShowMore] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // 점 세개 눌렀을 때
  const clickShowEdit = () => {
    setShowEdit((showEdit) => !showEdit);
  };

  // 수정하기 버튼 눌렀을 때
  const clickEdit = () => {
    setShowEdit(false);
    console.log("버튼 클릭시 :", content);
    console.log("이 컨텐트 뭔지 알아? :", content);
  };

  // 삭제하기 버튼 눌렀을 때
  const clickDelete = () => {
    const id = content.id;
    // 데이터 삭제
    const check = window.confirm("삭제 확인");
    if (check) {
      axios
        .delete(`http://localhost:3001/notice/${id}`)
        .then((res) => {
          console.log(res);
          console.log("삭제 완료");
          navigate("/adminntc");
        })
        .catch((error) =>
          // console.log(res);
          console.log("Network Error : ", error)
        );
    } else {
      alert("게시물 삭제 취소");
    }
    setShowEdit(false);
  };
  // 수정,삭제 버튼 eb
  const EditBtnF = () => {
    return (
      <div className={styles.btnContainer}>
        <button className={styles.editdelete} onClick={clickEdit}>
          수정하기
          <img
            className={styles.editdeleteicon}
            src={icon_modify}
            alt="editImg"
          />
        </button>
        <hr id={styles.edithr} />
        <button className={styles.editdelete}>
          삭제하기
          <img
            className={styles.editdeleteicon}
            onClick={clickDelete}
            src={icon_delete}
            alt="deleteImg"
          />
        </button>
      </div>
    );
  };

  // 미리 보기 글자 자르기

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };
  const TagId = content.noTag - 1;
  return (
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
      <div className={styles.hashtagContainer}>
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
