import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { apiUrl } from '../common/Http';
import striptags from "striptags";


function SectionThree() {
    //   const featuredProduct = [
    //     {
    //         id: 1,
    //         img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=927&q=80",
    //         title: "Apple AirPods",
    //         rupees: "95.00",
    //         description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case"
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=927&q=80",
    //         title: "Bags",
    //         rupees: "95.00",
    //         description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case"
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=927&q=80",
    //         title: "Women Cloth",
    //         rupees: "95.00",
    //         description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case"
    //     }
    // ]

    const [newfeatures, setFeatures] = useState([]);

    // newarrivals
    const featuredProduct = async () => {
        try {
            const res = await fetch(`${apiUrl}/featuredProduct`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                },
            });
            const result = await res.json();
            if (result.status === 200)
                console.log(result);
            setFeatures(result.data);
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Something Went Wrong!");
        }
    };


    useEffect(() => {
        featuredProduct();

    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Featured Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newfeatures.map((featuredProduct) => (
                    <div
                        key={featuredProduct.id}
                        className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-sm mx-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                    >
                        <div className="relative overflow-hidden rounded-t-lg">
                            <Link to="/product">
                                <img
                                    src={featuredProduct.image_url}
                                    alt={featuredProduct.title}
                                    className="h-60 w-full object-cover"
                                />
                            </Link>
                        </div>

                        <div className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                                <p className="text-slate-800 text-lg font-semibold">
                                    {featuredProduct.title}
                                </p>
                                <p className="text-cyan-600 text-lg font-semibold">
                                    ${featuredProduct.price}
                                </p>
                            </div>

                            <p className="text-slate-600 text-sm leading-normal font-light">
                                <p>{striptags(featuredProduct.description)}</p>
                            </p>

                            <button
                                className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 text-white text-sm hover:bg-cyan-700 transition"
                                type="button"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}

export default SectionThree