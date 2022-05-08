import React, { useEffect } from "react";
import HeaderTitle from "../components/HeaderTitle";
import style from "../css/Main.module.css";
import find_duksae from "../img/image_find_duksae.png";
import gestbook from "../img/image_gestbook.png";
import LikeLion_Logo from "../img/LikeLion_Logo.svg";
import Gaehwa_Logo from "../img/Gaehwa_Logo.svg";
import insta from "../img/insta.svg";
import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

//축제를 더 즐기는 법! 부터 Main.js 에 들어갑니다.
const Main = () => {

    useEffect(() => {
      AOS.init(
       {duration : 1000}
      );
    })

  return (
    <div>
      {/* 메인페이지에는 HeaderTitle이 필요없어서 삭제해도 되는데 일단 페이지 구분을 위해 남겨두긴 했습니다.
      추후 디자인이 나오고, 개발 시작할때는 아래 내용 다 지우셔도 괜찮습니다:D */}
      <div>
      <div className={style.MidSection}>
        <div className={style.howToEnjoy}>
          <p>축제를 더 재밌게 즐기는 법!</p>
          <p>함께하는 <span>새로고침</span></p>
        </div>
        <div data-aos="fade-up" className={style.LinkComponent}>
        <Link className={style.link} to="/event">
          <img className={style.representativeImg} src={find_duksae}/>
          <div className={style.representativeTitle1}>
            <div>
            <div className={style.eventtag}>EVENT</div>
            <p>이벤트 참여해보세요!</p>
            </div>
            <p className={style.newduk}>새로워진 덕새를 찾아라</p>
          </div>
        </Link>

        </div>
        <div data-aos="fade-up" className={style.LinkComponent}>
        <Link className={style.link} to="/board">
          <img className={style.representativeImg} src={gestbook}/>
          <div className={style.representativeTitle2}>
            <p>함께하여 더 즐거운 이야기들</p>
            <p>덕우들의 새로고침</p>
          </div>
        </Link>

        </div>
        </div>

        <div className={style.BottomSection}>
          <div>
            <img className={style.Council_Logo} src={Gaehwa_Logo}/>
            <p>덕성여자대학교<br/>총학생회 개화</p>
          </div>
          <div>
            <img className={style.LikeLion_Logo} src={LikeLion_Logo}/>
            <p>멋쟁이사자처럼<br/>덕성여자대학교</p>
          </div>
          <div>
            <p>정지영</p>
            <p className={style.instagram}><img src={insta}/>youngrong.wrk</p>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Main;
