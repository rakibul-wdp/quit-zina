import { useState } from "react";

export default function useStopwatch() {
  const [days, setDays] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [progressTime, setProgressTime] = useState(0);
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
    setDays(0);
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
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    setDays(days);
    setHrs(hrs);
    setMins(mins);
    setSecs(secs);
    setProgressTime(elapsedTime);
  };

  return { days, hrs, mins, secs, progressTime, start, restart };
}
