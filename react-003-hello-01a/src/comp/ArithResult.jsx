const ArithResult = ({ nums }) => {
  const { num1, num2 } = nums;

  // const intNum1 = Number(num1);
  // const intNum2 = Number(num2);
  const [intNum1, intNum2] = [Number(num1), Number(num2)];
  //   let maxNum = 0;
  //   let minNum = 0;
  //   if (intNum1 > intNum2) {
  //     maxNum = intNum1;
  //     minNum = intNum2;
  //   } else {
  //     maxNum = intNum2;
  //     minNum = intNum1;
  //   }
  const [minNum, maxNum] = num1 > num2 ? [num2, num1] : [num1, num2];
  return (
    <div>
      <div>
        <strong>
          덧셈 ({intNum1} + {intNum2}) =&nbsp;
        </strong>
        <span>{intNum1 + intNum2}</span>
      </div>
      <div>
        <strong>
          뺄셈 ({maxNum} &minus; {minNum}) =&nbsp;
        </strong>
        <span>{maxNum - minNum}</span>
      </div>
      <div>
        <strong>
          곱셈 ({intNum1} &times; {intNum2}) =&nbsp;
        </strong>
        <span>{intNum1 * intNum2}</span>
      </div>
      <div>
        <strong>
          나눗셈 ({maxNum} &divide; {minNum}) =&nbsp;
        </strong>
        <span>{maxNum / minNum}</span>
      </div>
    </div>
  );
};

export default ArithResult;
