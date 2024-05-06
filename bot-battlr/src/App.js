import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [error, setError] = useState(null);
  const [botArmy, setBotArmy] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response format: not JSON');
        }
        const jsonData = await response.json();
        setBots(jsonData.bots);
        setFilteredBots(jsonData.bots);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data: ' + error.message);
      }
    };

    fetchData();
  }, []);

  const removeBotFromArmy = (botToRemove) => {
    setBotArmy((prevBotArmy) => prevBotArmy.filter((bot) => bot.id !== botToRemove.id));
  };

  const addToArmy = (bot) => {
    if (!botArmy.some((b) => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const deleteBot = async (botToDelete) => {
    try {
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  const sortBots = (criteria) => {
  };

  const filterBotsByClass = (selectedClass) => {
    if (selectedClass === '') {
      setFilteredBots(bots);
    } else {
      const filtered = bots.filter((bot) => bot.bot_class === selectedClass);
      setFilteredBots(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Bot Battlr. Click on a bot to add it to 'Your Bot Army'.</h1>
      <YourBotArmy b={botArmy} removeBot={removeBotFromArmy} /><br />
      <SortBar sortBots={sortBots} filterBotsByClass={filterBotsByClass} />
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <BotCollection bots={filteredBots} addToArmy={addToArmy} deleteBot={deleteBot} />
      )}
    </div>
  );
}

export default App;
