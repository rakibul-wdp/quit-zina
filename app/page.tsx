"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = isRunning ? setInterval(tick, 1000) : null;
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    // Check if there's a previous state stored in local storage
    const savedState = JSON.parse(localStorage.getItem("stopwatchState"));
    if (savedState) {
      setIsRunning(savedState.isRunning);
      setSeconds(savedState.seconds);
    }
  }, []);

  useEffect(() => {
    // Save the current state to local storage whenever it changes
    const stateToSave = JSON.stringify({ isRunning, seconds });
    localStorage.setItem("stopwatchState", stateToSave);
  }, [isRunning, seconds]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  };

  return (
    <main className="flex items-center justify-center">
      <section className="flex flex-col items-center justify-between gap-10 bg-slate-50 text-black mt-32 p-20 rounded-3xl">
        <div className="text-[5rem]">
          {`${Math.floor(seconds / 60)
            .toString()
            .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`}
        </div>
        <div>
          <button
            className="bg-blue-500 px-10 py-3 mx-2 text-lg text-black rounded-3xl"
            onClick={startStop}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button
            className="bg-red-500 px-10 py-3 mx-2 text-lg text-black rounded-3xl"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}
