// 1. get data from api 
// 2. list them is ascending order


import { useState, useEffect } from 'react';


export default function ExerciseTwo() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((resp) => {
                setData(resp);
            });
    }, [])

    const getAscData = (arr) => {
        return arr.sort((a, b) => {
            let first = a.title.toLowerCase();
            let second = b.title.toLowerCase();
            let count = 0;
            if (first > second) {
                count = 1;
            }
            else {
                count = -1
            }
            return count;
        })
    }

    return (
        <div>
            <h1>Data in ascending order</h1>
            <ul>
                {getAscData(data).map(res => (
                    <li style={{ listStyle: "none" }}>{res.title}</li>
                ))}
            </ul>
        </div>
    )
}