import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 100);
      }, 100);
    }
    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  const handleStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const seconds = Math.floor(elapsedTime / 1000);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{seconds}</span>
      <button onClick={handleStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
