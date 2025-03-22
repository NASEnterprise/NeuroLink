import React from 'react';

const ModeButtons = ({ setMode }) => {
    return (
        <div>
            <button onClick={() => setMode('music')}>Music Mode</button>
            <button onClick={() => setMode('art')}>Art Mode</button>
            <button onClick={() => setMode('code')}>Code Mode</button>
        </div>
    );
};

export default ModeButtons;