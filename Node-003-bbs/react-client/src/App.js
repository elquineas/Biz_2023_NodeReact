import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import BBsMain from "./comps/BBsMain";
import { hello } from "./modules/FetchModule";
import NavList from "./layout/NavList";
import { Outlet } from "react-router-dom";
// 여기는 app.js
function App() {
  const [title, setTitle] = useState("");

  // 화면이 mount 될때 작동되도록 event 핸들러 등록
  // 두번째 파라메터를 빈(black) 배열[] 로 추가하면
  // Effect() 에 의해 실행할 함수는 화면이 rendering 된 후 한번만 실행된다
  // useEffect (()=> {실행할 함수()}, [])

  // hello() 함수는 await 를 부착하여 결과를 기다려야 하는 함수
  // 이 함수에 await 를 부착하기 위해서는 함수를 감싸는 함수에 async를 부착해야한다
  /**
     useEffect(async () => {
         setTitle(await hello());
     }, []);
   */
  // 하지만 useEffect() 첫번째 함수에는 async 를 부착할수 없다.

  /**
    useEffect(() => {
      const fetchTitle = async () => {
        setTitle(await hello());
      };
      fetchTitle();
    }, []);
   */

  // 즉시시 실행 함수로 만들기
  // 익명 함수 호출방식
  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "반갑습니다 React BBS Project 입니다."}</p>
      </header>
      <div className="input">
        <input placeholder="입력하기" />
      </div>
      <NavList />
      {/* Router 에서 children 으로 설정된 component가 표시되는 위치 */}
      <Outlet />
    </div>
  );
}

export default App;
