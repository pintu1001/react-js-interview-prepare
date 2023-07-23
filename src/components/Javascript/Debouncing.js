import React, { useState } from 'react';

function Debouncing() {

    function MyDebounce() {
        let timer;
        return function () {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                console.log("Getting data from server");
            }, 1000)
        }
    }
    const handleChange = MyDebounce();

    function Throttling(fn) {
        return function () {
            document.getElementById("btn").disabled = true;
            setTimeout(() => {
                fn();
            }, 2000);
        }
    }

    const saveMe = Throttling(() => {
        document.getElementById("btn").disabled = false;
        console.log("button clicked !!!");
    });
    return (
        <div>
            <input type='text' onChange={handleChange} />
            <button id="btn" onClick={() => saveMe()}>Submit</button>
        </div>
    )
}
export default Debouncing;