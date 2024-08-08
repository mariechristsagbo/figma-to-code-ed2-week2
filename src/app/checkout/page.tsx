'use client';
import { useState } from 'react';
import Image from 'next/image';
import { shippingMethods, formFields, paymentMethods } from '@/constants';

const products = [
    {
        id: 1,
        name: "T-Shirt",
        image: "/images/collection-men1.svg",
        description: "Color: Green - Size: Large",
        price: 87,
    },
    {
        id: 2,
        name: "Men's Dri-FIT Golf Jacket",
        image: "/images/collection-men1.svg",
        description: "Color: Ocean - Size: Large",
        price: 100,
    },
    {
        id: 3,
        name: "Tatum 2 \"Red Cement\"",
        image: "/images/collection-men1.svg",
        description: "Size: 15",
        price: 125,
    },
];

export default function CheckoutPage() {
    const [cart, setCart] = useState(products);
    const totalAmount = cart.reduce((total, product) => total + product.price, 0);

    return (
        <section className="font-archivo max-w-7xl mx-auto px-4 pt-6 pb-12">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
                <div className="lg:w-[60%]">
                    <h1 className="text-3xl font-bold mb-6 px-4">Checkout</h1>
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
                        <p className="text-b-dark-gray mb-6">By placing your order, you agree to Ballamas <a href="#" className="underline text-b-black">Privacy</a> and <a href="#" className="underline text-b-black">Policy</a></p>
                        {cart.map(product => (
                            <div key={product.id} className="flex items-center justify-between mb-4">
                                <Image src={product.image} alt={product.name} width={80} height={80} className="object-cover rounded" />
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-gray-500">{product.description}</p>
                                </div>
                                <p className="text-lg font-semibold">${product.price}.00</p>
                            </div>
                        ))}
                        <div className='mt-6 mb-4'>
                            <p className='text-black'>Discount Code</p>
                            <div className="flex items-center justify-between mt-2">
                                <input type="text" placeholder="Add discount code" className="border border-b-dark-gray p-3 px-5 rounded-full flex-grow mr-2 text-b-black" />
                                <button className="bg-black text-white p-3 px-5 rounded-full font-semibold">Apply</button>
                            </div>
                        </div>

                        <p className="text-sm text-b-black">New customer? <a href="#" className="underline">Signup</a> <span className='text-b-dark-gray'>to get better offer</span></p>
                        <div className="mt-6 pt-4 text-b-dark-gray">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${totalAmount}.00</span>
                            </div>
                            <div className="flex justify-between mb-2 border-b py-2.5">
                                <span>Discount</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg text-b-black">
                                <span>Order total</span>
                                <span>${totalAmount}.00</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
                            <div className="space-y-2">
                                {shippingMethods.map((method, index) => (
                                    <label key={index} className="flex items-center justify-between border py-5 rounded-xl px-7">
                                        <div className="flex items-center">
                                            <input type="radio" name="shipping" className="form-radio h-5 w-5 text-black" />
                                            <div className="ml-3 flex flex-col">
                                                <p>{method.name}</p>
                                                <p className="text-b-dark-gray">{method.description}</p>
                                            </div>
                                        </div>
                                        <p className="font-bold text-lg">{method.price}</p>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-md font-semibold mb-4">Payment details</h2>
                        <p className='text-b-dark-gray text-sm font-medium my-4'>Complete your purchase by providing your payment details.</p>
                        <h2 className="text-md font-semibold mb-4">Shipping address</h2>
                        <form>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4 text-b-black">
                                {formFields.map((field, index) => (
                                    <div key={index} className="space-y-2">
                                        <label className="block font-medium text-sm">{field.label}</label>
                                        <input
                                            type="text"
                                            placeholder={field.placeholder}
                                            className="border border-b-dark-gray p-3 px-5 rounded-full w-full text-sm outline-none"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className='py-10'>
                                <h2 className="text-md font-semibold mb-4">Select payment method</h2>
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {paymentMethods.map((method, index) => (
                                        <label key={index} className="flex flex-col space-y-2 border hover:border-b-dark-gray rounded-xl py-5 px-4 cursor-pointer">
                                            <Image
                                                alt={method.label}
                                                src={method.image}
                                                width={30}
                                                height={30}
                                            />
                                            <p className='text-sm'>{method.label}</p>
                                        </label>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center border border-b-dark-gray rounded-full px-4 py-2">
                                        <input
                                            type="text"
                                            placeholder="Card number"
                                            className="flex-grow text-sm p-2 rounded-full outline-none"
                                        />
                                        <img src="/icons/lock.svg" alt="Lock" className="w-5 h-5 ml-2" />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex items-center border border-b-dark-gray rounded-full px-4 py-2 flex-grow">
                                            <input
                                                type="text"
                                                placeholder="Expiration date (MM/YY)"
                                                className="flex-grow text-sm p-2 rounded-full outline-none"
                                            />
                                        </div>
                                        <div className="flex items-center border border-b-dark-gray rounded-full px-4 py-2 flex-grow">
                                            <input
                                                type="text"
                                                placeholder="Security code"
                                                className="flex-grow text-sm p-2 rounded-full outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label className="flex items-center my-4">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-black" />
                                <span className="ml-2 text-md">Use shipping address as billing address</span>
                            </label>

                            <button className="w-full py-3 bg-b-black hover:bg-opacity-95 text-white rounded-full flex items-center justify-center">
                                <span className="mr-2 font-semibold">Pay $ {totalAmount}.00</span>
                                <img src="/icons/arrow-right.svg" alt="Arrow" className="w-4 h-4" />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
