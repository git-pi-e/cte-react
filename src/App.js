import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [delta, setDelta] = useState(1);
  const increase = () => {
    setCounter(counter + delta);
  };
  const decrease = () => {
    if (counter > delta) {
      setCounter(counter - delta);
    }
  };
  const updateCounter = (e) => {
    setDelta(parseInt(e.target.value));
  };
  return (
    <div className="App">
      <div style={{ fontSize: 50 }}>Counter</div>
      <div>This is second</div>
      <div>{counter}</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <div>
        <input onChange={updateCounter} />
      </div>
    </div>
  );
}

export default App;
