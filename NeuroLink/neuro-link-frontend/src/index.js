import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';

ReactDOM.render(<App />, document.getElementById('root'));

const express = require('express');
const http = require('http');
const startWebSocketServer = require('./websocketServer');
const { processBrainwaveData } = require('./aiModel');
const { getMockBrainwaveData } = require('./utils/mockApi');

const app = express();
const server = http.createServer(app);
const wss = startWebSocketServer(server);

app.get('/', (req, res) => {
    res.send('NeuroLink Backend is running');
});

wss.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    // Mock real-time brainwave data
    setInterval(() => {
        const brainwaveData = getMockBrainwaveData();
        const processedData = processBrainwaveData(brainwaveData);
        socket.send(JSON.stringify(processedData));
    }, 1000);
});

server.listen(4000, () => console.log('Listening on port 4000'));