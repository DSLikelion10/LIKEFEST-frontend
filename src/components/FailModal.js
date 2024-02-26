import React, { useRef } from "react";
import styles from "../css/Modal.module.css";
import wrong from "../img/wrong.png";
import { animated } from "react-spring";

const FailModal = ({ style, closeModal }) => {
  const modalRef = useRef();

  const outsideClose = (e) => {
    if (modalRef.current === e.target) {
      closeModal(false);
    }
  };
  return (
    <animated.div style={style}>
      <div
        ref={modalRef}
        onClick={outsideClose}
        className={styles.modalBackground}
      >
        <div className={styles.modalBody2}>
          <div className={styles.imgbody}>
            <img
              className={styles.correctImg}
              src={wrong}
              alt="오답모달이미지"
            />
          </div>
          <hr />
          <button
            className={styles.modalButton}
            onClick={() => closeModal(false)}
            type="button"
          >
            다시 도전하기
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default FailModal;
