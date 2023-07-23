import React, { useEffect, createRef } from 'react';

function RefsDemo() {
    const inputRef = createRef();
    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, [inputRef])
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}
export default RefsDemo;