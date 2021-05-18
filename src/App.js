import { useState, useEffect } from 'react';

const fields = "only_results, condition, description, city_name, temp, forecast, max, min, weekday";

export default function App() {
  const [infos, setInfos] = useState({});

  async function fetchInfos (longitude, latitude) {
    const lat = latitude.toFixed(2);
    const lon = longitude.toFixed(2);

    const url = `
    https://api.hgbrasil.com/weather?locale=pt&lat=${lat}&lon=${lon}&array_limit=7&fields=${fields}&key=fc6021ed
    `;

    const response = await fetch(url)
    const data = await response.json();

    setInfos(data);
  }

  useEffect(() => {
    console.clear();

    navigator
      .geolocation
      .getCurrentPosition(
        (position) => fetchInfos(position.coords.longitude, position.coords.latitude), 
        () => console.log("error")
      );
  }, []);

  console.log(infos);

  return (
    <>
      <header>
        <h1>Weather App</h1>
      </header>

      <div className="appContainer">
        <div className="currentDay">
          <h2>{infos.description}</h2>
          <p>{infos.city_name}</p>
          <span>{infos.temp}°</span>

            <div>
              <p><strong>Max:</strong>{infos.forecast[0].max}°</p>
              <div>|</div>
              <p><strong>Min:</strong>{infos.forecast[0].min}°</p>
            </div>
          </div>

          <div className="anotherDays">
          {
            infos.forecast.map(({weekday, max, min}, index) => {
              return (
                <div key={index}>
                  <h3>{weekday}</h3>
                  <div>
                    <p><strong>Max:</strong> {max}°</p>
                    <p><strong>Min:</strong> {min}°</p>
                  </div>
                </div>
              );
            })
          }
          </div>
      </div>
    </>
  );
}
