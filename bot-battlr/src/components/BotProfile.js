import React from 'react';
import './BotProfile.css';

function BotProfile({ bot }) {
    return (
        <div className="bot-container2">
            <div className="bot-profile">
                <div>
                    <strong>Id:</strong> {bot.id}
                </div>
                <div>
                    <strong>Name:</strong> {bot.name}
                </div>
                <div>
                    <strong>Health:</strong> {bot.health}
                </div>
                <div>
                    <strong>Damage:</strong> {bot.damage}
                </div>
                <div>
                    <strong>Armor:</strong> {bot.armor}
                </div>
                <div>
                    <strong>Bot Class:</strong> {bot.bot_class}
                </div>
                <div>
                    <strong>Catchphrase:</strong> {bot.catchphrase}
                </div>
                <div>
                    <strong>Avatar:</strong> <img src={bot.avatar_url} alt="Bot Avatar" />
                </div>
                <div>
                    <strong>Created at:</strong> {bot.created_at}
                </div>
                <div>
                    <strong>Updated at:</strong> {bot.updated_at}
                </div>
            </div>
        </div>
    );
}

export default BotProfile;
