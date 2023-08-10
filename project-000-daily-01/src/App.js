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
    </div>
  );
}

export default App;
