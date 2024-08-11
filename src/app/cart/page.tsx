'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/types/Product';

export default function CartPage() {
    const [cart, setCart] = useState<Product[]>(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleQuantityChange = (id: string, change: number) => {
        setCart(cart.map(product =>
            product.id === id ? { ...product, quantity: Math.max(1, product.quantity + change) } : product
        ));
    };

    const handleRemoveProduct = (id: string) => {
        setCart(cart.filter(product => product.id !== id));
    };

    const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <section className='font-archivo max-w-7xl mx-auto px-4 pt-5 pb-14 text-b-black'>
            <div className='flex items-center gap-8 justify-center flex-col lg:flex-row'>
                <div className='w-full lg:w-3/4'>
                    <div className='flex justify-between py-8'>
                        <h1 className='font-chillax font-semibold text-2xl'>Cart ({cart.length})</h1>
                        <button onClick={() => setCart([])} className='flex items-center gap-1 text-b-dark-gray text-xs bg-gray-200 py-1 px-2.5 rounded-full'>
                            <Image src="/icons/trash.svg" alt="Trash" width={16} height={16} className='w-4 h-4' />
                            <span>Clear Cart</span>
                        </button>
                    </div>

                    <div className="flex-grow">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b text-b-dark-gray">
                                    <th className="py-2">Product</th>
                                    <th className="py-2">Quantity</th>
                                    <th className="py-2 text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="text-center py-20">
                                            <h2 className="text-3xl font-semibold">Your cart is empty</h2>
                                        </td>
                                    </tr>
                                ) : (
                                    cart.map(product => (
                                        <tr key={product.id} className="border-b">
                                            <td className="py-4 flex items-center gap-4">
                                                <Image src={product.image} alt={product.name} width={64} height={64} className="object-cover rounded" />
                                                <div>
                                                    <h2 className="sm:text-md text-sm font-semibold">{product.name}</h2>
                                                    <p className="text-gray-500 sm:text-md text-sm">{product.description}</p>
                                                    <p className="sm:text-lg text-md font-semibold">${product.price * product.quantity}</p>
                                                </div>
                                            </td>
                                            <td className="py-4">
                                                <div className="flex items-center space-x-2">
                                                    <button onClick={() => handleQuantityChange(product.id, -1)}>
                                                        <Image alt='Remove' src='/icons/decrement.svg' width={21} height={15} />
                                                    </button>
                                                    <span className="text-lg">{product.quantity}</span>
                                                    <button onClick={() => handleQuantityChange(product.id, 1)}>
                                                        <Image alt='Add' src='/icons/increment.svg' width={21} height={15} />
                                                    </button>
                                                    <button onClick={() => handleRemoveProduct(product.id)} className="sm:p-3  p-2 bg-gray-200 rounded-full">
                                                        <Image src="/icons/trash.svg" alt="Trash" width={16} height={16} />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-4 text-right">
                                                ${product.price * product.quantity}.00
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-full lg:w-1/4 p-6 rounded-xl border bg-white">
                    <h2 className="text-2xl font-semibold mb-4">Order summary</h2>
                    <div className="border-b pb-2 mb-2 text-b-dark-gray">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${totalAmount}.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span>$0.00</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Order total</span>
                        <span>${totalAmount}.00</span>
                    </div>
                    <button className="mt-4 w-full py-3 bg-black text-white rounded-full">Checkout now</button>
                </div>
            </div>
        </section>
    );
}
