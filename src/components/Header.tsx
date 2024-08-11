'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { NAV_ITEMS, ACTION_ITEMS, ACTION_MOBILE_ITEMS } from "@/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('cart');
      const cartItems = savedCart ? JSON.parse(savedCart) : [];
      setCartCount(cartItems.reduce((acc: number, item: any) => acc + item.quantity, 0));
    };

    
    updateCartCount();

    const handleStorageChange = () => updateCartCount();

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <header className="text-b-black font-archivo">
      <div className="w-full bg-b-black py-4">
        <p className="text-white text-xs text-center">
          Sign up and get 20% off for all new arrivals collections
        </p>
      </div>

      <div className="border-b max-w-7xl mx-auto py-7 px-4">
        <div className="lg:flex items-center justify-between hidden">
          <nav>
            <ul className="flex items-center gap-4">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>

          <h1 className="font-chillax text-outline text-4xl font-semibold cursor-pointer" onClick={() => router.push('/')}>BALLAMAS</h1>

          <nav>
            <ul className="flex items-center gap-4">
              {ACTION_ITEMS.map((item, index) => (
                <li key={index} className="flex items-center gap-2 cursor-pointer">
                  {item.icon ? (
                    <Image alt={item.name} src={item.icon} width={20} height={20} />
                  ) : null}
                  {item.name.startsWith("Cart") ? (
                    <span onClick={() => router.push('/cart')}>{`Cart (${cartCount})`}</span>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden px-4">

          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"} alt="Menu" width={24} height={24} />
          </button>
          <h1 className="font-chillax text-outline sm:text-4xl text-3xl font-semibold" onClick={() => router.push('/')}>BALLAMAS</h1>
          <div className="flex items-center space-x-4">
            <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
            <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
          </div>
        </div>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}>
        <nav>
          <ul className="flex flex-col items-center gap-4 py-4">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>{item}</li>
            ))}

            {ACTION_MOBILE_ITEMS.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item.icon ? (
                  <Image alt={item.name} src={item.icon} width={20} height={20} />
                ) : null}
                {item.name.startsWith("Cart") ? (
                  <span>{`Cart (${cartCount})`}</span>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
