const ArithInput = ({ nums, setNums }) => {
  //   const onChangeNum1Handler = (e) => {};
  //   const onChangeNum2Handler = (e) => {};
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNums({ ...nums, [name]: value });
  };
  return (
    <div>
      <div>
        <label>숫자1</label>
        <input
          name="num1"
          placeholder="num1"
          value={nums.num1}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>숫자2</label>
        <input
          name="num2"
          placeholder="num2"
          value={nums.num2}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default ArithInput;
