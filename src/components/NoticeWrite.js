import React, { useState, useCallback, useMemo } from "react";
import styles from "../css/Notice.Write.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import plus from "../img/plus.png";

const NoticeWrite = () => {
  const [Title, setTitle] = useState(null);
  const [Content, setContent] = useState(null);
  const [Tag, setTag] = useState(false); //하나용이었지만 내가(태영) 중복으로 바꿔버린
  const [noImg, setImg] = useState(null);
  const [noimg, setimg] = useState(null);
  let [tag1, setTag1] = useState(false);
  let [tag2, setTag2] = useState(false);
  let [tag3, setTag3] = useState(false);

  const formData = new FormData();
  const navigate = useNavigate();
  //클릭했을 때 true면 false로 false면 true로 바꾸는 함수 - 단일코드
  const handleClick = (e) => {
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
  };

  //usememo 최적화 연산 함수
  const textColor1 = useMemo(() => {
    return tag1 ? "#4C966E" : "#c4c4c4";
  }, [tag1]);
  //tag1가 변화하면 윗줄이 동작함
  const textColor2 = useMemo(() => {
    return tag2 ? "#d0c7de" : "#c4c4c4";
  }, [tag2]);

  const textColor3 = useMemo(() => {
    return tag3 ? "#e7d0b6" : "#c4c4c4";
  }, [tag3]);

  const handleChange = (e) => {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    } else if (name === "tag") {
      setTag(value);
    } else if (name === "noImg") {
      setImg(URL.createObjectURL(e.target.files[0]));
      setimg(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("noTitle", Title);
    formData.append("noText", Content);
    formData.append("noTag", Tag);
    formData.append("noImg", noimg);
    if (Title !== null && Content !== null && Tag !== null) {
      const config = {
        Headers: {
          "content-type": "multipart/form-data",
        },
      };

      axios
        .post("http://localhost:3001/notice", formData, config)
        .then((res) => {
          setTitle(""); //text 초기화
          setContent("");
          setTag("");
          setimg("");
          setImg("");
          navigate("/Notice");
        })
        .catch((error) => {
          console.log("Network Error : ", error);
        });
    } else {
      alert("모든 빈칸을 작성해주세요.");
    }
    //formData.append('noImg', noImg);
  };

  return (
    <div className={styles.all}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div id="ntcItemWrite" className={styles.ntcItemWrite}>
          <input
            placeholder="제목을 입력하세요"
            type="text"
            className={styles.ntcTitle}
            value={Title}
            onChange={handleChange}
            name="title"
          ></input>
          <textarea
            name="content"
            rows="9"
            className={styles.ntcContent}
            placeholder="내용을 입력하세요"
            value={Content}
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
          <input
            id="input-file"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            name="noImg"
            onChange={handleChange}
          ></input>
          <label for="input-file">
            <div className={styles.plusdiv}>
              {noImg ? (
                <img src={noImg} alt="preview-img" className={styles.plusdiv} />
              ) : (
                <img
                  className={styles.plusimg}
                  id="input-file"
                  alt="plus"
                  src={plus}
                ></img>
              )}
            </div>
          </label>
        </div>
        <div className={styles.button}>
          <input
            type="submit"
            value="글 남기기"
            className={styles.submitbtn}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default NoticeWrite;
