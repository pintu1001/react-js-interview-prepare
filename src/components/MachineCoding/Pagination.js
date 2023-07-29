// 1. call api and list items in a card format
// 2. each page display only 10 items
// 3. add pagination for rest items

import { useState, useEffect, Fragment } from 'react';
import "../../App.css";


export default function ExerciseThree() {
    const [allData, setAllData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(9);
    const [totalPages, setTotalPages] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((dt) => dt.json())
            .then((res) => {
                setAllData(res);
                let data = [];
                for (let i = 0; i < res.length / 9; i++) {
                    data.push(i);
                }
                setTotalPages(data);
            })
    }, []);

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
    return (
        <Fragment>
            <h2>Pagination Example</h2>
            <div className='parent'>
                {allData.slice(((currentPage * itemPerPage) - itemPerPage), (itemPerPage * currentPage)).map((item, i) => (
                    <div className='child'>
                        <h5>{item.title + " -- " + item.id}</h5>
                    </div>
                ))}
            </div>
            <div>
                <button disabled={currentPage === 1} onClick={() => handlePrevious()}>Previous</button>
                {totalPages.map(res => (
                    <button className={currentPage === res + 1 ? "active" : ""} style={{ margin: "2px" }} onClick={() => setCurrentPage(res + 1)}>{res + 1}</button>
                ))}
                <button disabled={currentPage === totalPages.length} onClick={() => handleNext()}>Next</button>
            </div>
        </Fragment>

    )
}