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
  // const [textColor1, setTextColor1] = useState("#c4c4c4");
  // const [textColor2, setTextColor2] = useState("#c4c4c4");
  // const [textColor3, setTextColor3] = useState("#c4c4c4");

  const formData = new FormData();
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const {
  //     target: { name, value },
  //   } = e;
  //   if (name === 'title') {
  //     setTitle(value);
  //   }else if (name === 'content'){
  //     setContent(value);
  //   }else if(name === 'tag'){
  //     setTag(value);
  //   }else{
  //     setImg(e.target.files[0]);
  //   }
  //   console.log(Title, Content, Tag, noImg);

  // };

  //클릭했을 때 true면 false로 false면 true로 바꾸는 함수 - 중복코드
  // const handleClick = (e) => {
  //   //console.log(e.target.name);
  //   //e.target.name과 같은 state같을 찾는다.
  //   if (e.target.name === "tag1") {
  //     tag1 ? setTag1(false) : setTag1(true);
  //     // console.log(tag1);
  //   } else if (e.target.name === "tag2") {
  //     tag2 ? setTag2(false) : setTag2(true);
  //     //console.log(tag2);
  //   } else if (e.target.name === "tag3") {
  //     tag3 ? setTag3(false) : setTag3(true);
  //     //console.log(tag3);
  //   }
  // };

  //클릭했을 때 true면 false로 false면 true로 바꾸는 함수 - 단일코드
  const handleClick = (e) => {
    //console.log(e.target.name);
    //e.target.name과 같은 state같을 찾는다.
    if (e.target.name === "tag1") {
      // tag1 ? setTag1(false) : setTag1(true);
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

      // console.log(tag1);
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

      //console.log(tag2);
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
      //console.log(tag3);
    }
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
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    } else if (name === "tag") {
      //setTag(value);
      //console.log(value);
    } else if (name === "noImg") {
      setImg(URL.createObjectURL(e.target.files[0]));
      setimg(e.target.files[0]);
    }
    console.log(Title, Content, Tag, noImg);
  };

  // const tagChange = (e) => {
  //   const {
  //     target: { name, value },
  //   } = e;
  //   if (name === "tag1") {
  //     //setTag1(!tag1);
  //     tag1 = true;
  //     tag2 = false;
  //     tag3 = false;
  //     console.log(tag1, tag2, tag3);
  //     setTextColor1(tag1 === true ? "#4C966E" : "#c4c4c4");
  //     setTextColor2(tag2 === true ? " #d0c7de" : "#c4c4c4");
  //     setTextColor3(tag3 === true ? " #e7d0b6" : "#c4c4c4");
  //   } else if (name === "tag2") {
  //     //setTag2(!tag2);
  //     tag1 = false;
  //     tag2 = true;
  //     tag3 = false;
  //     console.log(tag1, tag2, tag3);
  //     setTextColor1(tag1 === true ? "#4C966E" : "#c4c4c4");
  //     setTextColor2(tag2 === true ? " #d0c7de" : "#c4c4c4");
  //     setTextColor3(tag3 === true ? " #e7d0b6" : "#c4c4c4");
  //   } else if (name === "tag3") {
  //     //setTag3(!tag3);
  //     tag1 = false;
  //     tag2 = false;
  //     tag3 = true;
  //     console.log(tag1, tag2, tag3);
  //     setTextColor1(tag1 === true ? "#4C966E" : "#c4c4c4");
  //     setTextColor2(tag2 === true ? " #d0c7de" : "#c4c4c4");
  //     setTextColor3(tag3 === true ? " #e7d0b6" : "#c4c4c4");
  //   }
  //   // setTag([
  //   //   ...Tag,value
  //   // ]);
  //   setTag(value);
  //   console.log(Tag);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("버튼 눌리는 중");
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
        .post(
          "http://localhost:3001/notice",
          // noTitle:formData.get('title'),
          // noText:formData.get('content'),
          // noTag:formData.get('tag')
          formData,
          config
        )
        .then((res) => {
          console.log("Success");
          setTitle(""); //text 초기화
          setContent("");
          setTag("");
          setimg("");
          setImg("");
          console.log(formData);
          navigate("/notice");
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
              //className={tag1?styles.hashtag1.backgroundColor}
              style={{ backgroundColor: textColor1 }}
              name="tag1"
              value="1"
              onClick={handleClick}
            >
              NOTICE
            </button>
            <button
              type="button"
              //style={{backgroundColor:'#D0C7DE'}}
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
              //style={{backgroundColor:"#E7D0B6", width:"74px"}}
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
              {/* <img className={styles.plusimg} id="input-file" alt='plus' src={plus}></img> */}
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
