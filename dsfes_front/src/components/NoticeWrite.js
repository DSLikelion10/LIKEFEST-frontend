import React from "react";
import styles from "../css/Notice.module.css";

function NoticeWrite() {
  return (
    <div className={styles.writeContainer}>
      <div className={styles.inputContainer}>
        <form className={styles.formContainer}>
          <input
            className={styles.writeTitle}
            placeholder="제목을 입력해주세요."
            type="text"
            name="title"
          />
        </form>
        <hr className={styles.hrr} />
        <form className={styles.formContainer}>
          <textarea
            className={styles.writeContent}
            placeholder="내용을 입력해주세요."
            name="writeContent"
            required
            rows={6}
          />
        </form>
      </div>
      <p className={styles.subTitle}>태그</p>
      <div className={styles.tagContainer}>
        <button className={styles.tagbtn} onClick="">
          NOTICE
        </button>
        <button className={styles.tagbtn}>EVENT</button>
        <button className={styles.tagbtn}>PROGRAM</button>
      </div>
      <p className={styles.subTitle}>사진</p>
      <div className="filebox">
        <input className="fileinput" type="file" accept="image/*" name="img" />
      </div>
      <button className={styles.saveBtn}>글 남기기</button>
    </div>
  );
}

export default NoticeWrite;
