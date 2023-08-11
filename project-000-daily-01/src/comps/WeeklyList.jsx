import moment from "moment";
import css from "../css/Week.module.css";

const WeeklyList = ({ dailyList, weekly }) => {
  console.log(dailyList);
  console.log(weekly);

  const weeList = dailyList.map((daily) => {
    if (daily.sdate >= weekly[0].date && daily.sdate <= weekly[6].date) {
      return (
        <div className={css.list}>
          {daily.sdate} 계획 : {daily.content}
        </div>
      );
    } else {
      return "";
    }
  });

  const weekList = weekly.map((week) => {
    const dayList = dailyList.map((daily) => {
      if (daily.sdate == week.date) {
        return (
          <div>
            {daily.sdate} 계획 : {daily.content}
          </div>
        );
      }
    });

    return <td className={css.list}>{dayList}</td>;
  });

  return <tr>{weekList}</tr>;
};
export default WeeklyList;
