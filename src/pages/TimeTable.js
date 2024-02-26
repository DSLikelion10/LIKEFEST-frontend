import HeaderTitle from "../components/HeaderTitle";
import react, { useCallback, useEffect, useState } from 'react';
import style from '../css/TimeTable.module.css';
import TimeDay18 from "../components/TimeDay18";
import TimeDay19 from "../components/TimeDay19";
import TimeDay20 from "../components/TimeDay20";

const TimeTable = () => {
  const [NavActive, setNavActive] = useState("18");
  const NavClickHandle = useCallback((e, num) => {
    setNavActive(num);
  })
  useEffect(() => {
    console.log(NavActive);
  }, [NavActive])
  const UI = { "18": <TimeDay18></TimeDay18>, "19": <TimeDay19></TimeDay19>, "20": <TimeDay20></TimeDay20> }

  return (
    <div className={style.body}>
      <div className={style.navBar}>
        <div
          className={NavActive === "18" ? `${style.navItem} ${style.navItemActive}` : style.navItem}
          onClick={() => NavClickHandle(this, "18")}
        >18<br />(WED)</div>
        <div
          className={NavActive === "19" ? `${style.navItem} ${style.navItemActive}` : style.navItem}
          onClick={() => NavClickHandle(this, "19")}
        >19<br />(THU)</div>
        <div
          className={NavActive === "20" ? `${style.navItem} ${style.navItemActive}` : style.navItem}
          onClick={() => NavClickHandle(this, "20")}
        >20<br />(FRI)</div>
      </div>
      <div>
        <div className={style.TimeDay}>{UI[NavActive]}</div>
      </div>
      <div className={style.blankDiv} />
    </div>
  );
};
export default TimeTable;
