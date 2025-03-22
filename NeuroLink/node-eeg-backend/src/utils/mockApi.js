const fetchMockData = () => {
    return new Promise((resolve) => {
        // Simulate brainwave data
        const mockData = {
            delta: Math.random(),
            theta: Math.random(),
            alpha: Math.random(),
            beta: Math.random(),
            gamma: Math.random(),
        };
        resolve(mockData);
    });
};

module.exports = { fetchMockData };