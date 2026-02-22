import React from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/Cart';

function Cart() {
        const { cartData,shipping,subTotal,grandTotal } = useContext(CartContext);

    return (
        <Layout>
            <div className='container mx-auto px-2 md:px-4 py-2'>
                <nav aria-label="breadcrumb" className="w-max my-4">
                    <ol className="flex flex-wrap items-center rounded-md px-4 py-2">
                        <li className="flex items-center text-sm text-slate-500 hover:text-[#007595]">
                            <Link to="/" className='text-black hover:text-[#007595]'>Home</Link>
                            <span className="pointer-events-none mx-2 text-gray-400">/</span>
                        </li>
                        <li className="flex items-center text-sm text-slate-500 hover:text-[#007595]">
                            Cart
                        </li>
                    </ol>
                </nav>
                <div className='mb-6'>
                    <h2 className='text-4xl ps-3 mb-4'>Cart</h2>
                    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base mb-6">
                        <table className="w-full text-sm text-left rtl:text-right text-body mb-6">
                            <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                                <tr>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Qty
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData && cartData.map(item=>
             <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                    <td className="p-4">
                                        <img src=`${item.image_url}` className="w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-heading">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <form className="max-w-xs mx-auto">
                                            <label htmlFor="counter-input-1" className="sr-only">Choose quantity:</label>
                                            <div className="relative flex items-center">
                                                <button type="button" id="decrement-button-1" data-input-counter-decrement="counter-input-1" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                                    <svg className="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" /></svg>
                                                </button>
                                                <input type="text" id="counter-input-1" data-input-counter className="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
                                                <button type="button" id="increment-button-1" data-input-counter-increment="counter-input-1" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                                    <svg className="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" /></svg>
                                                </button>
                                            </div>
                                        </form>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-heading">
                                        ${item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href="#" className="font-medium text-fg-danger hover:underline">
                                            <FontAwesomeIcon icon={faTrashCan} className='text-red-500 text-3xl' />

                                        </Link>
                                    </td>
                                </tr>
            )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='flex justify-end me-5 my-4'>
                    <div className='p-5 shadow-2xl rounded-sm'>
                        <div className="flex justify-between gap-5 py-2">
                            <div>Subtotal</div>
                            <div>${subTotal()}</div>
                        </div>
                        <div className="flex justify-between gap-5 py-2">
                            <div>Shipping</div>
                            <div>${shipping()}</div>
                        </div>
                        <div className="flex justify-between gap-5 py-2">
                            <div className='font-bold'>Grand Total</div>
                            <div>${grandTotal()}</div>
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
        </Layout>)
}

export default Cart
