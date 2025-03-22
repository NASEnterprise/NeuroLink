import React from 'react';
import LiveDemo from './LiveDemo';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <h1>NeuroLink</h1>
                <p>Connecting your brainwaves to creativity.</p>
            </header>
            <section className="description">
                <h2>About NeuroLink</h2>
                <p>
                    NeuroLink is a cutting-edge platform that transforms your brainwave data into creative outputs such as music, art, and code. Experience the future of creativity by connecting your EEG headset and exploring the endless possibilities.
                </p>
            </section>
            <section className="live-demo">
                <h2>Live Demo</h2>
                <LiveDemo />
            </section>
            <section className="download-links">
                <h2>Download NeuroLink</h2>
                <p>Get the NeuroLink app for your device:</p>
                <a href="/downloads/neuro-link-windows.exe" className="download-button">Download for Windows</a>
                <a href="/downloads/neuro-link-mac.dmg" className="download-button">Download for Mac</a>
                <a href="/downloads/neuro-link-linux.AppImage" className="download-button">Download for Linux</a>
            </section>
        </div>
    );
};

export default LandingPage;