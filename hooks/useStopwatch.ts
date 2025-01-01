"use client";

import { useEffect, useState } from "react";

export default function useStopwatch() {
  const [days, setDays] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [progressTime, setProgressTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();

  useEffect(() => {
    const resumeTime = JSON.parse(localStorage.getItem("resumeTime") ?? "null");
    if (resumeTime) {
      const elapsed = Date.now() - resumeTime;
      const id = setInterval(updateTime, 1000);
      setProgressTime(elapsed);
      setIntervalId(id);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const start = () => {
    const startTime = Date.now() - progressTime;
    localStorage.setItem("resumeTime", JSON.stringify(startTime));

    const id = setInterval(updateTime, 1000);
    setIntervalId(id);
  };

  const restart = () => {
    clearInterval(intervalId);
    setDays(0);
    setHrs(0);
    setMins(0);
    setSecs(0);

    localStorage.removeItem("resumeTime");
    setProgressTime(0);

    start();
  };

  const updateTime = () => {
    const elapsedTime =
      Date.now() - JSON.parse(localStorage.getItem("resumeTime") ?? "null");

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

/*
on vclcok:
when running: start=2025-01-01T15:33:57.547  (it also in url)
when stop: enabled=0&msec=27906 (it also in url)

Start time: Current time
Stop time: Counted

*/
