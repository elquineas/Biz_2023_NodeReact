import { useEffect, useState } from "react";
import { initData } from "../data/initData";
import "../css/Daily.css";
import DailyInput from "./DailyInput";
import DailyList from "./DailyList";

const DailyMain = () => {
  const [daily, setDaily] = useState(() => initData());
  const [content, setContent] = useState("");
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
  }, [dailyList]);

  const dailyListAdd = (content) => {
    const id = dailyList[dailyList.length - 1]?.id + 1 || 1;
    const addDaily = { ...daily, id: id, content: content };
    setDailyList([...dailyList, addDaily]);
  };

  const itemComplete = (id) => {
    const compDailyList = dailyList.map((daily) => {
      if (daily.id === id) {
        return { ...daily, complete: !daily.complete };
      }
      return daily;
    });
    setDailyList([...compDailyList]);
  };

  const itemDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const deleteDailyList = dailyList.filter((daily) => {
        return daily.id !== id;
      });
      setDailyList([...deleteDailyList]);
    }
  };

  const updateItemSelect = (id) => {
    console.log("1111");
    const selectDailyList = dailyList.filter((daily) => {
      console.log(daily.id, ":", id);
      return daily.id === id;
    });
    setContent(selectDailyList[0].content);
    setDaily({ ...selectDailyList[0] });
  };

  const updateItemOk = (text) => {
    if (daily.id) {
      const updateDaily = { ...daily, content: text };
      const updateDailyList = dailyList.map((item) => {
        if (item.id === daily.id) {
          return updateDaily;
        }
        return item;
      });
      setDailyList(updateDailyList);
    } else {
      dailyListAdd(text);
    }
  };

  return (
    <div className="daily">
      <DailyInput
        content={content}
        setContent={setContent}
        dailyListAdd={updateItemOk}
      />
      <DailyList
        dailyList={dailyList}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};

export default DailyMain;
