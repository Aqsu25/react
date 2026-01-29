import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username, setUserName] = useState("")
    const [userpassword, setPassword] = useState("")
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            username, userpassword
        })
    }
    return (
        <div className="max-w-xs mx-auto">
            <form onClick={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userpassword">
                        Password
                    </label>
                    <input
                        value={userpassword}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="userpassword" type="userpassword" placeholder="******************" />
                    <p className="text-red-500 text-xs italic">Please choose a userpassword.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>

                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    )
}

export default Login