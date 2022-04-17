import React, { useState } from "react";
import BoardInsert from "../components/BoardInsert";
import BoardList from "../components/BoardList";
import styles from "../css/Board.module.css";
import HeaderTitle from "../components/HeaderTitle";

const Board = () => {
  return (
    <div>
      <HeaderTitle title="덕우들의 새로고침" />
      <BoardInsert />
      <BoardList />
    </div>
  );
};
export default Board;
