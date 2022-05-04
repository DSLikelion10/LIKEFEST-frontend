import HeaderTitle from "../components/HeaderTitle";
import style from "../css/Main.module.css"
import duksae from "../img/image_find_duksae.png"
import  redo from "../img/image_gestbook.png"

//축제를 더 즐기는 법! 부터 Main.js 에 들어갑니다.
const Main = () => {
  return (
    <div>
      {/* 메인페이지에는 HeaderTitle이 필요없어서 삭제해도 되는데 일단 페이지 구분을 위해 남겨두긴 했습니다.
      추후 디자인이 나오고, 개발 시작할때는 아래 내용 다 지우셔도 괜찮습니다:D */}
      <div>
        <div className={style.festword1}>축제를 더 재밌게 즐기는 법!</div>
        <div className={style.festword2}>함께하는 새로고침</div>
        <div className={style.findD}>
        </div>
        <div className={style.findD}>
        </div>
        
      </div>
    </div>
  );
};
export default Main;
