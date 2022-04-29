import React,{useState, useCallback} from "react";
import styles from "../css/Notice.Write.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const NoticeWrite = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [texts, setTexts] = useState([]);

//   const changeTexts = (text) => {
//     setTexts(texts.append(text));
//   };

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'title') {
      setTitle(value);
    }else{
      setContent(value);
    }
  };

  // const onSubmit = () =>{

  // }

  return (
  <div className={styles.all}>
    <form id='form'>
      <div id = 'ntcItemWrite' className={styles.ntcItemWrite}>
        <input 
          placeholder='제목을 입력하세요'
          type='text'
          className={styles.ntcTitle}
          value={title}
          onChange={handleChange}
          name='title'    
          ></input>
        <textarea
          name="content"
          rows="9" 
          className={styles.ntcContent}
          placeholder='내용을 입력하세요'
          value={content}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <p className={styles.tagstyle}>태그</p>
        <div className={styles.hashtagContainer}>
          <div
            className={styles.hashtag} id="tag">
              Notice
          </div>
          <div
            className={styles.hashtag} id="tag">
              Notice
          </div>
          <div
            className={styles.hashtag} id="tag">
              Notice
          </div>
        </div>  
      </div>
      <br />
      <div>
        <p className={styles.tagstyle}>사진</p>
      </div>
      <br />
      <div>
        <img src="../../logo192.png" className={styles.imgstyle} />
      </div>
      <div className={styles.button}>
        <input type="submit" value="글 남기기" className={styles.submitbtn}></input>
      </div>
    </form>
  </div>        
  );
};

export default NoticeWrite