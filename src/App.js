import { useState, useEffect } from 'react';
import Forecast from './Forecast.js';

export default function App() {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchResults (longitude, latitude) {
    const lat = latitude.toFixed(2);
    const lon = longitude.toFixed(2);

    const url = `
    https://api.hgbrasil.com/weather?locale=pt&lat=${lat}&lon=${lon}&array_limit=7&fields=only_results&key=fc6021ed
    `;

    setLoading(true);

    try {
      const response = await fetch(url)
      const data = await response.json();

      setLoading(false);
      setResults(data);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }
  
  useEffect(() => {
    console.clear();

    navigator
      .geolocation
      .getCurrentPosition(
        (position) => fetchResults(position.coords.longitude, position.coords.latitude), 
        () => console.log("error")
      );
  }, []);
  
  console.log(results);

  if (loading) {
    return (
      <main>
        <header>
          <h1>Weather App</h1>
        </header>
        <article>
          <h2>Aguarde...</h2>
        </article>
      </main>
    );
  }

  if (Object.values(results).length === 0) {
    return (
      <main>
        <header>
          <h1>Weather App</h1>
        </header>
        <article>
          <button onClick={fetchResults}>refresh</button>
        </article>
      </main>
    );
  }

  return (
    <main>
      <header>
        <h1>Weather App</h1>
      </header>
      <article>
        <Forecast results={results} />
      </article>
    </main>
  );
}
