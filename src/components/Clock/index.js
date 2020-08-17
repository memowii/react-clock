import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import "./index.css";

export function Clock() {
  const currentDate = getDate();
  const [time, setTime] = useState(currentDate.time);
  const [date, setDate] = useState(currentDate.date);

  useEffect(() => {
    setTimeout(() => {
      const currentDate = getDate();
      setTime(currentDate.time);
      setDate(currentDate.date);
    }, 1000);
  }, [time]);

  return (
    <div className="Clock">
      <div className="Clock__time">{time}</div>
      <div className="Clock__date">{date}</div>
    </div>
  );
}

function getDate() {
  return {
    time: dayjs().format('HH:mm:ss'),
    date: dayjs().format('ddd D MMMM YYYY')
  }
}