import { useState } from 'react';

export default function ControlPanel() {
    const [responseMessage, setResponseMessage] = useState('');

    const handlePlayGroup = async () => {
        const response = await fetch('/api/audioInterface', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip: '127.0.0.1', group_id: '0' }),
        });
        const message = await response.text();
        setResponseMessage(message);
    };

    const handlePlayFx = async () => {
        const response = await fetch('/api/audioInterface', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip: '127.0.0.1', fx_id: '0' }),
        });
        const message = await response.text();
        setResponseMessage(message);
    };

    return (
        <div>
            <h3>SoftwareAusTon</h3>
            <button onClick={handlePlayGroup}>Play Group</button>
            <button onClick={handlePlayFx}>Play Fx</button>
            <div>Response: {responseMessage}</div>
        </div>
    );
}
