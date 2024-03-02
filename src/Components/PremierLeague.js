import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "e9b6a6af20f58e25e94742e11685942c";
const API_URL = "https://api-football.com/v3";

const PremierLeague = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noGamesToday, setNoGamesToday] = useState(false);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10);
        const response = await axios.get(
          `${API_URL}/fixtures?league=39&date=${today}`,
          {
            headers: {
              "x-rapidapi-key": API_KEY,
            },
          }
        );
        const fetchedFixtures = response.data.response;
        if (fetchedFixtures.length === 0) {
          setNoGamesToday(true);
        } else {
          setFixtures(fetchedFixtures);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fixtures:", error);
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  // Mensaje 
  /*
  Estoy intentando usar una API llamada API-sports donde debería poder obtener 
  todos los juegos que van a suceder, en este caso en la Premier League, pero 
  no se muestra nada. No recibo errores y en el sitio web de la API, donde tuve 
  que crear una cuenta para obtener una clave, me muestra que estoy haciendo la 
  solicitud pero no se muestra en mi sitio web.
  */

  return (
    <div>
      <h1>Premier League Fixtures Today</h1>
      {loading ? (
        <p>Loading...</p>
      ) : noGamesToday ? (
        <p>No games today.</p>
      ) : (
        <ul>
          {fixtures.map((fixture) => (
            <li key={fixture.fixture.id}>
              {fixture.teams.home.name} vs {fixture.teams.away.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PremierLeague;
