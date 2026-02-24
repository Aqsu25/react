import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl, UserToken } from "../common/Http";

function OrderConfirmation() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await fetch(`${apiUrl}/orders/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${UserToken()}`,
                    },
                });
                const result = await res.json();

                if (res.ok && result.data) {
                    console.log("Order",result.data)
                    setOrder(result.data.order);
                    setOrderItems(result.data.items);
                } else {
                    toast.error("Order not found!");
                }
            } catch (error) {
                toast.error("Something went wrong!");
            }
        };

        fetchOrder();
    }, [id]);

    if (!order) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">

                <h1 className="text-3xl font-bold text-green-600 text-center mb-4">
                    🎉 Order Confirmed!
                </h1>

                <p className="text-gray-700 text-center mb-6">
                    Your order <span className="font-semibold">#{order.id}</span> has been
                    placed successfully!
                </p>

                <div className="space-y-4">
                    {orderItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between border-b pb-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-gray-500 text-sm">Qty: {item.qty}</p>
                                </div>
                            </div>
                            <p className="font-semibold">${item.price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-right text-gray-800">
                    <p>Subtotal: ${order.sub_total}</p>
                    <p>Shipping: ${order.shipping}</p>
                    <p className="text-xl font-bold">Total: ${order.grand_total}</p>
                </div>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Shipping Information</h3>
                    <p>{order.name}</p>
                    <p>{order.phone_num}</p>
                    <p>
                        {order.city}, {order.state}, {order.zip}
                    </p>
                </div>

                <div className="mt-8 flex justify-between">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Continue Shopping
                    </Link>
                    <Link
                        to={`/order/${order.id}`}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        Track Order
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default OrderConfirmation;