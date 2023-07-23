import React from 'react';
import Hoc from './Hoc';

function ComponentB(props) {
    const { increment, count, name } = props;
    return (
        <div>
            <button onMouseOver={increment}>{name} {count} click</button>
        </div>
    )
}

export default Hoc(ComponentB);