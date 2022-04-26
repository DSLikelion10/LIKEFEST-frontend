import TimeItem from "./TimeItem"
import s from "../css/TimeDay.module.css";

const TimeDay20 = () => {
  return (
    <div className={s.body}>
      <div className={s.firstSection}>
        <TimeItem title={"주간수익사업"} time={"11:00~15:00"} location={"영근터"} color={"#4C966E"} height={"399px"} />
        <TimeItem title={"야간 수익 사업"} time={"17:00~22:00"} location={"영근터"} color={"#4C966E"} height={"499px"} />
      </div>
      <div className={s.secondSection}>
        <TimeItem title={"총학생회 콘텐츠"} time={"18:30~20:00"} location={"영근터"} color={"#D0C7DE"} height={"192px"}
          title2={"불꽃놀이"} location2={"영근터"} second={true} />
        <TimeItem title={"공연"} time={"20:00~22:00"} location={"영근터"} color={"#E7D0B6"} height={"199px"} />
      </div>
    </div>
  );
};
export default TimeDay20;