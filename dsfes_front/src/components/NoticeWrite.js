import React,{useState, useCallback} from "react";
import styles from "../css/Notice.Write.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import plus from '../img/plus.png'


const NoticeWrite = () => {
  const [Title, setTitle] = useState(null)
  const [Content, setContent] = useState(null)
  const [Tag, setTag] = useState(null);
  const [noImg, setImg] = useState(null);
  const [noimg, setimg] = useState(null);

  const formData = new FormData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'title') {
      setTitle(value);
    }else if (name === 'content'){
      setContent(value);
    }else if(name === 'tag'){
      setTag(value);
    }else{
      setImg(e.target.files[0]);
    }

    console.log(Title, Content, Tag, noImg);
  };

  // const handleTag = (e) => {
  //   console.log(e.target.value);
  //   setTag(e.target.value);
  // }


  const handleChange1 = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'title') {
      setTitle(value);
    }else if (name === 'content'){
      setContent(value);
    }else if(name === 'tag'){
      setTag(value);
    }else if(name === 'noImg' || name === 'noimg'){
      setImg(URL.createObjectURL(e.target.files[0]));  
      setimg(e.target.files[0]);  
    
    }    
console.log(Title, Content, Tag, noImg);
}



const handleSubmit = 
  (e) => {
    e.preventDefault();
    console.log("버튼 눌리는 중")
    formData.append('noTitle', Title);
    formData.append('noText',Content);
    formData.append('noTag', Tag);
    formData.append('noImg', noimg);
    if(Title!==null && Content!==null && Tag !==null){
      const config = {
        Headers:{
          'content-type':'multipart/form-data',
        },
      }
  
      axios
        .post("http://localhost:3001/notice", 
          // noTitle:formData.get('title'),
          // noText:formData.get('content'),
          // noTag:formData.get('tag')
          formData,config
        )
        .then((res) => {
          console.log("Success");
          setTitle(""); //text 초기화
          setContent("");
          setTag("");
          setimg("");
          setImg("");
          console.log(formData);
          navigate('/notice');
        })
        .catch((error) => {
          console.log("Network Error : ", error);
        });
    }
    else{
      alert("모든 빈칸을 작성해주세요.")
    }
    //formData.append('noImg', noImg);


  };


  
  return (
  <div className={styles.all} >
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div id = 'ntcItemWrite' className={styles.ntcItemWrite}>
        <input 
          placeholder='제목을 입력하세요'
          type='text'
          className={styles.ntcTitle}
          value={Title}
          onChange={handleChange}
          name='title'    
          ></input>
        <textarea
          name="content"
          rows="9" 
          className={styles.ntcContent}
          placeholder='내용을 입력하세요'
          value={Content}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <p className={styles.tagstyle}>태그</p>
        <div className={styles.hashtagContainer}>
          <button
          type='button'
            className={styles.hashtag1} 
            //style={{backgroundColor:"#4C966E"}}
            name="tag"
            value='1'
            onClick={handleChange}>
              NOTICE
          </button>
          <button
          type='button'
            //style={{backgroundColor:'#D0C7DE'}}
            className={styles.hashtag2}
            name="tag"
            value='2'
            onClick={handleChange}> 
              EVENT
          </button>
          <button
          type='button'
            //style={{backgroundColor:"#E7D0B6", width:"74px"}}
            className={styles.hashtag3}
            name="tag"
            value='3'
            onClick={handleChange}>
              PROGRAM
          </button>
        </div>  
      </div>
      <br />
      <div>
        <p className={styles.tagstyle}
         for="input-file">사진</p>
      </div>
      <br />
      <div>
        <input
            id="input-file"
            type="file"
            accept="image/*"
            style={{display:"none"}}
            name="noImg"
            onChange={handleChange1}></input>
        <label for="input-file">
          <div className={styles.plusdiv}>
          {noImg ? 
              <img src={noImg} alt="preview-img" className={styles.plusdiv} />:
              <img
                className={styles.plusimg}
                id="input-file"
                alt="plus"
                src={plus}
              ></img>}
            {/* <img className={styles.plusimg} id="input-file" alt='plus' src={plus}></img> */}
          </div>
        </label>    
      </div>
      <div className={styles.button}>
        <input type="submit" value="글 남기기" className={styles.submitbtn}></input>
       
      </div>
    </form>
  </div>        
  );
};

export default NoticeWrite