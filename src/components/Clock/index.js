import React, { useState, useEffect } from "react";

import "./index.css";

export function Clock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    setTimeout(() => {
      setTime(getCurrentTime());
    }, 1000);
  }, [time]);

  return (
    <div className="Clock">
      <div className="Clock__time">{time}</div>
      <div className="Clock__date">Sat 16 August 2020</div>
    </div>
  );
}

function getCurrentTime() {
  const date = new Date();
  const hours = formatTimeUnit(date.getHours());
  const minutes = formatTimeUnit(date.getMinutes());
  const seconds = formatTimeUnit(date.getSeconds());
  const currentTime = `${hours}:${minutes}:${seconds}`;

  return currentTime;
}

function formatTimeUnit(timeUnit) {
  return Math.floor(timeUnit / 10) === 0 ? `0${timeUnit}` : timeUnit;
}
