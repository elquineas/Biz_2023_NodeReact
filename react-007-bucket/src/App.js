import cat from "./nyan-cat.gif";
import mokoko from "./mokoko.png";
import "./css/App.css";
import MainRouterProvider from "./layout/MainRouterProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="App-logo" alt="logo" />
      </header>
      <section className="main">
        <MainRouterProvider />
      </section>
    </div>
  );
}

export default App;
