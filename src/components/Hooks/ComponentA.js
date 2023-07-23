import React from 'react';
import Hoc from './Hoc';

function ComponentA(props) {
    const { increment, count, name } = props;
    return (
        <div>
            <button onClick={increment}>{name} {count} click</button>
        </div>
    )
}

export default Hoc(ComponentA);