import { useState } from "react";

/**
 *
 * @returns HTML tag를 생성하는 코드
 * HTML tag를 생성하는 코드 return 하는 함수를
 * React 에서는 Component 라고 한다
 */

const Input = () => {
  const [nation, setNation] = useState("");
  const [nations, setNations] = useState(["우리나라", "대한민국"]);

  const nationList = nations.map((item) => {
    return <div>{item}</div>;
  });

  const inputChangeHandler = (e) => {
    setNation(e.target.value);
  };

  return (
    <div>
      <input value={nation} onChange={inputChangeHandler} />
      <button onClick={(e) => setNations([...nations, nation])}>추가</button>
      <div>{nationList}</div>
    </div>
  );
};

export default Input;
