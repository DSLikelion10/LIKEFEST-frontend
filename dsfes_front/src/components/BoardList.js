import React, { useEffect, useState } from "react";
import BoardItem from "./BoardItem";
import styles from "../css/Board.module.css";

const BoardList = ({ texts }) => {
  console.log(texts);
  return (
    <div>
      {texts
        .slice()
        .reverse()
        .map((text) => (
          <BoardItem text={text} key={text.id} />
        ))}
    </div>
  );
};

export default BoardList;
