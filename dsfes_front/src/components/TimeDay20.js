import TimeItem from "./TimeItem"
import s from "../css/TimeDay.module.css";

const TimeDay20 = () => {
  return (
    <div className={s.body20}>
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
      <div className={s.timeTitle}>21:00</div>
      <div className={s.timeTitle}>22:00</div>
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
      <div className={[s.cell, s.cell11].join(' ')}></div>
      <div className={[s.cell, s.cell12].join(' ')}></div>
      {/* TimeItem */}
      <TimeItem title={"주간수익사업"} time={"11:00~15:00"} location={"영근터"} color={"#4C966E"} height={"399px"} name={s.item6} />
      <TimeItem title={"야간 수익 사업"} time={"17:00~22:00"} location={"영근터"} color={"#4C966E"} height={"499px"} name={s.item7} />
      <TimeItem title={"총학생회 콘텐츠"} time={"18:30~20:00"} location={"영근터"} color={"#D0C7DE"} height={"142px"}
        title2={"불꽃놀이"} location2={"영근터"} second={true} name={s.item10} />
      <TimeItem title={"공연"} time={"20:00~22:00"} location={"영근터"} color={"#E7D0B6"} height={"199px"} name={s.item11} />
    </div>
  );
};
export default TimeDay20;