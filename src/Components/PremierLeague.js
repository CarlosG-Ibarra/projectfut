import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'e9b6a6af20f58e25e94742e11685942c';
const API_URL = 'https://api-football.com';

const PremierLeague = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
        const response = await axios.get(
          `${API_URL}/v3/fixtures?date=${today}&league=39`, // Premier League ID is 39
          {
            headers: {
              'x-rapidapi-host': 'api-football.com',
              'x-rapidapi-key': API_KEY,
            },
          }
        );
        setGames(response.data.response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.fixture.id}>
              {game.teams.home.name} vs {game.teams.away.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PremierLeague;
