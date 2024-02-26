import icon_place from "../img/icon_place.png";
import s from "../css/TimeItem.module.css";

const TimeItem = (props) => {
  return (
    <div className={props.name}>
      <div className={s.body} style={{ height: props.height }}>
        <div className={s.LeftIndex} style={{ backgroundColor: props.color }}></div>
        <div className={s.rightContent}>
          <p className={s.time}>{props.time}</p>
          <p className={s.title}>{props.title}</p>
          <div className={s.locationDiv}>
            <img className={s.iconPlace} src={icon_place} />
            <p className={s.location}>{props.location}</p>
          </div>
          {
            props.second ?
              <div className={s.secondContent}>
                <p className={s.title}>{props.title2}</p>
                <div className={s.locationDiv}>
                  <img className={s.iconPlace} src={icon_place} />
                  <p className={s.location}>{props.location2}</p>
                </div>
              </div>
              :
              <div />
          }
        </div>
      </div>
    </div>
  );
};
export default TimeItem;