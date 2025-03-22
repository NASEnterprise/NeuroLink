import React, { useEffect, useRef } from 'react';
import socket from '../utils/WebSocketConnection';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { Midi } from '@tonejs/midi';

const ArtMusicCanvas = ({ mode }) => {
    const canvasRef = useRef(null);
    const midiRef = useRef(new Midi());

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        socket.on('brainwaveData', (data) => {
            if (mode === 'art') {
                // Example: Draw a circle with color based on brainwave data
                ctx.fillStyle = `rgb(${data.rgb_value[0]}, ${data.rgb_value[1]}, ${data.rgb_value[2]})`;
                ctx.beginPath();
                ctx.arc(data.value * 100, data.value * 100, 20, 0, 2 * Math.PI);
                ctx.fill();
            } else if (mode === 'music') {
                // Example: Generate MIDI note based on brainwave data
                const track = midiRef.current.addTrack();
                track.addNote({
                    midi: data.midi_note,
                    time: data.timestamp,
                    duration: 0.5,
                });
            }
        });

        return () => {
            socket.off('brainwaveData');
        };
    }, [mode]);

    const exportArt = () => {
        html2canvas(canvasRef.current).then((canvas) => {
            canvas.toBlob((blob) => {
                saveAs(blob, 'art.png');
            });
        });
    };

    const exportMusic = () => {
        const midiBlob = new Blob([midiRef.current.toArray()], { type: 'audio/midi' });
        saveAs(midiBlob, 'music.mid');
    };

    const exportCode = () => {
        const code = `// Example code based on brainwave data\nconst data = ${JSON.stringify(
            midiRef.current.toJSON()
        )};`;
        const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'code.txt');
    };

    return (
        <div>
            <canvas ref={canvasRef} width={800} height={600} />
            <button onClick={exportArt}>Export Art as PNG</button>
            <button onClick={exportMusic}>Export Music as MIDI</button>
            <button onClick={exportCode}>Export Code as Text</button>
        </div>
    );
};

export default ArtMusicCanvas;