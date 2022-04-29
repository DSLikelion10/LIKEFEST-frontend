import axios from "axios";
import React, { useCallback, useState } from "react";
import styles from "../css/Board.module.css";
import { useNavigate } from "react-router-dom";

const BoardInsert = ({ texts, changeTexts }) => {
  const [insertBody, setInsertBody] = useState(styles.insertBody);
  const [insert, setInsert] = useState(styles.insert);
  const [text, setText] = useState("");
  const [isfocus, setFocus] = useState(false);

  //포커스 되었을 때
  const handleFocus = () => {
    setInsertBody(styles.insertBody2);
    setInsert(styles.insert2);
    setFocus(true);
  };

  //포커스에서 벗어났을 때
  const handleBlur = () => {
    setInsertBody(styles.insertBody);
    setInsert(styles.insert);
    setFocus(false);
  };

  //버튼 클릭 이벤트가 onBlur이벤트보다 먼저 작동되게 하기
  const handleMouseDown = (e) => {
    if (isfocus) {
      e.preventDefault();
    }
  };

  //post
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3001/board", {
          boText: text,
        })
        .then((res) => {
          console.log("Success");
          setText(""); //text 초기화
          setInsertBody(styles.insertBody);
          setInsert(styles.insert);

          //front 추가 처리
          const NewText = {
            id: texts[texts.length - 1].id + 1,
            boText: text,
          };

          changeTexts(NewText);
        })
        .catch((error) => {
          console.log("Network Error : ", error);
        });
    },
    [changeTexts, text, texts]
  );

  //상태관리
  const handleChange = useCallback((e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "text") {
      setText(value);
    }
  }, []);

  return (
    <div className={insertBody}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={insert}
          placeholder="소감을 남겨주세요!"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="text"
          wrap="hard"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button
          className={styles.insertbt}
          onMouseDown={handleMouseDown}
          type="submit"
        >
          글 남기기
        </button>
      </form>
    </div>
  );
};

export default BoardInsert;
