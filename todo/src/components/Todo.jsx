import React, { useState } from 'react'

function Todo() {
    const [newtodo, setNewTodo] = useState("")
    const [todo, setTodo] = useState([])
    const addTodo = (e) => {

    }
    const deleteTodo = (index) => {

    }
    return (
        <div className='flex flex-col items-center'>
            <h1>Todo-Project</h1>
            <div className="w-full max-w-xs px-auto my-5">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-2 w-full max-w-xs">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Add Question

                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your question" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Add
                    </button>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>


        </div>
    )
}

export default Todo