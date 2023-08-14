import css from "../css/Daily.module.css";
import moment from "moment";

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
      <div className={[css.day, css.box].join(" ")}>
        {moment().format("YYYY[-]MM[-]DD")}
      </div>
      {/* <input
        className={[css.time, css.box].join(" ")}
        value={content}
        onChange={inputChangeHandler}
      /> */}
      <input
        className="input_coment"
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
