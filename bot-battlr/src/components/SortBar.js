import React, { useState } from 'react';

function SortBar({ sortBots, filterBotsByClass }) {
    const [selectedClass, setSelectedClass] = useState('');

    const handleSort = (criteria) => {
        sortBots(criteria);
    };

    const handleClassChange = (event) => {
        const selectedClass = event.target.value;
        setSelectedClass(selectedClass);
        filterBotsByClass(selectedClass);
    };

    return (
        <div className="sort-bar">
            <button onClick={() => handleSort('armor')} className="t-button">Sort the bots by Armor</button>
            <label className="t-button">Filter by Class:</label>
            <select id="classFilter" value={selectedClass} onChange={handleClassChange}>
                <option value="">All</option>
                <option value="Assault">Assault</option>
                <option value="Support">Support</option>
                <option value="Sniper">Medic</option>
                <option value="Sniper">Defender</option>
                <option value="Sniper">Captain</option>
                <option value="Sniper">Witch</option>
            </select>
        </div>
    );
}

export default SortBar;
