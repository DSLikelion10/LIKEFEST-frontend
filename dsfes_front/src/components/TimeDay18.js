import TimeItem from "./TimeItem"
import s from "../css/TimeDay.module.css";
const TimeDay18 = () => {
  return (
    <div className={s.body18}>
      {/* 시간 Title */}
      <div className={s.timeTitle}>11:00</div>
      <div className={s.timeTitle}>12:00</div>
      <div className={s.timeTitle}>13:00</div>
      <div className={s.timeTitle}>14:00</div>
      <div className={s.timeTitle}>15:00</div>
      <div className={s.timeTitle}>16:00</div>
      <div className={s.timeTitle}>17:00</div>
      <div className={s.timeTitle}>18:00</div>
      <div className={s.timeTitle}>19:00</div>
      <div className={s.timeTitle}>20:00</div>
      {/* 시간선 */}
      <div className={[s.cell, s.cell1].join(' ')}></div>
      <div className={[s.cell, s.cell2].join(' ')}></div>
      <div className={[s.cell, s.cell3].join(' ')}></div>
      <div className={[s.cell, s.cell4].join(' ')}></div>
      <div className={[s.cell, s.cell5].join(' ')}></div>
      <div className={[s.cell, s.cell6].join(' ')}></div>
      <div className={[s.cell, s.cell7].join(' ')}></div>
      <div className={[s.cell, s.cell8].join(' ')}></div>
      <div className={[s.cell, s.cell9].join(' ')}></div>
      <div className={[s.cell, s.cell10].join(' ')}></div>
      {/* TimeItem */}
      <TimeItem title={"주간수익사업"} time={"11:00~15:00"} location={"영근터"} color={"#4C966E"} height={"399px"} name={s.item1} />
      <TimeItem title={"영화 상영(1987)"} time={"14:00~16:30"} location={"영근터"} color={"#D0C7DE"} height={"249px"} name={s.item2} />
      <TimeItem title={"재학생 무대"} time={"17:00~17:40"} location={"영근터"} color={"#E7D0B6"} height={"84px"} name={s.item3} />
      <TimeItem title={"동아리 무대"} time={"17:50~19:20"} location={"영근터"} color={"#E7D0B6"} height={"116px"} name={s.item4} />
      <TimeItem title={"공연"} time={"19:30~20:00"} location={"영근터"} color={"#E7D0B6"} height={"83px"} name={s.item5} />
    </div >
  );
};
export default TimeDay18;