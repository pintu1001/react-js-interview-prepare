import { useState, useEffect } from 'react';

let interval;
export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const [running, setRunning] = useState(true);
    useEffect(() => {
        if (running) {
            interval = setInterval(() => {
                setProgress(prev => prev + 1);
            }, 100)
        }
        else {
            clearInterval(interval);
        }
    }, [running])
    useEffect(() => {
        if (progress === 100) {
            setRunning(false);
        }
    }, [progress])

    return (
        <div>
            <h2>Progress Bar</h2>
            <div className='progressbar'>
                <div className='progressbarFill' style={{ width: `${progress}%` }}>{progress}%</div>
            </div>
        </div>
    )
}