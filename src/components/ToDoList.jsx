import React from 'react'

const ToDoList = () => {
    
    const [todo, setTodo] = React.useState([])
    const [text, setText] = React.useState("")

    function getValue (e) {
        setText(e.target.value)
    }

    function submit () {
        if (text.trim()) {
            setTodo([...todo, text.trim()])
            setText('')
          }
    }

  return (
    <>
        <input type='text' value={text} onChange={getValue}/>
        <button onClick={submit}>ADD LIST</button>
        <ul>
            {todo.map((todos) => (
                <li>{todos}</li>
            ))}
        </ul>
    </>
  )
}

export default ToDoList