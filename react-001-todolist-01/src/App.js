import "./css/App.css";
import TodoMain from "./comps/TodoMain";

// App Component Main
function App() {
  //여러가지 설정

  // App Component의 본문(Body)
  return (
    <div className="App">
      <header>
        <h1>오늘 할일</h1>
      </header>
      <TodoMain />
    </div>
  );
}
// App Component 를 다른 Component, Container 에서 import 할 수 있도록 export 하기
export default App;
