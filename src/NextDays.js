export default function NextDays({ nextDays, toggleDay }) {
  return (
    <div className="nextDays">
      {
        nextDays.forecast.map(({ weekday, max, min }, index) => {
          return (
            <div className="day" key={index} onClick={() => toggleDay(index)}>
              <h3>{weekday}</h3>
              <img src="./icons/001-cloud.svg" alt="nuvem" />
              <p>{max}° / {min}°</p>
            </div>
          );
        })
      }
      
    </div>
  );
}