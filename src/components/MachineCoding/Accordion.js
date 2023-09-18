import React, { useState } from 'react'
const dummyData = [
    {
        title: "Heading 1",
        content:
            "This is the first info.This is the first info.This is the first info"
    },
    {
        title: "Heading 2",
        content:
            "This is the second info.This is the second info.This is the second info"
    },
    {
        title: "Heading 3",
        content:
            "This is the third info.This is the third info.This is the third info"
    },
    {
        title: "Heading 4",
        content:
            "This is the fourth info.This is the fourth info.This is the fourth info"
    },
    {
        title: "Heading 5",
        content:
            "This is the last info.This is the last info.This is the last info"
    }
];
function Accordion() {
    const [theme, setTheme] = useState("light");
    const [id, setId] = React.useState(-1);
    const handleOpen = (i) => {
        if (i === id) {
            setId(-1);
        }
        else {
            setId(i);
        }
    }
    const change = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div className={theme === "light" ? "light" : "dark"}>
            {
                dummyData.map((item, index) => (
                    <>
                        <div className='' style={{ border: "1px solid", width: "50%", margin: "0 auto" }}>{item.title} <span onClick={() => handleOpen(index)} className='spanArr'>{id === index ? "-" : '+'}</span></div>
                        <div className={id === index ? 'block' : 'none'} style={{ border: "1px solid", width: "50%", margin: "0 auto" }}>
                            <p>{item.content}</p>
                            <p>{item.content}</p>
                            <p>{item.content}</p>
                        </div>
                    </>
                ))
            }
            <button onClick={change}>{theme === "light" ? "dark" : "light"}</button>
            {/* <div className='' style={{ border: "1px solid", width: "50%", margin: "0 auto" }}>Heading One <span onClick={handleOpen} className='spanArr'>+</span></div> */}
        </div >
    )
}

export default Accordion