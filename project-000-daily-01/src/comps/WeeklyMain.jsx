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
      <th
        key={week.date}
        className={[
          (week.today && css.todayTh) || "",
          (week.sun && css.sun) || "",
        ].join(" ")}
      >
        {week.week}
      </th>
    );
  });

  const weekContent = weekly.map((week) => {
    // console.log(week);
    return (
      <td
        key={week.date}
        className={[
          (week.today && css.todayTd) || "",
          (week.sun && css.sun) || "",
        ].join(" ")}
      >
        {week.date.substr(8, 2)}
      </td>
    );
  });

  return (
    <div className={css.weekly}>
      <table className={css.table}>
        <thead>
          <tr>{weekTitle}</tr>
        </thead>
        <tbody>
          <tr>{weekContent}</tr>
          <WeeklyList dailyList={dailyList} weekly={weekly} />
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyMain;
