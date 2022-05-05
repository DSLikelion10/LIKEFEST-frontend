import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, NavLink } from "react-router-dom";
import NoticeItem from "./NoticeItem";
import styles from "../css/Notice.module.css";

const NoticeList = () => {
  const location = useLocation(null);
  const [contents, setContents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/Notice")
      .then((res) => {
        setContents(res.data);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);
  return (
    <div>
      <NavLink to="/manager">
        {/* adminntc 글쓰기 버튼 보이게 */}
        {`${location.pathname}` === "/adminntc" ? (
          <button className={styles.toWrite}>글쓰기</button>
        ) : null}
      </NavLink>

      <div>
        {contents.reverse().map((content) => (
          <NoticeItem content={content} key={content.id} />
        ))}
      </div>
    </div>
  );
};

export default NoticeList;
