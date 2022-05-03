import HeaderTitle from "../components/HeaderTitle";
import style from "../css/Main.module.css";
import mainposter from "../img/main_poster.png";
import follow from "../img/image_follow.png";
import female from "../img/image_female.png";
import focus from "../img/image_focus.png";
import future from "../img/image_future.png";
import forever from "../img/image_forever.png";
import newduksung from "../img/image_new_duksung.png";

//축제를 더 즐기는 법! 부터 Main.js 에 들어갑니다.
const Main = () => {
  return (
    <div>
      {/* 메인페이지에는 HeaderTitle이 필요없어서 삭제해도 되는데 일단 페이지 구분을 위해 남겨두긴 했습니다.
      추후 디자인이 나오고, 개발 시작할때는 아래 내용 다 지우셔도 괜찮습니다:D */}
      <div>
        {/* 메뉴바 스크롤 test용 -> 삭제하셔도 됩니다:D */}
        {/* <div className={style.section1}> */}
        {/* <img className={style.poster} src={mainposter} alt="포스터" />
          <div className={style.date}>2022. 05.18 - 05.20</div>
          <div className={style.line}></div> */}

        {/* <img className={style.keyword1} src={follow} alt="follow" />
          <img className={style.keyword2} src={female} alt="female" />
          <img className={style.keyword3} src={focus} alt="focus" />
          <img className={style.keyword4} src={future} alt="future" />
          <img className={style.keyword5} src={forever} alt="forever" /> */}
        {/* <img className={style.new} src={newduksung} alt="forever" /> */}

        {/* <div className={style.new}></div> */}
        {/* </div> */}
        <div>축제를 더 즐기는 법!</div>
        <div>새로워진 덕새를 찾아라! 컴포넌트</div>
        <div>덕우들의 새로 고침 컴포넌트</div>
      </div>
    </div>
  );
};
export default Main;
