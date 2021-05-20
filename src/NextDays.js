export default function NextDays({ nextDays, toggleDay }) {
  return (
    <div className="nextDays">
      {
        nextDays.forecast.map(({ weekday, max, min, condition }, index) => {
          return (
            <div className="day" key={index} onClick={() => toggleDay(index)}>
              <h3>{weekday}</h3>
              <img src={`./icons/${condition}.svg`} alt={`${condition}`} />
              <p>{max}° / {min}°</p>
            </div>
          );
        })
      }
      
    </div>
  );
}