import React from "react";
import style from "../css/Main.module.css";
import mainposter from "../img/main_poster.png";
import newduksung from "../img/image_new_duksung.png";

//이 컴포넌트에 포스트가 들어갑니다.
const Gate = () => {
  return (
    <div>
      <img className={style.poster} src={mainposter} alt="포스터" />
      <img className={style.new} src={newduksung} alt="forever" />
    </div>
  );
};

export default Gate;
