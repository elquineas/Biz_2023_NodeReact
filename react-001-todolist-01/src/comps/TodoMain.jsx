import { useState } from "react";
import { SampleData } from "../data/SampleTodo";
import "../css/Todo.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import moment from "moment";

const TodoMain = () => {
  /**
   * State 끌어 올리기
   * TodoInput 과 TodoList 에 있던 state 들을 TodoMain 부모 컴포넌트로 이동
   * React는 현제간 state를 절대 공유할수 없다
   *   부모가 만들어서 전달해준 State 만 볼 수 있다
   *   자식이 만든 State 는 부모도 볼수 없다
   * 이 상황을 해결하기 위해 자식 Comps 에 있던 state와 state 함수를 부모 Comps로 끌어올린다
   * 그리고 자식 Comps 에 전달해야한다
   */
  const [todo, setTodo] = useState(null);
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoListAdd = (todo) => {
    const id = todoList[todoList.length - 1]?.id + 1 || 0;
    const addTodo = {
      id: id,
      sdate: moment().format("YYYY[-]MM[-]DD"), //"2023-08-03"
      stime: moment().format("HH:mm:ss"), //"13:39:00"
      content: todo,
      complete: false,
    };
    setTodoList([...todoList, addTodo]);
  };

  const itemComplete = (id) => {
    const compTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodoList([...compTodoList]);
  };

  const itemDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const deleteTodoList = todoList.filter((todo) => {
        return todo.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  const updateItemSelect = (id) => {
    const selectTodoList = todoList.filter((todo) => {
      return todo.id === id;
    });
    // console.log(selectTodoList);
    // console.log(selectTodoList[0].content);
    // console.log({ ...selectTodoList[0] });
    setContent(selectTodoList[0].content);
    setTodo({ ...selectTodoList[0] });
  };

  const updateItemOk = (text) => {
    if (todo) {
      const updateTodo = { ...todo, content: text };
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return updateTodo;
        }
        return item;
      });
      setTodoList(updateTodoList);
      setTodo(null);
    } else {
      todoListAdd(text);
    }
  };

  return (
    <div className="todo">
      <TodoInput
        content={content}
        setContent={setContent}
        todoListAdd={updateItemOk}
      />
      <TodoList
        todoList={todoList}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};

export default TodoMain;
