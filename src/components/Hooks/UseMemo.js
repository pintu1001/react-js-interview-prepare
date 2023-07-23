import React, { useState, useMemo } from 'react';

function UseMemo() {
    const [counterone, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const increamentOne = () => {
        setCounterOne(counterone + 1);
    }
    const increamentTwo = () => {
        setCounterTwo(counterTwo + 1);
    }
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++;
        return counterone % 2 === 0
    }, [counterone])
    return (
        <div>
            <div>
                <button onClick={() => increamentOne()}>Counter one - {counterone}</button>
                <span>{isEven ? "even" : "odd"}</span>
            </div>
            <div>
                <button onClick={() => increamentTwo()}>Counter Two -{counterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemo;