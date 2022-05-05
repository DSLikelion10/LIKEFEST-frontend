import React, { useRef, useEffect } from "react";

function NoticeModal({ isOpenModal, setIsOpenModal, children }) {
  const wrapperRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    wrapperRef && !wrapperRef.current.contains(event.target)
      ? setIsOpenModal(false)
      : setIsOpenModal(true);
  };

  return (
    <div ref={wrapperRef} value={isOpenModal} className="modal">
      <div>수정</div>
      <div>삭제</div>
    </div>
  );
}

export default NoticeModal;
