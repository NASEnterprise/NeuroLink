class EEGHeadset {
    constructor() {
        this.connected = false;
    }

    connect() {
        return new Promise((resolve, reject) => {
            // Simulate connection to the EEG headset
            setTimeout(() => {
                this.connected = true;
                resolve('Connected to EEG Headset');
            }, 1000);
        });
    }

    getData() {
        return new Promise((resolve, reject) => {
            if (!this.connected) {
                return reject('Not connected to EEG Headset');
            }

            // Simulate real-time brainwave data retrieval
            setInterval(() => {
                const simulatedData = {
                    alpha: Math.random(),
                    beta: Math.random(),
                    theta: Math.random(),
                    delta: Math.random(),
                };
                resolve(simulatedData);
            }, 1000);
        });
    }
}

module.exports = EEGHeadset;