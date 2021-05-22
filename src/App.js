import { useState, useEffect } from 'react';
import Forecast from './Forecast.js';

export default function App() {
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);

  function formatPosition(position) {
    const lon = position.coords.longitude.toFixed(2);
    const lat = position.coords.latitude.toFixed(2);

    return [lon, lat];
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("É necessário permitir a geolocalização!")
        break;
      case error.POSITION_UNAVAIBLE:
        alert("Posição indisponível!");
        break;
      case error.TIMEOUT:
        alert("O tempo de solicitação esgotou!");
        break;
      default:
        alert("Ocorreu um erro desconhecido!");
        break;
    }
  }
  
  useEffect(() => {
    async function fetchResults(position) {
      setLoading(true);
  
      try {
        const [lon, lat] = formatPosition(position);
  
        const url = `
        https://api.hgbrasil.com/weather?locale=pt&lat=${lat}&lon=${lon}&array_limit=7&fields=only_results&key=ee1a07d8
        `;
  
        const response = await fetch(url)
        const data = await response.json();
  
        setLoading(false);
        setResults(data);
      } catch (error) {
        setLoading(false);
  
        console.log(error);
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchResults, showError);
    } else {
      alert("A geolocalização não é compatível com este navegador!");
    }
  }, []);

  if (loading || Object.values(results).length === 0) {
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
