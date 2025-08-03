import React, { useState, useEffect, useRef } from 'react';
import Counter from "./Counter";


//create your first component
const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(true);
    const [countdown, setCountdown] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const intervalRef = useRef(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev =>
                    countdown
                        ? (prev > 0 ? prev - 1 : 0)
                        : prev + 1
                );
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [running, countdown]);

    const handleStop = () => setRunning(false);
    const handleResume = () => setRunning(true);
    const handleReset = () => {
        setSeconds(0);
        setRunning(false);
        setCountdown(false);
        setInputValue('');
    };

    const handleCountdownStart = () => {
        const num = parseInt(inputValue, 10);
        if (!isNaN(num) && num > 0) {
            setSeconds(num);
            setCountdown(true);
            setRunning(true);
        }
    };

    return (
        <div className="text-center">
            <Counter seconds={seconds} />
            <div>
                <button onClick={handleStop} disabled={!running}>Stop</button>
                <button onClick={handleResume} disabled={running}>Resume</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <input
                    type="number"
                    min="1"
                    placeholder="Countdown from..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    disabled={running && countdown}
                />
                <button
                    onClick={handleCountdownStart}
                    disabled={running && countdown || !inputValue}
                >
                    Start Countdown
                </button>
            </div>
        </div>
    );
};

export default Home;
