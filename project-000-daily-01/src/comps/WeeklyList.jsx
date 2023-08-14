import moment from "moment";
import css from "../css/Week.module.css";

const WeeklyList = ({ dailyList, weekly }) => {
  console.log("!!!!!!!!!!!!");
  console.log(dailyList);
  console.log(weekly);

  // const weeList = dailyList.map((daily) => {
  //   if (daily.sdate >= weekly[0].date && daily.sdate <= weekly[6].date) {
  //     return (
  //       <div className={css.list}>
  //         {daily.sdate} 계획 : {daily.content}
  //       </div>
  //     );
  //   } else {
  //     return "";
  //   }
  // });

  const sunList = weekly.map((week) => {
    let Count = 0;
    let dayList;
    if (week.week === "일요일") {
      dayList = dailyList.map((daily) => {
        if (daily.sdate == week.date) {
          Count++;
          return (
            <span>
              <div className={css.side_color}></div>
              <div className={css.main_box}>
                {daily.content} <br />
                {daily.sdate} : {daily.stime}
              </div>
            </span>
          );
        }
      });
      if (Count < 1) {
        dayList = (
          <span>
            <div className={css.side_color_none}></div>
            <div className={css.main_box}>일정이 없어요~</div>
          </span>
        );
      }
    }
    if (week.week === "월요일") {
      Count = 0;
      dayList = dailyList.map((daily) => {
        if (daily.sdate == week.date) {
          Count++;
          return (
            <span>
              <div className={css.side_color}></div>
              <div className={css.main_box}>
                {daily.content} <br />
                {daily.sdate} : {daily.stime}
              </div>
            </span>
          );
        }
      });
      if (Count < 1) {
        dayList = (
          <span>
            <div className={css.side_color_none}></div>
            <div className={css.main_box}>일정이 없어요~</div>
          </span>
        );
      }
    }
    if (week.week === "화요일") {
      Count = 0;
      dayList = dailyList.map((daily) => {
        if (daily.sdate == week.date) {
          Count++;
          return (
            <span>
              <div className={css.side_color}></div>
              <div className={css.main_box}>
                {daily.content} <br />
                {daily.sdate} : {daily.stime}
              </div>
            </span>
          );
        }
      });
      if (Count < 1) {
        dayList = (
          <span>
            <div className={css.side_color_none}></div>
            <div className={css.main_box}>일정이 없어요~</div>
          </span>
        );
      }
    }
    if (week.week === "수요일") {
      Count = 0;
      dayList = dailyList.map((daily) => {
        if (daily.sdate == week.date) {
          Count++;
          return (
            <span>
              <div className={css.side_color}></div>
              <div className={css.main_box}>
                {daily.content} <br />
                {daily.sdate} : {daily.stime}
              </div>
            </span>
          );
        }
      });
      if (Count < 1) {
        dayList = (
          <span>
            <div className={css.side_color_none}></div>
            <div className={css.main_box}>일정이 없어요~</div>
          </span>
        );
      }
    }
    if (week.week === "목요일") {
      Count = 0;
      dayList = dailyList.map((daily) => {
        if (daily.sdate == week.date) {
          Count++;
          return (
            <span>
              <div className={css.side_color}></div>
              <div className={css.main_box}>
                {daily.content} <br />
                {daily.sdate} : {daily.stime}
              </div>
            </span>
          );
        }
      });
      if (Count < 1) {
        dayList = (
          <span>
            <div className={css.side_color_none}></div>
            <div className={css.main_box}>일정이 없어요~</div>
          </span>
        );
      }
    }
    if (week.week === "금요일") {
      Count = 0;
      dayList = dailyList.map((daily) => {
        if (daily.sdate == week.date) {
          Count++;
          return (
            <span>
              <div className={css.side_color}></div>
              <div className={css.main_box}>
                {daily.content} <br />
                {daily.sdate} : {daily.stime}
              </div>
            </span>
          );
        }
      });
      if (Count < 1) {
        dayList = (
          <span>
            <div className={css.side_color_none}></div>
            <div className={css.main_box}>일정이 없어요~</div>
          </span>
        );
      }
    }
    if (week.week === "토요일") {
      Count = 0;
      dayList = dailyList.map((daily) => {
        if (daily.sdate == week.date) {
          Count++;
          return (
            <span>
              <div className={css.side_color}></div>
              <div className={css.main_box}>
                {daily.content} <br />
                {daily.sdate} : {daily.stime}
              </div>
            </span>
          );
        }
      });
      if (Count < 1) {
        dayList = (
          <span>
            <div className={css.side_color_none}></div>
            <div className={css.main_box}>일정이 없어요~</div>
          </span>
        );
      }
    }
    return <span>{dayList}</span>;
  });
  return (
    <div className={css.content}>
      {sunList}
      {/* <span>
        <span>
          <div className={css.side_color}></div>
        </span>
      </span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span> */}
    </div>
  );
};
export default WeeklyList;
