import React from 'react';
import './YourBotArmy.css';
import BotProfile from '../components/BotProfile';

function YourBotArmy({ b, removeBot }) {
    const handleClick = (bot) => {
        removeBot(bot);
    };

    return (
        <div className="your-bot-army">
            <h2>Your Bot Army</h2>
            <div className="bot-container3">
                {b.map((bot) => (
                    <div key={bot.id} className="bot-item3" onClick={() => handleClick(bot)}>
                        <BotProfile bot={bot} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YourBotArmy;
