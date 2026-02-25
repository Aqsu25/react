import React, { useEffect, useState } from "react";
import Sample from "../../common/Sample";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../common/Loader";
import { apiUrl, adminToken } from "../../common/Http";

function OrderDetail() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${apiUrl}/orders/${id}`, {
                    headers: { Authorization: `Bearer ${adminToken()}` },
                });
                const result = await res.json();
                if (res.ok && result.data) {
                    setOrder(result.data.order);
                    setItems(result.data.items);
                } else {
                    toast.error("Order not found!");
                }
            } catch (error) {
                toast.error("Something went wrong!");
            } finally {
                setLoading(false);
            }
        };
        fetchOrder();
    }, [id]);

    if (loading) return <Loader />;
    if (!order) return <div className="p-10 text-center text-lg text-red-500">Order not found!</div>;

    return (
        <Sample
            title={`Order Details — #${order.id}`}
            btnText="← Back to Orders"
            to="/admin/orders"
        >
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition">
                    <h3 className="font-semibold text-gray-700">Customer Info</h3>
                    <p className="text-gray-600">{order.user?.name}</p>
                    <p className="text-gray-600">{order.user?.email}</p>
                    <p className="text-gray-600">{order.phone_num}</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition">
                    <h3 className="font-semibold text-gray-700">Shipping</h3>
                    <p className="text-gray-600">{order.city}, {order.state}</p>
                    <p className="text-gray-600">ZIP Code: {order.zip}</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition">
                    <h3 className="font-semibold text-gray-700">Status</h3>
                    <div className="flex gap-2 mt-2">
                        <span className={`px-3 py-1 text-sm rounded-full text-white ${
                            order.status === "pending" ? "bg-yellow-500" :
                            order.status === "shipped" ? "bg-blue-500" :
                            order.status === "delivered" ? "bg-green-600" :
                             order.status === "cancelled" ? "bg-gray-600" :
                            "bg-red-600"
                        }`}>
                            {order.status}
                        </span>
                        <span className={`px-3 py-1 text-sm rounded-full text-white ${
                            order.payment_status === "paid" ? "bg-green-600" : "bg-red-600"
                        }`}>
                            {order.payment_status}
                        </span>
                    </div>
                </div>
            </div>

        
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
                    Ordered Items
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map(item => (
                        <div key={item.id} className="flex items-center gap-4 border border-gray-50 rounded-lg p-4 hover:border-black transition">
                            <img
                                src={item.product?.image_url}
                                alt={item.product?.title}
                                className="w-20 h-20 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                            <div>
                                <p className="font-medium text-gray-700">{item.product?.title}</p>
                                <p className="text-gray-500">Qty: {item.qty}</p>
                                <p className="text-gray-600 font-semibold">Rs. {item.price}</p>
                            </div>
                            <div className="ml-auto font-semibold text-gray-800">
                                Rs. {item.qty * item.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm ml-auto mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
                <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between"><span>Subtotal</span><span>Rs. {order.sub_total}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span>Rs. {order.shipping}</span></div>
                    <div className="flex justify-between text-red-500">
                        <span>Discount</span><span>- Rs. {order.discount}</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-3">
                        <span>Total</span><span>Rs. {order.grand_total}</span>
                    </div>
                </div>
            </div>
        </Sample>
    );
}

export default OrderDetail;