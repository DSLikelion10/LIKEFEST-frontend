import React, { useState, useEffect, axios } from "react";
import NoticeList from "../components/NoticeList";
//import NoticeWrite from "../components/NoticeWrite";

const Notice = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/notice")
  //     .then((res) => {
  //       setContents(res.data);
  //     })
  //     .catch((error) => console.log("Network Error : ", error));
  // }, []);
  return (
    <div>
      <NoticeList />
    </div>
  );
};
export default Notice;
