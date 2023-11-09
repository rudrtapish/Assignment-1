import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);
            setIsBreak(!isBreak);
            setMinutes(isBreak ? 5 : 25);
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, isBreak]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{isBreak ? 'Break Time' : 'Pomodoro Timer'}</h1>
      <div className="mt-4">
        <span className="text-2xl">{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span className="text-2xl">:</span>
        <span className="text-2xl">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="mt-4">
        <button onClick={handleStart} className="bg-green-500 px-4 py-2 text-white mr-2">Start</button>
        <button onClick={handlePause} className="bg-yellow-500 px-4 py-2 text-white mr-2">Pause</button>
        <button onClick={handleReset} className="bg-red-500 px-4 py-2 text-white">Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
