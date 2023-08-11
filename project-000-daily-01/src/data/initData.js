import moment from "moment";
import "moment/locale/ko";

const initData = () => {
  return {
    id: null,
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:ss:mm"),
    content: "",
    complete: false,
  };
};

const weekData = () => {
  const momentDay = moment().day();
  // console.log(momentDay);
  // console.log(moment().format("DD"));
  let week = [];
  if (momentDay === 0) {
    week = [
      {
        date: moment().format("YYYY[-]MM[-]DD"),
        week: moment().format("dddd"),
        today: true,
        sun: true,
      },
      {
        date: moment().add(1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(3, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(4, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(4, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(5, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(5, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(6, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(6, "d").format("dddd"),
        today: false,
        sun: false,
      },
    ];
  } else if (momentDay === 1) {
    week = [
      {
        date: moment().add(-1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-1, "d").format("dddd"),
        today: false,
        sun: true,
      },
      {
        date: moment().format("YYYY[-]MM[-]DD"),
        week: moment().format("dddd"),
        weekNum: moment().day(),
        today: true,
        sun: false,
      },
      {
        date: moment().add(1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(3, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(4, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(4, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(5, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(5, "d").format("dddd"),
        today: false,
        sun: false,
      },
    ];
  } else if (momentDay === 2) {
    week = [
      {
        date: moment().add(-2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-2, "d").format("dddd"),
        today: false,
        sun: true,
      },
      {
        date: moment().add(-1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().format("YYYY[-]MM[-]DD"),
        week: moment().format("dddd"),
        weekNum: moment().day(),
        today: true,
        sun: false,
      },
      {
        date: moment().add(1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(3, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(4, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(4, "d").format("dddd"),
        today: false,
        sun: false,
      },
    ];
  } else if (momentDay === 3) {
    week = [
      {
        date: moment().add(-3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-3, "d").format("dddd"),
        today: false,
        sun: true,
      },
      {
        date: moment().add(-2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().format("YYYY[-]MM[-]DD"),
        week: moment().format("dddd"),
        weekNum: moment().day(),
        today: true,
        sun: false,
      },
      {
        date: moment().add(1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(3, "d").format("dddd"),
        today: false,
        sun: false,
      },
    ];
  } else if (momentDay === 4) {
    week = [
      {
        date: moment().add(-4, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-4, "d").format("dddd"),
        today: false,
        sun: true,
      },
      {
        date: moment().add(-3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-3, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().format("YYYY[-]MM[-]DD"),
        week: moment().format("dddd"),
        weekNum: moment().day(),
        today: true,
        sun: false,
      },
      {
        date: moment().add(1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(2, "d").format("dddd"),
        today: false,
        sun: false,
      },
    ];
  } else if (momentDay === 5) {
    week = [
      {
        date: moment().add(-5, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-5, "d").format("dddd"),
        today: false,
        sun: true,
      },
      {
        date: moment().add(-4, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-4, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-3, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().format("YYYY[-]MM[-]DD"),
        week: moment().format("dddd"),
        weekNum: moment().day(),
        today: true,
        sun: false,
      },
      {
        date: moment().add(1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(1, "d").format("dddd"),
        today: false,
        sun: false,
      },
    ];
  } else if (momentDay === 6) {
    week = [
      {
        date: moment().add(-6, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-6, "d").format("dddd"),
        today: false,
        sun: true,
      },
      {
        date: moment().add(-5, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-5, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-4, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-4, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-3, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-3, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-2, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-2, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().add(-1, "d").format("YYYY[-]MM[-]DD"),
        week: moment().add(-1, "d").format("dddd"),
        today: false,
        sun: false,
      },
      {
        date: moment().format("YYYY[-]MM[-]DD"),
        week: moment().format("dddd"),
        weekNum: moment().day(),
        today: true,
        sun: false,
      },
    ];
  }
  // console.log(week);
  return week;
};

const func1 = () => {};
const func2 = () => {};
const func3 = () => {};

export { initData, weekData, func1, func2, func3 };

/**
 *  const week = [
    {
      date: moment().add(-6, "d").format("DD"),
      week: moment().add(-6, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(-5, "d").format("DD"),
      week: moment().add(-5, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(-4, "d").format("DD"),
      week: moment().add(-4, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(-3, "d").format("DD"),
      week: moment().add(-3, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(-2, "d").format("DD"),
      week: moment().add(-2, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(-1, "d").format("DD"),
      week: moment().add(-1, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().format("DD"),
      week: moment().format("dddd"),
      today: true,
    },
    {
      date: moment().add(1, "d").format("DD"),
      week: moment().add(1, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(2, "d").format("DD"),
      week: moment().add(2, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(3, "d").format("DD"),
      week: moment().add(3, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(4, "d").format("DD"),
      week: moment().add(4, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(5, "d").format("DD"),
      week: moment().add(5, "d").format("dddd"),
      today: false,
    },
    {
      date: moment().add(6, "d").format("DD"),
      week: moment().add(6, "d").format("dddd"),
      today: false,
    },
  ];
 */
