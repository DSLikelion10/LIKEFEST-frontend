import React from "react";

const style1 = {
  display: "inline-block",
  fontFamily: "Pretendard-bold",
  fontSize: "60px",
  width: "100%",
  height: "100%",
  marginTop: "150px",
  marginBottom: "10px",
};

const style2 = {
  display: "inline-block",
  fontFamily: "Pretendard-regular",
  fontSize: "30px",
  width: "100%",
  height: "100%",
  //   marginTop: "150px",
  marginBottom: "150px",
};

function NotFound() {
  return (
    <>
      <h1 style={style1}>404</h1>
      <h1 style={style2}>
        존재하지 않는 <br /> 페이지입니다.
      </h1>
    </>
  );
}

export default NotFound;
