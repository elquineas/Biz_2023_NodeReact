import logo from "./logo.svg";
import "./css/App.css";
import TodoMain from "./comps/TodoMain";

function App() {
  const btnTest = (e) => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project</h1>
      </header>
      <div className="main menu">
        <div className="menu day">daily</div>
        <div className="menu day" onClick={btnTest}>
          weekly
        </div>
        <div className="menu month">monthly</div>
        <div className="menu login">login</div>
        <div className="menu logout">logout</div>
        <div className="menu mypage">mypage</div>
      </div>
      <TodoMain />
    </div>
  );
}

export default App;
