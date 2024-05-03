import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [isLoding, setIsLoading] = useState(false);
  useEffect(() => {
    let interval;
    if (isLoding) {
      interval = setInterval(() => {
        setCount((count) => count + 2);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoding]);

  const handleClick = () => {
    setIsLoading(true);
  };
  const handleStop = () => {
    setIsLoading(false);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="App">
        <div>
          <p className="btn4">Count: {count}</p>
        </div>
        <button className="btn" onClick={handleClick}>
          START
        </button>
        <button className="btn2" onClick={handleStop}>
          STOP
        </button>
        <button className="btn3" onClick={handleReset}>
          RESET
        </button>
      </div>
    </>
  );
}
