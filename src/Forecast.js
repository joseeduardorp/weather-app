import CurrentDay from "./CurrentDay";
import NextDays from "./NextDays";

export default function Forecast({ results }) {
  return (
    <div className="forecastContainer">
      <CurrentDay today={results} />
      <NextDays nextDays={results} />
    </div>
  );
}