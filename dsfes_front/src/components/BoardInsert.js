import React, { useState } from "react";
import styles from "../css/Board.module.css";

const BoardInsert = () => {
  const [insertBody, setInsertBody] = useState(styles.insertBody);
  const [insert, setInsert] = useState(styles.insert);

  //포커스 되었을 때
  const handleFocus = () => {
    setInsertBody(styles.insertBody2);
    setInsert(styles.insert2);
  };

  //포커스에서 벗어났을 때
  const handleBlur = () => {
    setInsertBody(styles.insertBody);
    setInsert(styles.insert);
  };

  return (
    <div className={insertBody}>
      <form>
        <textarea
          className={insert}
          placeholder="소감을 남겨주세요!"
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></textarea>
        <button className={styles.insertbt} type="button">
          글 남기기
        </button>
      </form>
    </div>
  );
};

export default BoardInsert;
