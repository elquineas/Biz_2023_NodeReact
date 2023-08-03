import TodoItem from "./TodoItem";

const TodoList = (props) => {
  //   const [todoList, setTodoList] = useState([...SampleData]);
  const { todoList, itemComplete, itemDelete, updateItemSelect } = props;
  // 배열.map((item) => {return 새로운 값})
  // todoList 데이터의 각 요소를 item 이라는 변수(properties)에 담아서
  // TOdoItem 에게 전달하는 Component List 를 만들기
  const todoItemList = todoList.map((todo) => {
    return (
      <TodoItem
        item={todo}
        key={todo.id}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    );
  });
  return <>{todoItemList}</>;
};

export default TodoList;
