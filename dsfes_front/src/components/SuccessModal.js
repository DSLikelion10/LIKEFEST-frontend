import React, { useRef } from "react";
import styles from "../css/Modal.module.css";
import wrong from "../img/wrong.png";
import correct from "../img/correct.png";
import { animated } from "react-spring";

const SuccessModal = ({ style, closeModal }) => {
  const modalRef = useRef();

  const outsideClose = (e) => {
    if (modalRef.current === e.target) {
      closeModal(false);
    }
        //! 모달창 띄웠을 때 스크롤 방지
        document.body.style.overflow = "hidden";
  };

  return (
    <animated.div style={style}>
      <div
        ref={modalRef}
        onClick={outsideClose}
        className={styles.modalBackground}
      >
        <div className={styles.modalBody}>
          <div className={styles.imgbody}>
            <img
              className={styles.correctImg}
              src={correct}
              alt="정답모달이미지"
            />
          </div>
          <div className={styles.modalCotent}>
            본 화면을 캡쳐하여
            <br />
            <br />
            <span>5월 20일 총학생회 부스</span>로 방문해주세요.
          </div>
          <hr />
          <button
            className={styles.modalButton}
            onClick={() => closeModal(false)}
            type="button"
          >
            닫기
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default SuccessModal;
