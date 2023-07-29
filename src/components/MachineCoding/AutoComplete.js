// 1. create a autocomplete input field in react


import { useState, useEffect } from 'react';

export default function ExerciseOne() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((res) => res.json())
            .then((resp) => {
                setData(resp);
            });
    }, [])
    const onSearch = (d) => {
        setValue(d)
    }

    return (
        <div>
            <h2>Search</h2>
            <input type="text" value={value} onChange={onChange} autoFocus={true} />
            <button onClick={() => onSearch(value)}>Add</button>
            <div className='dropdown'>
                {data.filter(item => {
                    const searchTerm = value.toLocaleLowerCase();
                    const title = item.title.toLocaleLowerCase();
                    return searchTerm && title.startsWith(searchTerm) && title !== searchTerm
                }).map((item) => (
                    <div onClick={() => onSearch(item.title)}>{item.title}</div>
                ))}
            </div>
        </div>
    )
}