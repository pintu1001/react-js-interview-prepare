import React from 'react'

export default function Stopwatch() {
    const [time, setTime] = React.useState(0);
    const [running, setRunning] = React.useState(false);

    const timer = React.useRef();

    React.useEffect(() => {
        if (running) {
            timer.current = setInterval(() => {
                setTime(pre => pre + 1);
            }, 1000)
        }
    }, [running])
    return (
        <div className='stopwatch'>
            <p>{format(time)}</p>
            <div>
                <button onClick={() => {
                    setTime(0);
                    setRunning(false);
                    clearInterval(timer.current);
                }}>Reset</button>
                <button
                    onClick={() => {
                        if (running) {
                            clearInterval(timer.current);
                        }
                        setRunning(!running);
                    }}>
                    {running ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    )
}

const format = (time) => {
    let hours = Math.floor(time / 60 / 60 % 24);
    let minutes = Math.floor(time / 60 % 60);
    let seconds = Math.floor(time % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}