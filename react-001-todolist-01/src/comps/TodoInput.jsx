const TodoInput = (props) => {
  //   const [content, setContext] = useState("");
  const { content, setContent, todoListAdd } = props;
  // const content1 = props.content;
  // const setContent1 = props.setContent;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const btnClickHandler = (e) => {
    todoListAdd(content);
    setContent("");
  };

  return (
    <div className="input">
      <input placeholder="TODO" value={content} onChange={inputChangeHandler} />
      {/*
        JSX 주석
        본문의 tag 내에서 사용하는 주석문 (return문 안에)

        button disabled 속성
        html 에서는 disabled="disabled" 라고 속성을 지정하면
        button tag 에 click 속성이 사라지는 효과를 낼수 있다.
        button:disabled style 을 지정해주면 button disabled 가 설정되었을때 모양을 만들 수 있다.

        react 에서는 discaled={true} 라는 속성으로 사용된다.
       */}
      <button disabled={content.length < 2} onClick={btnClickHandler}>
        저장
      </button>
    </div>
  );
};

export default TodoInput;
