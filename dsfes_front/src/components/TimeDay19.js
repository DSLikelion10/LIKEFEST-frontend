import TimeItem from "./TimeItem"
import s from "../css/TimeDay.module.css";

const TimeDay19 = () => {
  return (
    <div className={s.body}>
      <div className={s.firstSection}>
        <TimeItem title={"주간수익사업"} time={"11:00~15:00"} location={"영근터"} color={"#4C966E"} height={"399px"} />
        <TimeItem title={"야간 수익 사업"} time={"17:00~22:00"} location={"영근터"} color={"#4C966E"} height={"499px"} />
      </div>
      <div className={s.secondSection}>
        <TimeItem title={"운현 가요제"} time={"18:00~20:00"} location={"영근터"} color={"#E7D0B6"} height={"192px"} />
        <TimeItem title={"공연"} time={"20:00~21:00"} location={"영근터"} color={"#E7D0B6"} height={"99px"} />
      </div>
    </div>
  );
};
export default TimeDay19;