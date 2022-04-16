import React, { useEffect, useState } from "react";
import BoardItem from "./BoardItem";
import styles from "../css/Board.module.css";

const BoardList = () => {
  const [texts, setTexts] = useState([
    {
      id: 1,
      text: "새워 이름을 별 하나에 옥 잔디가 마디씩 하나에 있습니다. 어머니, 청춘이 이름과 무엇인지 풀이 봅니다. 별빛이 풀이 헤는 차 거외다. 별이 하나에 이름과, 별 가난한 밤이 보고, 시인의 했던 있습니다.",
    },
    {
      id: 2,
      text: "못 아직 하나에 듯합니다. 오는 위에 많은 둘 헤는 청춘이 마디씩 듯합니다. 이름과, 써 위에 별빛이 쓸쓸함과 가을로 새워 다 가난한 까닭입니다.",
    },
    {
      id: 3,
      text: "새겨지는 이름과, 어머님, 때 있습니다. 계집애들의 속의 이런 우는 피어나듯이 소녀들의 헤일 사람들의 봄이 까닭입니다. 남은 하나에 내린 지나가는 어머님, 헤일 나는 지나고 봅니다.",
    },
    {
      id: 4,
      text: "다 계집애들의 지나가는 새겨지는 별 어머니 남은 봅니다. 내린 별빛이 내 많은 하나에 동경과 쉬이 이네들은 밤을 계십니다. 했던 풀이 시와 그리워 벌레는 거외다.",
    },
    {
      id: 5,
      text: "못 내 다하지 밤이 이웃 애기 불러 파란 봄이 까닭입니다. 이름과, 헤는 별 둘 나는 있습니다. 이런 나는 언덕 가득 멀리 가을 새겨지는 계십니다. 이름자 벌써 별 이런 봅니다.",
    },
  ]);

  return (
    <div>
      {texts.map((text) => (
        <BoardItem text={text} key={text.id} />
      ))}
    </div>
  );
};

export default BoardList;
