import React from 'react'
import Layout from '../common/Layout'

function Product2() {
    const img = [
        { id: 1, img: "https://readymadeui.com/images/product6.webp" },
        { id: 2, img: "https://readymadeui.com/images/product5.webp" },
        { id: 3, img: "https://readymadeui.com/images/product2.webp" },
        { id: 4, img: "https://readymadeui.com/images/product1.webp" },
    ]

    return (
        <Layout>
            <div className="p-4 my-5">
                <div className="xl:max-w-screen-xl lg:max-w-screen-lg max-w-xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
                        <div className="w-full lg:sticky top-0 lg:col-span-3">
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-col gap-2 w-16 max-sm:w-10 shrink-0">
                                    {img.map((image) => (
                                        <img key={image.id} src={image.img} alt="Product1" className="aspect-[64/85] object-cover object-top w-full cursor-pointer border-b-2 border-black" />
                                    ))
                                    }

                                </div>
                                <div className="flex-1">
                                    <img src="https://readymadeui.com/images/product6.webp" alt="Product" className="w-full aspect-[750/800] object-top object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:col-span-2">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Adjective Attire | T-shirt</h3>
                                <div className="flex items-center space-x-1 mt-2">
                                    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 h-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>

                                    <p className="text-sm text-slate-900 !ml-3">4.0 (150)</p>
                                </div>

                                <div className="flex items-center flex-wrap gap-4 mt-6">
                                    <h4 className="text-slate-900 text-2xl font-bold">$17</h4>
                                    <p className="text-slate-500 text-lg"><strike>$22</strike> <span className="text-sm ml-1.5">Tax included</span></p>
                                </div>
                            </div>

                            <hr className="my-6 border-gray-300" />

                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Sizes</h3>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <button type="button" className="w-10 h-9 cursor-pointer border border-gray-300 hover:border-[#007595] text-slate-900 text-sm flex items-center justify-center shrink-0">SM</button>
                                    <button type="button" className="w-10 h-9 cursor-pointer border border-[#007595] hover:border-[#007595] text-[#007595] text-sm flex items-center justify-center shrink-0">MD</button>
                                    <button type="button" className="w-10 h-9 cursor-pointer border border-gray-300 hover:border-[#007595] text-slate-900 text-sm flex items-center justify-center shrink-0">LG</button>
                                    <button type="button" className="w-10 h-9 cursor-pointer border border-gray-300 hover:border-[#007595] text-slate-900 text-sm flex items-center justify-center shrink-0">XL</button>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-lg font-bold text-slate-900">Colors</h3>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <button type="button" className="w-10 h-9 cursor-pointer bg-gray-600  hover:border-[#007595] text-slate-900 text-sm flex items-center justify-center shrink-0"></button>
                                        <button type="button" className="w-10 h-9 cursor-pointer bg-black hover:border-[#007595] text-purple-800 text-sm flex items-center justify-center shrink-0"></button>
                                        <button type="button" className="w-10 h-9 cursor-pointer bg-blue-600 hover:border-[#007595] text-slate-900 text-sm flex items-center justify-center shrink-0"></button>
                                        <button type="button" className="w-10 h-9 cursor-pointer bg-purple-600 hover:border-[#007595] text-slate-900 text-sm flex items-center justify-center shrink-0"></button>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6 border-gray-300" />

                            <div className="mt-6 flex flex-wrap gap-4">
                                <button type="button" className="px-4 py-3 w-[45%] cursor-pointer border-0 bg-gray-100 hover:bg-gray-200 text-slate-900 text-sm font-semibold">Add to wishlist</button>
                                <button type="button" className="px-4 py-3 w-[45%] cursor-pointer border-0 bg-[#007595] hover:bg-gray-300 text-white text-sm font-semibold">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product2