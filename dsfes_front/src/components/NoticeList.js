import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, NavLink } from "react-router-dom";
import NoticeItem from "./NoticeItem";
import styles from "../css/Notice.module.css";

const NoticeList = () => {
  const location = useLocation(null);

  console.log("list", FormData);

  const [contents, setContents] = useState([]);
  // const [contents, setContents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/Notice")
      .then((res) => {
        setContents(res.data);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);
  // const [contents, setContents] = useState([
  //   {
  //     id: 1,
  //     noTitle: "긴 제목 테스트를 해보지요",
  //     noText:
  //       "재산권의 행사는 공공복리에 적합하도록 하여야 한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 모든 국민은 직업선택의 자유를 가진다.",
  //     noImg:
  //       "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg",
  //     noTag: "NOTICE",
  //   },
  //   {
  //     id: 2,
  //     noTitle: "어느정도 길어야지 자르기에 괜찮을까요?",
  //     noText:
  //       "정부는 회계연도마다 예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.",
  //     noImg:
  //       "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg",
  //     noTag: "NOTICE",
  //   },
  //   {
  //     id: 3,
  //     noTitle:
  //       "만약 길이가 정말정말 길어서 한 줄보다 넘친다면그때는줄여야겠죠?",
  //     noText:
  //       "국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
  //     noImg:
  //       "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg",
  //     noTag: "NOTICE",
  //   },
  // ]);
  // axios 연결

  // console.log("contents", contents);
  // console.log("content", content);
  return (
    <div>
      <NavLink to="/manager">
        {/* adminntc 글쓰기 버튼 보이게 */}
        {`${location.pathname}` === "/adminntc" ? (
          <button className={styles.toWrite}>글쓰기</button>
        ) : null}
      </NavLink>

      <div>
        {contents.map((content) => (
          <NoticeItem
            contents={contents}
            content={content}
            setContents={setContents}
            key={content.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NoticeList;
