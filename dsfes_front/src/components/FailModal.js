import React, { useRef } from "react";
import styles from "../css/Modal.module.css";
import wrong from "../img/wrong.png";
import { animated } from "react-spring";

const FailModal = ({ style, closeModal }) => {
  const modalRef = useRef();
    //! 모달창 띄웠을 때 스크롤 방지
    // document.body.style.overflow = "hidden";

  const outsideClose = (e) => {
    if (modalRef.current === e.target) {

      closeModal(false);
    }
    // 모달 닫을 때 쓰는 handle 함수에 추가해 주면 스크롤 방지 해제
    // document.body.style.overflow = "unset";
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
