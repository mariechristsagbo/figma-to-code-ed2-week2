import Image from "next/image";
import { NAV_ITEMS, ACTION_ITEMS } from "@/constants";

export default function Header() {
  return (
    <header className="text-b-black">
      <div className="w-full bg-b-black py-3">
        <p className="text-white text-xs text-center">
          Sign up and get 20% off for all new arrivals collections
        </p>
      </div>

      <div className="border-b max-w-7xl mx-auto py-7">
        <div className="flex items-center justify-between">
          <nav>
            <ul className="flex items-center gap-4">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>

          <h1 className="text-outline text-4xl font-bold">BALLAMAS</h1>

          <nav>
            <ul className="flex items-center gap-4">
              {ACTION_ITEMS.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon ? (
                    <Image alt={item.name} src={item.icon} width={20} height={20} />
                  ) : null}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
