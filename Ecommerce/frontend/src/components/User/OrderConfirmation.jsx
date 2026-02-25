import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl, UserToken } from "../common/Http";
import Layout from "../common/Layout";

function OrderConfirmation() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
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
        setLoading(false);

        if (res.ok && result.data) {
          setOrder(result.data.order);
          setOrderItems(result.data.items);
        } else {
          toast.error("Order not found!");
        }
      } catch (error) {
        toast.error("Something went wrong!");
        console.error(error);
      }
    };

    fetchOrder();
  }, [id]);

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"></div>
          </div>
        )}

        {!loading && order && (
          <>
            <div className="text-center border-b pb-8">
              <div className="text-2xl mb-4 rounded-full">✅</div>
              <h1 className="text-3xl font-bold text-green-600">
                Thank You For Your Order!
              </h1>
              <p className="text-gray-600 mt-2">
                Your order has been successfully placed.
              </p>
              <p className="mt-2 font-semibold text-lg">
                Order ID: <span className="text-blue-700">#{order.id}</span>
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Items Purchased</h2>
              <div className="space-y-4">
                {orderItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg p-4"
                  >
                    <img
                      src={item.product?.image_url}
                      alt={item.product?.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">{item.product?.title}</p>
                      <p className="text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="font-bold">Rs. {item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Shipping Information</h3>
                <p><strong>Name:</strong> 
                {order.user?.name}</p>
                <p><strong>Phone:</strong> {order.phone_num}</p>
                <p><strong>City:</strong> {order.city}</p>
                <p><strong>ZIP:</strong> {order.zip}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Order Status</h3>
                <p className="mb-2">
                  <strong>Order:</strong>{" "}
                  <span className="px-3 py-1 text-sm rounded-full text-white bg-blue-600">
                    {order.status}
                  </span>
                </p>
                <p>
                  <strong>Payment:</strong>{" "}
                  <span
                    className={`px-3 py-1 text-sm rounded-full text-white ${
                      order.payment_status === "paid"
                        ? "bg-green-600"
                        : "bg-red-500"
                    }`}
                  >
                    {order.payment_status}
                  </span>
                </p>
              </div>
            </div>

   
            <div className="mt-10 border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 text-gray-700 max-w-sm ml-auto">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {order.sub_total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Rs. {order.shipping}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount</span>
                  <span>- Rs. {order.discount}</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-4">
                  <span>Total</span>
                  <span>Rs. {order.grand_total}</span>
                </div>
              </div>
            </div>

           
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Continue Shopping
              </Link>
              <Link
                to="/orders"
                className="border border-gray-400 px-6 py-2 rounded-md hover:bg-gray-100 transition"
              >
                View My Orders
              </Link>
            </div>
          </>
        )}

      
        {!loading && !order && (
          <div className="text-center py-20">
           
            <h2 className="text-2xl font-bold mb-2">Order Not Found</h2>
            <p className="text-gray-500 mb-6">
              We couldn’t find your order. Please check the order number or try again.
            </p>
            <Link
              to="/shop"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Back to Shop
            </Link>
          </div>
        )}
      </div>
    </div>
    </Layout>
  );
}

export default OrderConfirmation;