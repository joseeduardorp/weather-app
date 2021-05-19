export default function NextDays({ nextDays }) {
  return (
    <div className="nextDays">
      {
        nextDays.forecast.map(({ weekday, max, min }, index) => {
          return (
            <div className="day" key={index}>
              <h3>{weekday}</h3>
              <i className="fas fa-cloud" />
              <p>{max}° / {min}°</p>
            </div>
          );
        })
      }
      
    </div>
  );
}