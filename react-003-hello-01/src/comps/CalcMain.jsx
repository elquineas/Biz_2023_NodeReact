import { useState } from "react";
import CalcInput from "./CalcInput";
import CalcList from "./CalcList";

const CalcMain = () => {
  const [calcList, setCalcList] = useState([]);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const calcListAdd = () => {
    console.log("계산");
    let plus = "";
    let minus = "";
    let multiply = "";
    let division = "";
    if (val1 === 0 || val2 === 0) {
      return;
    }
    plus = val1 + "+" + val2 + "=" + (val1 * 1 + val2 * 1);
    multiply = val1 + "*" + val2 + "=" + val1 * val2;
    if (val1 < val2) {
      minus = val2 + "-" + val1 + "=" + (val2 - val1);
      division = val2 + "/" + val1 + "=" + val2 / val1;
    } else if (val1 > val2) {
      minus = val1 + "-" + val2 + "=" + (val1 - val2);
      division = val1 + "/" + val2 + "=" + val1 / val2;
    }

    const calcList = {
      val1: val1,
      val2: val2,
      plus: plus,
      minus: minus,
      multiply: multiply,
      division: division,
    };
    setCalcList([calcList]);
    console.log(calcList);
  };

  return (
    <div className="calc">
      <CalcInput
        setVal1={setVal1}
        setVal2={setVal2}
        calcListAdd={calcListAdd}
      />
      <CalcList calcList={calcList} />
    </div>
  );
};

export default CalcMain;
