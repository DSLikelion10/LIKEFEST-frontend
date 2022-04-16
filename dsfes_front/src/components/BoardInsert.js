import React from "react";
import styles from "../css/Board.module.css";

const BoardInsert = () => {
  return (
    <div className={styles.insertBody}>
      <form>
        <textarea
          class={styles.insert}
          placeholder="소감을 남겨주세요!"
        ></textarea>
        <button class={styles.insertbt} type="button">
          글 남기기
        </button>
      </form>
    </div>
  );
};

export default BoardInsert;
