"use client";

import { Rank } from "@/components/Countdown";
import { Container } from "@/universal";
import { useState } from "react";

export const Stopwatch = () => {
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  let startTime = 0;
  let elapsedTime = 0;
  let intervalId;

  const start = () => {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
    console.log("start clicked");
  };

  const restart = () => {
    clearInterval(intervalId);
    elapsedTime = 0;
    start();
  };

  const updateTime = () => {
    elapsedTime = Date.now() - startTime;
    const secs = Math.floor((elapsedTime / 1000) % 60);
    const mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    setHrs(hrs);
    setMins(mins);
    setSecs(secs);
  };

  return (
    <Container>
      <div className="w-[10%] mx-auto">
        <div className="flex items-center gap-5">
          <p>{hrs}</p>
          <p>{mins}</p>
          <p>{secs}</p>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={start}>Start</button>
          <button onClick={restart}>Restart</button>
        </div>
      </div>

      <div className="mt-14 flex items-center justify-between">
        <div className="">
          <div className="w-96 h-96 border-8 border-green-500 rounded-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-2">246 days</h1>
            <h3 className="text-xl font-medium">07:35:23</h3>
          </div>
          <button className="bg-red-300 p-3 rounded-lg mt-5">Restart</button>
        </div>
        <Rank />
      </div>
    </Container>
  );
};
