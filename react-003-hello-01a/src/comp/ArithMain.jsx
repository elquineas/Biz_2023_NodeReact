import "../Arith.css";
import ArithInput from "./ArithInput";
import ArithResult from "./ArithResult";
import { useState } from "react";
const ArithMain = () => {
  const [nums, setNums] = useState({ num1: 0, num2: 0 });
  return (
    <div className="Arith">
      <h3>The For Fundamental Arithmetic Operation</h3>
      <ArithInput nums={nums} setNums={setNums} />
      <ArithResult nums={nums} />
    </div>
  );
};

export default ArithMain;
