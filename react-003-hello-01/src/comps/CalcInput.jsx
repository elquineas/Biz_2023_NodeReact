const CalcInput = (props) => {
  const { setVal1, setVal2, calcListAdd } = props;
  const inputChangeHandler1 = (e) => {
    const value = e.target.value;
    setVal1(value);
    calcListAdd();
  };
  const inputChangeHandler2 = (e) => {
    const value = e.target.value;
    setVal2(value);
    calcListAdd();
  };

  return (
    <div className="input">
      <input placeholder="숫자1" onChange={inputChangeHandler1} />
      <input placeholder="숫자2" onChange={inputChangeHandler2} />
    </div>
  );
};

export default CalcInput;
