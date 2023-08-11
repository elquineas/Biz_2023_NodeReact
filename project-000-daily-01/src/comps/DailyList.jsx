import moment from "moment";
import DailyItem from "./DailyItem";

const DailyList = (props) => {
  //   const [todoList, setTodoList] = useState([...SampleData]);
  const { dailyList, itemComplete, itemDelete, updateItemSelect } = props;
  // 배열.map((item) => {return 새로운 값})
  // todoList 데이터의 각 요소를 item 이라는 변수(properties)에 담아서
  // TOdoItem 에게 전달하는 Component List 를 만들기
  const dailyItemList = dailyList.map((daily) => {
    if (daily.sdate === moment().format("YYYY[-]MM[-]DD")) {
      return (
        <DailyItem
          item={daily}
          key={daily.id}
          itemComplete={itemComplete}
          itemDelete={itemDelete}
          updateItemSelect={updateItemSelect}
        />
      );
    } else {
      return "";
    }
  });
  return <>{dailyItemList}</>;
};

export default DailyList;
