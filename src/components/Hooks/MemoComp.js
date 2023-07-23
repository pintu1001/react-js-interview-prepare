import React,{memo} from 'react';


function MemoComp({name}){

console.log("Memo Component Rendered");
    return(
        <h2>
            {name}
        </h2>
    )
}

export default memo(MemoComp) ;