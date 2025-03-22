const WebSocket = require('ws');
const EEGHeadset = require('./eegHeadset');
const processData = require('./aiModel');
const WebSocketServer = require('./websocketServer');
const { fetchMockData } = require('./utils/mockApi');

const wsServer = new WebSocketServer();
const eegHeadset = new EEGHeadset();

const startServer = async () => {
    await wsServer.start();

    eegHeadset.connect();

    setInterval(async () => {
        const brainwaveData = await fetchMockData();
        const processedData = processData(brainwaveData);
        wsServer.sendData(processedData);
    }, 1000); // Fetch data every second
};

startServer().catch(err => {
    console.error('Error starting the server:', err);
});