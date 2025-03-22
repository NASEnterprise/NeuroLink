const WebSocket = require('ws');

function startWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('New client connected');

        ws.on('message', (message) => {
            console.log('Received:', message);
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });

    return wss;
}

module.exports = startWebSocketServer;