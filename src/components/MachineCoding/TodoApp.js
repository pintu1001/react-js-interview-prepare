import React, { useState, Fragment, useEffect } from 'react';
import "../../App.css";

function TodoApp() {
    const [input, setInput] = useState("");
    const [editId, setEditId] = useState("");
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo-lists")));
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const addToList = () => {
        if (!editId) {
            setTodoList([...todoList, { id: todoList.length + 1, title: input }]);
            setInput("");
        }
        else {
            updateList(input, editId);
            setInput("");
        }
    }
    const updateList = (title, id) => {
        const newTodo = todoList.map((todo) => {
            return todo.id === id ? { id: id, title: title } : todo
        })
        setTodoList(newTodo);
        setEditId("");
    }
    const editTodo = (data) => {
        setInput(data.title);
        setEditId(data.id);
    }
    const deleteTodo = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    }
    useEffect(() => {
        localStorage.setItem("todo-lists", JSON.stringify(todoList));
    }, [todoList])
    return (
        <Fragment>
            <div>
                <input type="text" value={input} onChange={handleChange} />
                <button type='submit' onClick={() => addToList()}>Add</button>
            </div>
            <div className='todoDiv'>
                {todoList.map((list) => (
                    <div className='card' key={list.id}>
                        <span>{list.title}</span>
                        <button onClick={() => deleteTodo(list.id)} style={{ float: "right" }}>Delete</button>
                        <button onClick={() => editTodo(list)} style={{ float: "right", marginRight: "5px" }}>Edit</button>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default TodoApp