import React, { useRef } from "react";
import styles from "../css/Modal.module.css";
import correct from "../img/correct.png";
import { animated } from "react-spring";

const SuccessModal = ({ style, closeModal }) => {
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
            <span>중앙본부 운영시간 내에 </span>방문해 주세요.
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
