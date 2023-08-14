import logo from "./logo.svg";
import "./css/App.css";
import NavList from "./layout/NavList";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project</h1>
      </header>
      <NavList />
      <Outlet />
      <div className="App-footer-box"></div>
      <footer className="App-footer">
        CopyRight &copy; elquineas@naver.com
      </footer>
    </div>
  );
}

export default App;
