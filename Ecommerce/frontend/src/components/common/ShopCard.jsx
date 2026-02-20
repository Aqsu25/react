import React, { useEffect, useState } from 'react'
import { apiUrl } from './Http';
import { Link } from 'react-router';
import striptags from "striptags";



function ShopCard() {
    const [products, setProducts] = useState([]);

    //   fetchProduct
    const fetchProducts = async () => {
        console.log(categoriesChecked)
        try {
            const res = await fetch(`${apiUrl}/getProducts`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                },
            });
            const result = await res.json();
            if (result.status === 200)
                console.log("products", result)
            setProducts(result.data);
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Something Went Wrong!");
        }
    };
    useEffect(() => {
        fetchProducts();
    })
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-sm mx-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                >
                    <div className="relative overflow-hidden rounded-t-lg">
                        <Link to="/product">
                            <img
                                src={product.image_url}
                                alt={product.title}
                                className="h-60 w-full object-cover"
                            />
                        </Link>
                    </div>

                    <div className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="text-slate-800 text-lg font-semibold">
                                {product.title}
                            </p>
                            <p className="text-cyan-600 text-lg font-semibold">
                                ${product.price}
                            </p>
                        </div>

                        <p className="text-slate-600 text-sm leading-normal font-light">
                            <p>{striptags(product.description)}</p>
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
        </div>)
}

export default ShopCard