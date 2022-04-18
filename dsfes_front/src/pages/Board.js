import React, { useState } from "react";
import BoardInsert from "../components/BoardInsert";
import BoardList from "../components/BoardList";
import styles from "../css/Board.module.css";
import HeaderTitle from "../components/HeaderTitle";

const Board = () => {
  return (
    <div>
      <BoardInsert />
      <BoardList />
    </div>
  );
};
export default Board;
