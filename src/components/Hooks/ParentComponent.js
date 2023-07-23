import React, { useState, useEffect } from 'react';
import MemoComp from './MemoComp';

function ParentComponent() {
    const [state, setState] = useState("");
    // setTimeout(() => {
    //     console.log("hello")
    // }, 3000);
    // setInterval(() => {
    //     setState("Priyabrat Dash")
    // }, 1000);
    console.log("**********************Parent Component Rendered******************8");
    return (
        <div>
            Parent component
            <MemoComp name={state} />
        </div>
    )
}

export default ParentComponent;