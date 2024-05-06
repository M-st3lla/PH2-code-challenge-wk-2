import React from 'react';
import BotProfile from '../components/BotProfile';
import './BotCollection.css';

function BotCollection({ bots, addToArmy, deleteBot }) {
    const handleAddToArmy = (bot) => {
        addToArmy(bot);
    };

    const handleDeleteBot = (bot) => {
        deleteBot(bot);
    };

    return (
        <div className="bot-collection">
            {bots.length > 0 ? (
                <div className="bot-container">
                    {bots.map((bot) => (
                        <div key={bot.id} className="bot-item">
                            <BotProfile bot={bot} />
                            <button className="t-button" onClick={() => handleAddToArmy(bot)}>Enlist</button>
                            <button className="delete-button" onClick={() => handleDeleteBot(bot)}>X</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No bots available</p>
            )}
        </div>
    );
}

export default BotCollection;
