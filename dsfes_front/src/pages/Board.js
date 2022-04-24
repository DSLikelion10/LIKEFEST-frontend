import React, { useState, useEffect, useCallback, useRef } from "react";
import BoardInsert from "../components/BoardInsert";
import BoardList from "../components/BoardList";
import styles from "../css/Board.module.css";
import HeaderTitle from "../components/HeaderTitle";
import axios from "axios";

const Board = () => {
  const [texts, setTexts] = useState([{ id: 0, boText: "" }]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/board")
      .then((res) => {
        setTexts(res.data);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);

  console.log(texts[texts.length - 1].id);
  const nextId = useRef(texts[texts.length - 1].id);

  //임시 저장소
  const onInsert = useCallback(
    (boText) => {
      const newText = {
        id: nextId.current,
        boText,
      };
      setTexts(texts.concat(newText));
      nextId.current += 1;
    },
    [nextId, texts]
  );
  return (
    <div>
      <BoardInsert onInsert={onInsert} />
      <BoardList texts={texts} />
    </div>
  );
};
export default Board;
