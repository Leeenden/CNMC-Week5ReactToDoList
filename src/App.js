import './App.css';
import { useState } from "react";

const ToDoList = () => {
    const [toDo, setToDo] = useState([])
    const[inputText, setInputText] = useState("")

    const addHandler = () => {
        let itemList = [...toDo]
        itemList.push(inputText)
        setToDo(itemList)
    }
    
    const removeHandler = (index) => {
        let itemList = [...toDo]
        itemList.splice(index, 1)
        setToDo(itemList)
    }

    const inputHandler = (event) =>{
        setInputText(event.target.value)
    }

    return (
        <div>
            <h1> My to do list </h1>
            <input onChange={inputHandler}/>
            <button onClick={addHandler}>add</button>
            <h2>{inputText}</h2>
            {toDo.map((number, index) => {
                return <h2 key={index} onClick={() => removeHandler(index)}>{number}</h2>
            })}
        </div>
    )
}

export default ToDoList
