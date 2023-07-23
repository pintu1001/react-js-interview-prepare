import React, { useState, useCallback } from 'react';
import Count from './Count';
import Title from './Title';
import Button from './Button';

function UseCallBack() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const increamentAge = useCallback(() => {
        setAge(age + 1);
    }, [age])
    const increamentSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="age" count={age} />
            <Button handleClick={increamentAge}>Increament Age</Button>
            <Count text="salary" count={salary} />
            <Button handleClick={increamentSalary}>Increament Salary</Button>
        </div>
    )
}

export default UseCallBack;