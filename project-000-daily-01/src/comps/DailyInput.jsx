const DailyInput = (props) => {
  const { content, setContent, dailyListAdd } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const btnClickHandler = (e) => {
    dailyListAdd(content);
    setContent("");
  };

  return (
    <div className="input">
      <input
        placeholder="Daily"
        value={content}
        onChange={inputChangeHandler}
      />
      <button disabled={content.length < 2} onClick={btnClickHandler}>
        Save
      </button>
    </div>
  );
};

export default DailyInput;
