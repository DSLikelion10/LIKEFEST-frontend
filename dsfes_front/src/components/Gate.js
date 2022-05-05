import React from "react";
import style from "../css/Gate.module.css";
import mainposter from "../img/main_poster.png";
import newduksung from "../img/image_new_duksung.png";
import follow from "../img/image_follow.png";
import female from "../img/image_female.png";
import focus from "../img/image_focus.png";
import future from "../img/image_future.png";
import forever from "../img/image_forever.png";

//이 컴포넌트에 포스트가 들어갑니다.
const Gate = () => {
  return (
    <div className={style.gradient}>
      <img className={style.poster} src={mainposter} alt="포스터" />
      <div className={style.date}>2022. 05.18 - 05.20</div>
      <div className={style.line}></div> 
        <div className={style.keywordDiv}>
          <img className={style.keyword1} src={follow} alt="follow" />
          <img className={style.keyword2} src={female} alt="female" />
          <img className={style.keyword3} src={focus} alt="focus" />
          <img className={style.keyword4} src={future} alt="future" />
          <img className={style.keyword5} src={forever} alt="forever" />
        </div>
      <img className={style.new} src={newduksung} alt="forever" />
    </div>
  );
};

export default Gate;
