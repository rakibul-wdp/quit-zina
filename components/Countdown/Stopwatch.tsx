"use client";

import { Clock, Rank } from "@/components/Countdown";
import { Container } from "@/universal";
import { useState } from "react";

export const Stopwatch = () => {
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();

  let startTime = 0;
  let elapsedTime = 0;

  const start = () => {
    startTime = Date.now() - elapsedTime;
    const id = setInterval(updateTime, 1000);
    setIntervalId(id);
  };

  const restart = () => {
    clearInterval(intervalId);
    setHrs(0);
    setMins(0);
    setSecs(0);
    startTime = 0;
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
        <Clock />
        <Rank />
      </div>
    </Container>
  );
};
