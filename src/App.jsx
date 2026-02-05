import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const handleInc = () => {
    if (count < 10) {
      setError("");
      setCount((prevCount) => prevCount + 1);
    } else {
      setError("Value Cannot be greater than 10");
    }
  };
  const handleDec = () => {
    if (count > 0) {
      setError("");
      setCount((prevCount) => prevCount - 1);
    } else {
      setError("Value Cannot be less than 0");
    }
  };
  const handleReset = () => {
    setCount(0);
    setError("");
  };

  return (
    <div className="main">
      <div className="container">
        <p className="count">
          Count :{" "}
          <span
            style={{
              color: count >= 0 && count <= 6 ? "#000" : "red",
            }}
          >
            {" "}
            {count}
          </span>
        </p>
        {error && <p className="error">{error}</p>}

        <div>
          <button className="btn inc" onClick={handleInc}>
            Inc
          </button>
          <button className="btn reset " onClick={handleReset}>
            Reset
          </button>
          <button
            className="btn dec"
            disabled={count === 0}
            onClick={handleDec}
          >
            Dec
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
