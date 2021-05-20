import { useState } from 'react';

import CurrentDay from "./CurrentDay";
import NextDays from "./NextDays";

export default function Forecast({ results }) {
  const [index, setIndex] = useState(0);

  function toggleDay(day) {
    setIndex(day);
  }

  return (
    <div className="forecastContainer">
      <CurrentDay today={results} index={index} />
      <NextDays nextDays={results} toggleDay={toggleDay} />
    </div>
  );
}