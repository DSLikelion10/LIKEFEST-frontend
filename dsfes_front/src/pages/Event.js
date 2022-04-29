import React, { useState } from "react";
import SuccessModal from "../components/SuccessModal";

const Event = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <input type="text" placeholder="정답을 입력해주세요" />
      <button
        className="openModal"
        type="submit"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        확인하기
      </button>
      {openModal && <SuccessModal closeModal={setOpenModal} />}
    </div>
  );
};
export default Event;
