import { useState, useEffect } from "react";
import { initData, weekData } from "../data/initData";
import css from "../css/Week.module.css";
import WeeklyList from "./WeeklyList";

const WeeklyMain = () => {
  const [daily, setDaily] = useState(() => initData());
  const [dailyList, setDailyList] = useState(() => {
    return localStorage.getItem("DAILYLIST")
      ? JSON.parse(localStorage.getItem("DAILYLIST"))
      : [];
  });

  useEffect(() => {
    const resetDaily = () => {
      console.log("Use Effect");
      localStorage.setItem("DAILYLIST", JSON.stringify(dailyList));
      setDaily(initData());
    };
    resetDaily();
    // console.log(dailyList);
  }, [dailyList]);

  const [weekly, setWeekly] = useState(() => weekData());
  const weekTitle = weekly.map((week) => {
    return (
      <span
        key={week.date}
        className={[
          (week.today && css.todayTh) || "",
          (week.sun && css.sun) || "",
        ].join(" ")}
      >
        {week.week} <br />
        {week.date.substr(5, 6)}
      </span>
    );
  });

  const weekContent = weekly.map((week) => {
    return (
      <span
        key={week.date}
        className={[
          (week.today && css.todayTd) || "",
          (week.sun && css.sun) || "",
        ].join(" ")}
      >
        {week.date.substr(8, 2)}
      </span>
    );
  });

  return (
    <div className={css.weekly}>
      <div className={css.week_daily}>{weekTitle}</div>
      {/* <div>{weekContent}</div> */}
      <WeeklyList dailyList={dailyList} weekly={weekly} />
    </div>
  );
};
// <table className={css.table}>
//   <thead>{/* <tr>{weekTitle}</tr> */}</thead>
//   <tbody>
//     <tr>{weekContent}</tr>
//
//   </tbody>
// </table>;
export default WeeklyMain;
