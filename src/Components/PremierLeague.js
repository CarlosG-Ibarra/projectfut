import React, { useState, useEffect } from "react";
import axios from "axios";

const PremierLeagueMatches = () => {
  const [matches, setMatches] = useState([]);
  const premierLeagueId = 39;
  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://v3.football.api-sports.io/fixtures",
          {
            params: {
              league: premierLeagueId,
              season: "2023",
              date: currentDate,
            },
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "e9b6a6af20f58e25e94742e11685942c",
            },
          }
        );

        setMatches(response.data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [premierLeagueId, currentDate]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Premier League Matches Hoy</h2>
      {matches.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          No Premier League Matches Hoy
        </p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {matches.map((match) => (
            <li
              key={match.fixture.id}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                Match: {match.teams.home.name} vs {match.teams.away.name}
              </p>
              <p style={{ fontSize: "0.9em", color: "#666" }}>
                Time: {match.fixture.date}, Venue: {match.fixture.venue.name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PremierLeagueMatches;
