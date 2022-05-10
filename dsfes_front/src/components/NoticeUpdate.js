import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/Notice.Write.module.css";
import axios from "axios";

const NoticeUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const content = location.state.content;
  const Etag = location.state.content.noTag;
  const eimgurl = location.state.imgurl;
  const [noTitle, setTitle] = useState(content.noTitle);
  const [noText, setText] = useState(content.noText);
  const [noTag, setTag] = useState(content.noTag);
  //하나용이었지만 내가(태영) 중복으로 바꿔버린
  const [noImg, setImg] = useState(null);
  const [noimg, setimg] = useState(eimgurl);
  let [tag1, setTag1] = useState(false);
  let [tag2, setTag2] = useState(false);
  let [tag3, setTag3] = useState(false);

  // 처음 지정한  태그 색
  useEffect(() => {
    if (Etag === 1) {
      if (tag1) {
        //tag1이 true일때
        setTag1(false);
        setTag2(false);
        setTag3(false);
      } else {
        setTag1(true);
        setTag2(false);
        setTag3(false);
        setTag(1);
      }
    } else if (Etag === 2) {
      if (tag2) {
        //tag1이 true일때
        setTag1(false);
        setTag2(false);
        setTag3(false);
      } else {
        setTag1(false);
        setTag2(true);
        setTag3(false);
        setTag(2);
      }
    } else if (Etag === 3) {
      if (tag3) {
        //tag1이 true일때
        setTag1(false);
        setTag2(false);
        setTag3(false);
      } else {
        setTag1(false);
        setTag2(false);
        setTag3(true);
        setTag(3);
      }
    }
  }, []);

  //클릭했을 때 true면 false로 false면 true로 바꾸는 함수 - 단일코드
  const handleClick = (e) => {
    // useEffect(() => {
    console.log(e.target.name);
    //e.target.name과 같은 state같을 찾는다.
    if (e.target.name === "tag1") {
      if (tag1) {
        //tag1이 true일때
        setTag1(false);
        setTag2(false);
        setTag3(false);
      } else {
        setTag1(true);
        setTag2(false);
        setTag3(false);
        setTag(1);
      }
    } else if (e.target.name === "tag2") {
      if (tag2) {
        //tag1이 true일때
        setTag1(false);
        setTag2(false);
        setTag3(false);
      } else {
        setTag1(false);
        setTag2(true);
        setTag3(false);
        setTag(2);
      }
    } else if (e.target.name === "tag3") {
      if (tag3) {
        //tag1이 true일때
        setTag1(false);
        setTag2(false);
        setTag3(false);
      } else {
        setTag1(false);
        setTag2(false);
        setTag3(true);
        setTag(3);
      }
    }
    // }, []);
  };

  const textColor1 = useMemo(() => {
    return tag1 ? "#4C966E" : "#c4c4c4";
  }, [tag1]);

  const textColor2 = useMemo(() => {
    return tag2 ? "#d0c7de" : "#c4c4c4";
  }, [tag2]);

  const textColor3 = useMemo(() => {
    return tag3 ? "#e7d0b6" : "#c4c4c4";
  }, [tag3]);

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "noTitle") {
      setTitle((noTitle) => value);
    } else if (name === "noText") {
      setText(value);
    } else if (name === "noTag") {
      setTag(value);
    } else if (name === "noImg") {
      setImg(URL.createObjectURL(e.target.files[0]));
      setimg(e.target.files);
    }
  };

  content.noTitle = noTitle;
  content.noText = noText;
  content.noTag = noTag;
  content.noImg = noImg;
  console.log(content);

  const handleSubmit = (e) => {
    const id = location.state.content.id;
    e.preventDefault();
    console.log("버튼 눌리는 중");
    if (noTitle !== null && noText !== null && noTag !== null) {
      axios
        .put(`http://localhost:3001/notice/update/${id}`, content)
        .then((res) => {
          console.log(content);
          console.log("수정 완료");
          navigate("/Notice");
        })
        .catch((error) => {
          console.log("Network Error : ", error);
        });
    } else {
      alert("모든 빈칸을 작성해주세요.");
    }
  };

  return (
    <div>
      <div className={styles.all}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div id="ntcItemWrite" className={styles.ntcItemWrite}>
            <input
              placeholder={content.noTitle}
              type="text"
              className={styles.ntcTitle}
              value={noTitle}
              onChange={handleChange}
              name="noTitle"
            ></input>
            <textarea
              name="noText"
              rows="9"
              className={styles.ntcContent}
              placeholder={content.noText}
              value={noText}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <p className={styles.tagstyle}>태그</p>
            <div className={styles.hashtagContainer}>
              <button
                type="button"
                className={styles.hashtag1}
                style={{ backgroundColor: textColor1 }}
                name="tag1"
                value="1"
                onClick={handleClick}
              >
                NOTICE
              </button>
              <button
                type="button"
                className={styles.hashtag2}
                style={{ backgroundColor: textColor2 }}
                name="tag2"
                value="2"
                onClick={handleClick}
              >
                EVENT
              </button>
              <button
                type="button"
                className={styles.hashtag3}
                style={{ backgroundColor: textColor3 }}
                name="tag3"
                value="3"
                onClick={handleClick}
              >
                PROGRAM
              </button>
            </div>
          </div>
          <br />
          <div>
            <p className={styles.tagstyle} for="input-file">
              사진
            </p>
          </div>
          <br />
          <div>
            <div className={styles.plusdiv}>
              <img
                className={styles.plusdiv}
                id="input-file"
                alt="plus"
                src={eimgurl}
              ></img>
            </div>
          </div>
          <div className={styles.button}>
            <input
              type="submit"
              value="수정하기"
              className={styles.submitbtn}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoticeUpdate;
