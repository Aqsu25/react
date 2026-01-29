import React, { useState } from 'react'

function Todo() {
    const [newtodo, setNewTodo] = useState("")
    const [todo, setTodo] = useState([])
    const addTodo = (e) => {
        e.preventDefault();
        if (newtodo) {
            setTodo([...todo, { text: newtodo, completed: false }])
            setNewTodo('')
        }


    }
    const deleteTodo = (index) => {

        const deleteTodo = ([...todo])
        deleteTodo[index].completed = !deleteTodo[index].completed
        setTodo(deleteTodo)
    }
    return (
        <div className='min-h-screen'>
            <h1 className='text-teal-500'>Todo-Project</h1>
            <div className="flex justify-center items-center mb-0 pb-0">
                <form className="bg-white shadow-md rounded px-8 pt-6" onSubmit={addTodo}>
                    <label className="block text-teal-500 text-sm font-bold mb-2">
                        Add Question

                    </label>
                    <div className="mb-4 flex items-center border-b border-teal-500 py-2">
                        <input value={newtodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            className="border bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id="username" type="text" placeholder="Enter your question" />
                        <button className="flex-shrink-0 border-transparent bg-gray-100 border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="submit">
                            Add
                        </button>
                    </div>
                </form>
            </div>
            {
                todo.map((list, index) => (
                    <ul className='text-black text-sm font-bold mb-2 mt-5 bt-0 flex items-center justify-center'>
                        <div>
                            <li key={index}>
                                <span style={{ textDecoration: todo.completed ? 'line - through' : 'no - underline' }}>
                                    {list.text}
                                </span>
                            </li>
                            <button className='bg-red-500 inline text-white py-2 px-3 rounded mx-2' onClick={() => deleteTodo(index)}>Delete</button>
                        </div>
                    </ul>
                ))

            }

        </div>
    )
}

export default Todo