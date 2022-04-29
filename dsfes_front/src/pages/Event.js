import React, { useState } from "react";
import SuccessModal from "../components/SuccessModal";
import FailModal from "../components/FailModal";
import { useTransition } from "react-spring";

const Event = () => {
  const [openModal, setOpenModal] = useState(false);

  const transitions = useTransition(openModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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

      {transitions(
        (style, item) =>
          item && (
            <FailModal style={style} closeModal={() => setOpenModal(false)} />
          )
      )}
    </div>
  );
};
export default Event;
