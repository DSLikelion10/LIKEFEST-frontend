import React, { useRef } from "react";
import styles from "../css/Modal.module.css";
import { animated } from "react-spring";
import axios from "axios";

//삭제 모달창 입니다.
const DeleteModal = ({ style, closeModal, content }) => {
  // 삭제하기 버튼 눌렀을 때
  const clickDelete = () => {
    const id = content.id;
    // 데이터 삭제
    axios
      .delete(`http://localhost:3001/notice/${id}`)
      .then((res) => {
        window.location.reload();
        console.log(res);
        console.log("삭제 완료");
      })
      .catch((error) => console.log("Network Error : ", error));
  };

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
        className={styles.modalBackground2}
      >
        <div className={styles.modalBody3}>
          <div className={styles.deleteModalContent}>
            삭제된 글은 복구할 수 없습니다.
            <br />
            삭제하시겠습니까?
          </div>
          <hr />
          <div className={styles.deleteButtonBody}>
            <button
              className={styles.modalButton3}
              onClick={() => closeModal(false)}
              type="button"
            >
              취소하기
            </button>
            <hr />
            <button
              className={styles.modalButton3}
              onClick={() => clickDelete()}
              type="button"
              style={{ color: "#FD6060" }}
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default DeleteModal;
