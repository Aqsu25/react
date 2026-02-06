import React, { useState } from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRating from '../common/StarRating';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Product() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const images = [
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
        "https://images.unsplash.com/photo-1618354691438-25bc04584c23",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16",
    ];

    return (
        <Layout>
            <div className='container mx-auto px-2 md:px-4 py-2 mb-5'>
                <nav aria-label="breadcrumb" className="w-max my-4">
                    <ol className="flex flex-wrap items-center rounded-md px-4 py-2">
                        <li className="flex items-center text-sm text-slate-500 hover:text-[#007595]">
                            <Link to="/" className='text-black hover:text-[#007595]'>Home</Link>
                            <span className="pointer-events-none mx-2 text-black">/</span>
                        </li>
                        <li className="flex items-center text-sm text-slate-500 hover:text-[#007595]">
                            <Link to="/shop" className='text-black hover:text-[#007595]'>Shop</Link>
                            <span className="pointer-events-none mx-2 text-black">/</span>
                        </li>
                        <li className="flex items-center text-sm text-slate-500 hover:text-[#007595]">
                            Dummy Product
                        </li>
                    </ol>
                </nav>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className="w-full md:w-2/5">
                        <div className="bg-white rounded-2xl shadow-xl p-3">
                            <Swiper
                                spaceBetween={10}
                                navigation
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="rounded-xl mb-4"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt="Women Bag"
                                            className="w-full h-[420px] object-cover rounded-xl"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={12}
                                slidesPerView={4}
                                freeMode
                                watchSlidesProgress
                                modules={[FreeMode, Thumbs]}
                                className="cursor-pointer"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt="Thumbnail"
                                            className="h-24 w-full object-cover rounded-lg border hover:border-[#007595] transition"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className='w-full md:w-3/5 rounded-2xl ms-7 px-5'>
                        <h1 className='text-4xl font-bold'>Dummy Product</h1>
                        <div className="flex gap-2 py-3">
                            <StarRating /><span className='text-red-400'>10 Reviews</span>
                        </div>
                        {/* price */}
                        <div className='text-2xl pb-3'>
                            $10
                            <span className='text-gray-400 ps-3'>$5</span>
                        </div>
                        {/* description */}
                        <div>
                            A bag is Link flexible or structured container with an opening, used for carrying, storing, or transporting items.
                        </div>
                        {/* sizes */}
                        <div className="mt-6 pb-3">
                            <h3 className="text-2xl font-bold text-slate-900">Sizes</h3>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button type="button" className="rounded-sm w-12 h-11 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-900 text-sm flex items-center justify-center shrink-0">S</button>
                                <button type="button" className="rounded-sm w-12 h-11 cursor-pointer bg-gray-200 hover:bg-gray-300 text-slate-900 text-sm flex items-center justify-center shrink-0">M</button>
                                <button type="button" className="rounded-sm w-12 h-11 cursor-pointer bg-gray-200 hover:bg-gray-300 text-slate-900 text-sm flex items-center justify-center shrink-0">L</button>
                                <button type="button" className="rounded-sm w-12 h-11 cursor-pointer bg-gray-200 hover:bg-gray-300 text-slate-900 text-sm flex items-center justify-center shrink-0">S</button>
                            </div>
                        </div>
                        {/* addtocrat */}
                        <button className="bg-[#007595] mt-3 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded inline-flex items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className='
                            pe-2' />
                            <span>Add To Cart</span>
                        </button>
                        <hr className='text-gray-200 py-3 mt-5' />
                        <div className='flex'>
                            <h3 className="text-2xl font-bold text-black">SKU:
                                <span className='text-gray-900 px-3'>FFGGGWS</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                <ul class="flex border-b border-gray-500 mt-5">
                    <li class="-mb-px mr-1">
                        <Link class="bg-white inline-block border-l border-t hover:text-red-500 border-r rounded-t py-2 px-4 text-[#007595] font-semibold" to="#">Dashboard</Link>
                    </li>
                    <li class="mr-1">
                        <Link class="bg-white inline-block py-2 px-4 text-[#007595] hover:text-red-500 font-semibold" to="#">Reviews (10)</Link>
                    </li>
                </ul>
                </div>
            </div>
        </Layout>)
}
export default Product




