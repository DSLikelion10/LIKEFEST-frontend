import React from "react";
import styles from "../css/Board.module.css";

const BoardItem = ({ text }) => {
  const palette = ["#4C966E", "#C4DAE7", "#C3E196", "#D0C7DE", "#E7D0B6"];

  const randomNum = Math.floor(Math.random() * 5);

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
