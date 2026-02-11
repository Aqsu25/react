import React, { useState } from 'react'
import Sample from '../../common/Sample'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { adminToken, apiUrl } from '../../common/Http';
import { useNavigate } from 'react-router';

function ProductCreate() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()

    const saveProduct = async (data) => {
        try {
            setDisable(true)
            console.log(data)
            const res = await fetch(`${apiUrl}/admin/brands`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    "Authorization": `Bearer ${adminToken()}`

                },
                body: JSON.stringify(data)
            })
            setDisable(false)
            const result = await res.json();
            console.log("API Show Result:", result.data);
            if (result.status == 200) {
                toast.success(result.message)
                navigate('/admin/brands')
            }
        }
        catch (error) {
            console.error("Fetch error:", error);
            toast.error("Something Went Wrong!")
        }
    }

    return (
        <>
            <Sample title='Product/Create' btnText='Back' to='/products'>

                <form onSubmit={handleSubmit(saveProduct)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Title
                            </label>
                            <input
                                {
                                ...register("title",
                                    {
                                        required: "The title field is required.",
                                    })}
                                className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Qty
                            </label>
                            <input
                                {
                                ...register("qty",
                                    {
                                        required: "The quantity field is required.",
                                    })}
                                className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
                        </div>
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Price
                            </label>
                            <input
                                {
                                ...register("price",
                                    {
                                        required: "The price field is required.",
                                    })}
                                className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                        </div>
                    </div>
                    {/* dropdown
 */}
                    <div className="flex flex-wrap -mx-3 mb-2">

                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-state">
                                Category
                            </label>

                            <div className="relative">
                                <select
                                    {
                                    ...register("category_id",
                                        {
                                            required: "Please Choose Atleast One Option.",
                                        })}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="">Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                </select>
                                {errors.category_id && <p className="text-red-500 text-sm">{errors.category_id.message}</p>}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-state">
                                Brand
                            </label>

                            <div className="relative">
                                <select
                                    {
                                    ...register("brand_id",
                                        {
                                            required: "Please Choose Atleast One Option.",
                                        })}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="">Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                </select>
                                {errors.brand_id && <p className="text-red-500 text-sm">{errors.brand_id.message}</p>}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* status */}
                    <div className="flex flex-wrap -mx-3 mb-2">

                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="grid-state">
                                Status
                            </label>

                            <div className="relative">
                                <select
                                    {
                                    ...register("status",
                                        {
                                            required: "Please Choose Atleast One Option.",
                                        })}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="">Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                </select>
                                {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className='rounded-md bg-[#007595] py-2 px-6 mt-2 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                    >Submit</button>
                </form>
            </Sample>
        </>
    )
}

export default ProductCreate