/* 작성자: 유다영
한일: event 페이지 UI
정답, 오답시 뜨는 모달창은 태영님께 많이 도움받았습니다.
*/

import React, { useState, useCallback } from "react";
import SuccessModal from "../components/SuccessModal";
import styles from "../css/Event.module.css";
import step1 from "../img/find_duksae/image_step1.png";
import step2 from "../img/find_duksae/image_step2.png";
import step3 from "../img/find_duksae/image_step3.png";
import step4 from "../img/find_duksae/image_step4.png";
import step5 from "../img/find_duksae/image_step5.png";
import FailModal from "../components/FailModal";
import { useTransition } from "react-spring";

// 정답, 오답시 모달창 띄우기
const Event = () => {
  const [openModal, setOpenModal] = useState(false);

  const transitions = useTransition(openModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const [userinput, setUserinput] = useState("");

  const handleChange = useCallback((e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "userinput") {
      setUserinput(value);
    }
  }, []);

  const [choose, setChoose] = useState(false);

  // 총학에서 정답을 받으면 아래 answer에 대입할 것
  const checkAnswer = () => {
    const answer = "두려움 없는 여성들에게서 불꽃이 타오른다.";

    if (answer === userinput) {
      console.log("정답이지롱");
      setChoose(true);
    } else {
      console.log("오답이지롱");
      //setChoose(false);
      setChoose(false);
    }
  };

  return (
    // event 페이지의 body 역할인 큰 틀의 div
    <div className={styles.wrap}>
      {/* 정답 입력 input과 button을 묶은 div */}
      <div className={styles.topbox}>
        <input
          name="userinput"
          onChange={handleChange}
          className={styles.eventinput}
          type="text"
          placeholder=" 정답을 입력해주세요"
        />
        <button
          className={styles.button}
          type="submit"
          onClick={() => {
            setOpenModal(true);
            checkAnswer();
          }}
        >
          확인하기
        </button>
      </div>

      <div className={styles.bottombox}>
        {/* 참여 방법 */}
        <p className={styles.jointext}>참여&nbsp;방법</p>

        {/* 참여 방법 step 1 */}
        <div className={styles.container}>
          {/* step 01 박스 */}
          <p className={styles.stepbox}>STEP&nbsp;01</p>
          {/* 이미지 */}
          <img className={styles.stepimg} src={step1} alt="사진1" />
          {/* 설명글 */}
          <div className={styles.text}>
            <p className={styles.steptext_1}>
              학교 곳곳에 있는 새로워진 덕새를 찾아주세요.
            </p>
          </div>

        </div>

        {/* 참여 방법 step 2 */}
        <div className={styles.container}>
          {/* step 02 박스 */}
          <p className={styles.stepbox}>STEP&nbsp;02</p>
          {/* 이미지 */}
          <img className={styles.stepimg} src={step2} alt="사진2" />
          {/* 설명글 */}
          <div className={styles.text}>
          <p className={styles.steptext}>덕새 손에 있는 QR코드를 찍어 주세요.</p>
          </div>
        </div>

        {/* 참여 방법 step 3 */}
        <div className={styles.containerbig}>
          {/* step 03 박스 */}
          <p className={styles.stepbox}>STEP&nbsp;03</p>
          {/* 이미지 */}
          <img className={styles.stepimg} src={step3} alt="사진3" />
          {/* 설명글 */}
          <div className={styles.textlast}>
          <p className={styles.steptext}>
            5개의 QR코드 속 이미지를 조합하여 문장을 만들어 주세요.
          </p>
          </div>
        </div>

        {/* 참여 방법 step 4 */}
        <div className={styles.containerbig}>
          {/* step 04 박스 */}
          <p className={styles.stepbox}>STEP&nbsp;04</p>
          {/* 이미지 */}
          <img className={styles.stepimg} src={step4} alt="사진4" />
          {/* 설명글 */}
          <div className={styles.textlast}>
          <p className={styles.steptext}>
            문장이 완성되었으면 입력칸에 문장을 입력해주세요.
          </p>
          </div>
        </div>

        {/* 참여 방법 step 5 */}
        <div className={styles.containerbig}>
          {/* step 05 박스 */}
          <p className={styles.stepbox}>STEP&nbsp;05</p>
          {/* 이미지 */}
          <img className={styles.stepimg} src={step5} alt="사진5" />
          {/* 설명글 */}
          <div className={styles.textlast}>
          <p className={styles.steptext}>
            정답인 경우, 팝업창을 캡처하여 중앙본부로 방문해 주세요!
          </p>
          </div>
        </div>
      </div>
   


        {/* 삼항 연산자로 만든 다음, false에서 정답과 비교해서 유동적으로 만든 후 맞으면 success 모달이 뜨게끔, 틀리면 false 모달이 뜨게끔 */}

        {transitions(
          (style, item) =>
            item &&
            (choose ? (
              <SuccessModal
                style={style}
                closeModal={() => setOpenModal(false)}
              />
            ) : (
              <FailModal style={style} closeModal={() => setOpenModal(false)} />
            ))
        )}
    </div>
  );
};
export default Event;
