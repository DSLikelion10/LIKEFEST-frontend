import TimeItem from "./TimeItem"
import s from "../css/TimeDay.module.css";
const TimeDay18 = () => {
  return (
    <div className={s.body}>
      <div className={s.firstSection}>
        <TimeItem title={"주간수익사업"} time={"11:00~15:00"} location={"영근터"} color={"#4C966E"} height={"399px"} />
      </div>
      <div className={s.secondSeciton}>
        <TimeItem title={"영화 상영(1987)"} time={"14:00~16:30"} location={"영근터"} color={"#D0C7DE"} height={"249px"} />
        <TimeItem title={"재학생 무대"} time={"17:00~17:40"} location={"영근터"} color={"#E7D0B6"} height={"84px"} />
        <TimeItem title={"동아리 무대"} time={"17:50~19:20"} location={"영근터"} color={"#E7D0B6"} height={"116px"} />
        <TimeItem title={"공연"} time={"19:30~20:00"} location={"영근터"} color={"#E7D0B6"} height={"83px"} />
      </div>
    </div>
  );
};
export default TimeDay18;