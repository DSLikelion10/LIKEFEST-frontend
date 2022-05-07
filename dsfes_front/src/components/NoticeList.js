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

  return (
    <div>
      {contents.reverse().map((content) => (
        <NoticeItem content={content} key={content.id} />
      ))}
    </div>
  );
};

export default NoticeList;
