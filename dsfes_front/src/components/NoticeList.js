import React, { useState, useEffect } from "react";
import axios from "axios";
import NoticeItem from "./NoticeItem";

const NoticeList = () => {
  const [contents, setContents] = useState([]);
  // 데이터 불러오기
  useEffect(() => {
    axios
      .get("http://localhost:3001/notice")
      .then((res) => {
        setContents(res.data);
        console.log(contents);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);

  // useEffect(() => {
  //   axios
  //     .delete("http://localhost:3001/notice/${id}")
  //     .then((res) => {
  //       console.log("----------------------");
  //       console.log(res);
  //       console.log("res.data", res.data);
  //       // console.log("삭제 완료");
  //     })
  //     .catch((error) =>
  //       // console.log(res);
  //       console.log("Network Error : ", error)
  //     );
  // });

  return (
    <div>
      {contents.reverse().map((content) => (
        <NoticeItem contents={contents} content={content} key={content.id} />
      ))}
    </div>
  );
};

export default NoticeList;
