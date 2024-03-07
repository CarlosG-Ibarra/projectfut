import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BundesligaMatches = () => {
    const [matches, setMatches] = useState([]);
    const bundesligaId = 78; 
    const currentDate = new Date().toISOString().split('T')[0]; 
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://v3.football.api-sports.io/fixtures', {
                    params: {
                        league: bundesligaId,
                        season: '2023',
                        date: currentDate
                    },
                    headers: {
                        'x-rapidapi-host': 'v3.football.api-sports.io',
                        'x-rapidapi-key': 'e9b6a6af20f58e25e94742e11685942c'
                    }
                });

                setMatches(response.data.response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Bundesliga Matches Today</h2>
            {matches.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No matches today</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {matches.map(match => (
                        <li key={match.fixture.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>
                                {match.teams.home.name} vs {match.teams.away.name}
                            </p>
                            <p style={{ margin: 0 }}>Time: {match.fixture.date}, Venue: {match.fixture.venue.name}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BundesligaMatches;
