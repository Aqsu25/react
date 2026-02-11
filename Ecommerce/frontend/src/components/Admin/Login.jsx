import React, { useContext } from 'react'
import Layout from '../common/Layout'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { apiUrl } from '../common/Http';
import { toast } from 'react-toastify';
import { AdminAuthContext } from '../context/AdminAuth';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AdminAuthContext);
    const navigate = useNavigate()

    const onHandleSubmit = async (data) => {
        console.log('why')
        console.log(data);
        const res = await fetch(`${apiUrl}/admin/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"

            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
              
                console.log("API Result:", result);
                console.log("Token:", result.token);
                if (result.status == 200) {

                    const adminInfo = {

                        token: result.token,
                        name: result.user.name,
                    }
                    localStorage.setItem("adminInfo", JSON.stringify(adminInfo))
                    login(adminInfo)
                    navigate('/admin/dashboard')
                } else {
                    toast.error(result.message)
                }
            })
    }
    return (
        <Layout>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 w-96 rounded-lg my-6 container mx-auto">
                    <div className="relative items-center flex justify-center text-[#007595] h-24 rounded-md">
                        <h3 className="text-2xl">
                            Admin Login
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4 p-6 pt-0">
                        <div className="w-full max-w-sm min-w-50">
                            <label className="block mb-2 text-sm text-slate-600">
                                Email
                            </label>
                            <input
                                {
                                ...register("email",
                                    {
                                        required: "The email field is required.",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address."
                                        }
                                    })}

                                type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>


                        <div className="w-full max-w-sm min-w-50">
                            <label className="block mb-2 text-sm text-slate-600">
                                Password
                            </label>
                            <input
                                {
                                ...register("password",
                                    {
                                        required: "The password is required.",
                                        // pattern: {
                                        //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
                                        //     ,
                                        //     message: "Password must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 number."
                                        // }
                                    }
                                )
                                }
                                type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        </div>

                        <div className="inline-flex items-center mt-2">
                            <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                                <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
                                <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">
                                Remember Me
                            </label>
                        </div>
                        <div className="p-6 pt-0">
                            <button className="w-full rounded-md bg-[#007595] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">
                                Sign In
                            </button>
                            <p className="flex justify-center mt-6 text-sm text-slate-600">
                                Don&apos;t have an account?
                                <Link to="#signup" className="ml-1 text-sm font-semibold text-[#007595] underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </Layout >
    )
}

export default Login