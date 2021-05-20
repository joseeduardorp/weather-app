export default function CurrentDay({ today, index }) {
  return (
    <div className="currentDay">
      <div className="condition">
        <h2>{today.city_name}</h2>
        <p>{today.forecast[index].weekday} {today.forecast[index].date}</p>
        <img src="./icons/039-sun.svg" alt="sol" />
        {index === 0 ? 
          (<p>{today.description}</p>) 
          :
          (<p>{today.forecast[index].description}</p>)
        }
      </div>
      <div className="temperature">
        {index === 0 ? 
          (<span>{today.temp}°</span>) 
          :
          (<span>{today.forecast[index].max}°</span>)
        }
        
        <p>
          <strong>Max:</strong> {today.forecast[index].max}°
          | <strong>Min:</strong> {today.forecast[index].min}°
        </p>
      </div>
    </div>
  );
}