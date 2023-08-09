import { useState } from "react";
import moment from "moment";
import "../css/Todo.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
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
