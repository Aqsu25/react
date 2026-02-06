import React from 'react'
import Layout from '../../common/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Checkout() {
    return (
        <Layout>
            <div>

                <div className="flex flex-col md:flex-row container mx-auto my-5 ">
                    <div className='my-5 container'>
                        <h2 className='text-2xl py-5'>Billing Details</h2>
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Email
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="aqsa@gmail.com" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Mobile
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="123456778" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        City
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        State
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                        Zip
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className='my-5 container'>
                        <h2 className='text-2xl py-5'>Items</h2>
                        <table className="w-full text-sm text-left rtl:text-right text-body mb-6">

                            <tbody>
                                <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                    <td className="p-4 flex">
                                        <img src="https://images.pexels.com/photos/27835299/pexels-photo-27835299.jpeg" className="w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch" />
                                        <div className='ps-5'>
                                            <h3 className='px-3 text-2xl mb-5'>Bags</h3>
                                            <div className='flex justify-between gap-8 px-3'>
                                                <span className='mt-3 text-sm'>$10</span>
                                                <button type="button" className="rounded-sm w-12 h-11 cursor-pointer hover:bg-gray-200 bg-[#007595] text-white text-sm flex items-center justify-center shrink-0">S</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end me-5 my-4'>
                    <div className='p-5 shadow-2xl rounded-sm'>
                        <div className="flex justify-between gap-5 py-2">
                            <div>Subtotal</div>
                            <div>$10</div>
                        </div>
                        <div className="flex justify-between gap-5 py-2">
                            <div>Shipping</div>
                            <div>$10</div>
                        </div>
                        <div className="flex justify-between gap-5 py-2">
                            <div className='font-bold'>Grand Total</div>
                            <div>$10</div>
                        </div>
                        <div className='font-bold'>Payment Method</div>
                        <div className="flex justify-items gap-5 mt-4">
                            <div className='flex'>
                                <input type="radio" className='mr-2
                                appearance-none w-5 h-5 border-2 border-gray-400 rounded-full bg-white checked:bg-[#007595] checked:border-[#007595] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 peer' />
                                <label htmlFor="" className='pe-4'>Stripe</label>
                            </div>
                            <div className='flex'>
                                <input type="radio" className='mr-2
                                appearance-none w-5 h-5 border-2 border-gray-400 rounded-full bg-white checked:bg-[#007595] checked:border-[#007595] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 peer' />
                                <label htmlFor="" className='pe-4'>COD</label>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5 py-2">
                            <button className="bg-[#007595] mt-3 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded inline-flex items-center">
                                <FontAwesomeIcon icon={faShoppingCart} className='
                                                                pe-2' />
                                <span>Proceed To Checkout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>

    )
}

export default Checkout