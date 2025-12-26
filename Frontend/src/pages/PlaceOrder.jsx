import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/cartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
    const [method, setMethod] = useState("cod");

    const {navigate} = useContext(ShopContext);

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:pt-14 min-h-[80vh] shadow-[-10px_10px_20px_rgba(0,0,0,0.678)] bg-white p-20 mb-20">
            {/* ---------Left Side-------- */}
            <div className="flexflex-col gap-4 w-full sm:max-w-120">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                <div className="flex gap-3 my-2">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email address"
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Street"
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full mb-2"
                />
                <div className="flex gap-3 mb-2">
                    <input
                        type="text"
                        placeholder="City"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                    <input
                        type="text"
                        placeholder="State"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                </div>
                <div className="flex gap-3 mb-2">
                    <input
                        type="number"
                        placeholder="Pin-Code"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    />
                </div>
                <input
                    type="number"
                    placeholder="Phone no."
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                />
            </div>
            {/* ---------Right Side--------- */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    {/* ---------Payment Method------- */}
                    <Title text1={"PAYMENT"} text2={"METHOD"} />
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <div onClick={()=>setMethod('stripe')} className="flex item-center gap-3 border p-2 px-3 cursor-pointer">
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'? 'bg-green-700' : ""}`}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.stripe_logo}
                                alt=""
                            />
                        </div>
                        <div onClick={()=>setMethod('razorpay')} className="flex item-center gap-3 border p-2 px-3 cursor-pointer">
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'? 'bg-green-700' : ""}`}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.razorpay_logo}
                                alt=""
                            />
                        </div>
                        <div onClick={()=>setMethod('cod')} className="flex item-center gap-3 border p-2 px-3 cursor-pointer">
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'? 'bg-green-700' : ""}`}
                            ></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">
                                CASH ON DELIVERY
                            </p>
                        </div>
                    </div>
                    <div className="w-full text-end mt-8"> 
                    <button onClick={()=>navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm active:bg-gray-500">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
