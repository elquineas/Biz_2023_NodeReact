const TotoInput = (props) => {
  const { content, setContent, todoListAdd } = props;

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
      <button disabled={content.length < 2} onClick={btnClickHandler}>
        Save
      </button>
    </div>
  );
};

export default TotoInput;
