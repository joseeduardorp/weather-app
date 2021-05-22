export default function CurrentDay({ today, index }) {
  return (
    <div className="currentDay">
      <div className="condition">
        <h2>{today.city_name}</h2>
        <p>{today.forecast[index].weekday} {today.forecast[index].date}</p>
        {index === 0 ? 
          (
            <>
              <img
                src={`./icons/${today.condition_slug}.svg`}
                alt={`${today.condition_slug}`}
              />
              <p>{today.description}</p>
            </>
          ) 
          :
          (
            <>
              <p>{today.forecast[index].description}</p>
              <img
                  src={`./icons/${today.forecast[index].condition}.svg`}
                  alt={`${today.forecast[index].condition}`}
                />
            </>
          )
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