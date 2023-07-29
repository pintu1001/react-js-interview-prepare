// 1. create a form with button
// 2. on button click post request to api and get data in response



import { useState } from "react";

export default function App() {
    const [data, setData] = useState({});
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (dt) => {
        // axios
        //   .post("https://jsonplaceholder.typicode.com/posts", {
        //     data
        //   })
        //   .then((res) => console.log(res.data.data));
        fetch("https://jsonplaceholder.typicode.com/posts/", {
            method: "POST",
            body: JSON.stringify(dt),
            headers: {
                "content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    return (
        <div className="App">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(data);
                }}
            >
                <input type="text" name="firstName" onChange={handleChange} />
                <br></br>
                <input type="text" name="lastName" onChange={handleChange} />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
