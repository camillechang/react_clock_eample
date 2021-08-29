// import logo from './logo.svg';
import "./App.css";

import Clock from "./assignment/Clock";

function App() {
  return (
    <div className="App">
      <div>
        <Clock city={"Sydney"} />
        <Clock city={"Seoul"} />
      </div>
      <div>
        <Clock city={"London"} />
        <Clock city={"New York"} />
      </div>
    </div>
  );
}

export default App;
