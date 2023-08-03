import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./comps/input";

function App() {
  const [count, setCount] = useState(0);

  // let count = 0;
  const clickHandlerIncre = () => {
    setCount(count + 1);
    // count = count + 1;
  };

  const clickHandlerDecre = () => {
    setCount(count - 1);
    // count = count - 1;
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <div onClick={clickHandlerIncre}>카운터 증가</div>
        <div onClick={clickHandlerDecre}>카운터 감소</div>
        <Input />
      </header>
    </div>
  );
}

export default App;
