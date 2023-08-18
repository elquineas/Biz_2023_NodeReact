import logo from "./logo.svg";
import cat from "./img/nyan-cat.gif";
import "./css/App.css";
import BucketMain from "./comps/BucketMain";
import BucketList from "./comps/BucketList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={cat} className="App-logo" alt="logo" /> */}
      </header>
      <BucketMain />
    </div>
  );
}

export default App;
