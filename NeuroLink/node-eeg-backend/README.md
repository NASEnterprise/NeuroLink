# Node EEG Backend

This project is a Node.js application that connects to a mock EEG headset, processes brainwave data in real-time using a pre-trained AI model with TensorFlow.js, and sends the processed data to the frontend via WebSocket.

## Project Structure

```
node-eeg-backend
├── src
│   ├── index.js          # Entry point of the application
│   ├── eegHeadset.js     # Simulates connection to an EEG headset
│   ├── aiModel.js        # Processes brainwave data using TensorFlow.js
│   ├── websocketServer.js # Sets up the WebSocket server
│   └── utils
│       └── mockApi.js    # Simulates fetching brainwave data from a mock API
├── package.json           # npm configuration file
├── .env                   # Environment variables for configuration
└── README.md              # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/node-eeg-backend.git
   cd node-eeg-backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and configure the necessary environment variables.

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The WebSocket server will be running and ready to accept connections. You can connect to it using a WebSocket client.

## Features

- Simulated EEG headset connection
- Real-time brainwave data processing
- WebSocket communication for sending processed data to clients
- Utilizes TensorFlow.js for AI model processing

## Notes

- This project currently uses a mock API for EEG data. In a real-world scenario, you would replace the mock API with actual EEG headset integration.
- Ensure that you have Node.js installed on your machine to run this application.

## License

This project is licensed under the MIT License.