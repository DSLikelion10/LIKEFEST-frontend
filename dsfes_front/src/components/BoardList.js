import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardItem from "./BoardItem";
import styles from "../css/Board.module.css";

const BoardList = () => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/board")
      .then((res) => {
        console.log(res.data);
        setTexts(res.data);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);

  return (
    <div>
      {texts.reverse().map((text) => (
        <BoardItem text={text} key={text.id} />
      ))}
    </div>
  );
};

export default BoardList;
