import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div>
      <div className="app-body">
        <h1>COUNTER GAME</h1>

        <div className="btn-container">
          <h1>Timer: {timer}</h1>
          <h3>Count: {count}</h3>
          <button className="btn-1" onClick={() => {setTimer(10); setCount(0)}}>Start</button>
          <button className="btn-2"
            onClick={() => {
              setCount(count + 1)
            }}
            disabled={timer === 0}
          >
            Smash the button
          </button>
          <button className="btn-3"
            onClick={() => {
              setCount(0);
              setTimer(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
