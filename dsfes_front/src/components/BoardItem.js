import React from "react";
import styles from "../css/Board.module.css";

const BoardItem = ({ text }) => {
  const palette = ["#21E233", "#FFCC4A", "#3AB5FA", "#FD6060"];

  const randomNum = Math.floor(Math.random() * 4);

  return (
    <div
      class={styles.boarditem}
      style={{ background: `${palette[randomNum]}` }}
    >
      {text.text}
    </div>
  );
};

export default BoardItem;
