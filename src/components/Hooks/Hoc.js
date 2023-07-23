import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
    function Hoc(props) {
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + 1);
        }
        return <OriginalComponent increment={increment} count={count} {...props} />
    }
    return Hoc;
}
export default UpdatedComponent;