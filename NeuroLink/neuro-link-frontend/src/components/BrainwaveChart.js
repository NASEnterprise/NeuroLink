import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import socket from '../utils/WebSocketConnection';

const BrainwaveChart = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Brainwave Data',
                data: [],
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
        ],
    });

    useEffect(() => {
        socket.on('brainwaveData', (newData) => {
            setData((prevData) => ({
                labels: [...prevData.labels, newData.timestamp],
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: [...prevData.datasets[0].data, newData.value],
                    },
                ],
            }));
        });

        return () => {
            socket.off('brainwaveData');
        };
    }, []);

    return <Line data={data} />;
};

export default BrainwaveChart;