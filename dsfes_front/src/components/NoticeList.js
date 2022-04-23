import React, { useState } from "react";
import NoticeItem from "./NoticeItem";

const NoticeList = () => {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "첫번째 글입니다라다라당",
      content:
        "재산권의 행사는 공공복리에 적합하도록 하여야 한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 모든 국민은 직업선택의 자유를 가진다.",
      img: "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg",
    },
    {
      id: 2,
      title: "두번째 글",
      content:
        "정부는 회계연도마다 예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.next-t.co.kr%2Fblog%2F%25EA%25B2%2580%25EC%2583%2589%25EC%2597%2594%25EC%25A7%2584%25EC%25B5%259C%25EC%25A0%2581%25ED%2599%2594-SEO-%25ED%2585%258C%25ED%2581%25AC%25EB%258B%2588%25EC%25BB%25ACSEO-img-image-tag-%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580%25ED%2583%259C%25EA%25B7%25B8-alt%25EC%2586%258D%25EC%2584%25B1&psig=AOvVaw3VzTN_8MwKoRXbdowzlAP3&ust=1650780176026000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCvnMXBqfcCFQAAAAAdAAAAABAJ",
    },
    {
      id: 3,
      title: "세번째 글",
      content:
        "국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.next-t.co.kr%2Fblog%2F%25EA%25B2%2580%25EC%2583%2589%25EC%2597%2594%25EC%25A7%2584%25EC%25B5%259C%25EC%25A0%2581%25ED%2599%2594-SEO-%25ED%2585%258C%25ED%2581%25AC%25EB%258B%2588%25EC%25BB%25ACSEO-img-image-tag-%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580%25ED%2583%259C%25EA%25B7%25B8-alt%25EC%2586%258D%25EC%2584%25B1&psig=AOvVaw3VzTN_8MwKoRXbdowzlAP3&ust=1650780176026000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCvnMXBqfcCFQAAAAAdAAAAABAJ",
    },
    {
      id: 4,
      title: "네번째 글",
      content:
        "대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 모든 국민의 재산권은 보장된다. 그 내용과 한계는 법률로 정한다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.next-t.co.kr%2Fblog%2F%25EA%25B2%2580%25EC%2583%2589%25EC%2597%2594%25EC%25A7%2584%25EC%25B5%259C%25EC%25A0%2581%25ED%2599%2594-SEO-%25ED%2585%258C%25ED%2581%25AC%25EB%258B%2588%25EC%25BB%25ACSEO-img-image-tag-%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580%25ED%2583%259C%25EA%25B7%25B8-alt%25EC%2586%258D%25EC%2584%25B1&psig=AOvVaw3VzTN_8MwKoRXbdowzlAP3&ust=1650780176026000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCvnMXBqfcCFQAAAAAdAAAAABAJ",
    },
    {
      id: 5,
      title: "다섯번째 글",
      content:
        "모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다. 대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는 국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.next-t.co.kr%2Fblog%2F%25EA%25B2%2580%25EC%2583%2589%25EC%2597%2594%25EC%25A7%2584%25EC%25B5%259C%25EC%25A0%2581%25ED%2599%2594-SEO-%25ED%2585%258C%25ED%2581%25AC%25EB%258B%2588%25EC%25BB%25ACSEO-img-image-tag-%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580%25ED%2583%259C%25EA%25B7%25B8-alt%25EC%2586%258D%25EC%2584%25B1&psig=AOvVaw3VzTN_8MwKoRXbdowzlAP3&ust=1650780176026000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCvnMXBqfcCFQAAAAAdAAAAABAJ",
    },
  ]);
  return (
    <div>
      {contents.map((content) => (
        <NoticeItem
          title={content.title}
          content={content}
          key={content.id}
          img={content.img}
        />
      ))}
    </div>
  );
};

export default NoticeList;
