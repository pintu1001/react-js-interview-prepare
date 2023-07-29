// 1. call api and list items in a card format
// 2. each page display only 15 items
// 3. add infinite scroll

import { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import "../../App.css"


export default function ExerciseFour() {
    const [allData, setAllData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(15);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                console.log(res);
                setAllData(res.data);
            })
        // fetch("https://jsonplaceholder.typicode.com/todos")
        //     .then((dt) => dt.json())
        //     .then((res) => {
        //         setAllData(res);
        //     })
    }, []);

    window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
            }, 1000)
        }
    })
    return (
        <Fragment>
            <h2>Infinite Scroll Example</h2>
            <div className='parent'>
                {allData.slice(0, (itemPerPage * currentPage)).map((item, i) => (
                    <div className='child'>
                        <h5>{item.title + " -- " + item.id}</h5>
                    </div>
                ))}
            </div>
            {
                currentPage < allData.length / itemPerPage &&
                <div style={{ paddingBottom: "55px", margin: "2px 0px 53px 0px", color: "red", fontWeight: "900" }}>Loading .......</div>
            }
        </Fragment>
    )
}