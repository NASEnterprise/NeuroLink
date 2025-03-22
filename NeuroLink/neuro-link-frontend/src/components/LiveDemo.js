import React, { useState } from 'react';
import BrainwaveChart from './BrainwaveChart';
import ModeButtons from './ModeButtons';
import ArtMusicCanvas from './ArtMusicCanvas';
import './LiveDemo.css';

const LiveDemo = () => {
    const [mode, setMode] = useState('art');

    return (
        <div className="live-demo">
            <BrainwaveChart />
            <ModeButtons setMode={setMode} />
            <ArtMusicCanvas mode={mode} />
        </div>
    );
};

export default LiveDemo;