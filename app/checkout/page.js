"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function Checkout() {
  const [CartItem, setCartItem] = useState([])
  const [SubTotal, setSubTotal] = useState(0)

  useEffect(() => {
    axios.get('/api/cart-item')
      .then(x => (
        setCartItem(x.data.cartItem[0].order_items),
        setSubTotal(x.data.cartItem[0].Total_price)
      ))
      .catch(x => console.log(x))
  }, [])

  const route =useRouter()

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Left Side - Cart Products */}
      <div className="flex-2 lg:mr-10 mb-8 lg:mb-0 lg:w-2/3">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Shopping Cart</h2>
        <div className="max-h-96 overflow-y-auto pr-2"> {/* Added scrollable container */}
          {CartItem?.map(item => (
            <div key={item.id} className="flex items-center bg-white p-6 mb-6 rounded-lg shadow-md">
              <Image
                 src={process.env.NEXT_PUBLIC_API+'/uploads/'+item?.product?.image}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover mr-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{item?.product?.name}</h3>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-md font-medium text-gray-700">${item?.product?.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Total and Purchase Button */}
      <div className="flex-1 max-w-md bg-white p-8 rounded-lg shadow-md lg:w-1/3">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Order Summary</h2>
        <div className="flex justify-between mb-4 text-lg text-gray-600">
          <span>Total Items:</span>
          <span>{CartItem?.length}</span>
        </div>
        <div className="flex justify-between mb-6 text-lg font-semibold text-gray-700">
          <span>Total Price:</span>
          <span>${SubTotal}</span>
        </div>
        <button onClick={()=>route.push('/checkout/billing_info')} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Proceed to Purchase
        </button>
      </div>
    </div>
  );
}
