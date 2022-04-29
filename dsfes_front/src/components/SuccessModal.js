import React from "react";
import styles from "../css/Modal.module.css";

const SuccessModal = ({ closeModal }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>내용이 들어가겠지</div>
      <button onClick={() => closeModal(false)} type="button">
        닫기
      </button>
    </div>
  );
};

export default SuccessModal;
