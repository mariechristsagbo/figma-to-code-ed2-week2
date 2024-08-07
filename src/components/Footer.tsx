import { products, categories, social_media } from "@/constants";

export default function Footer() {
  return (
    <footer className='font-archivo text-white w-full bg-b-black pt-14'>
      <div className='max-w-7xl px-4 mx-auto'>
        <div className="flex flex-col lg:flex-row md:items-start items-center justify-between">
          
          {/* Newsletter Section */}
          <div className='flex flex-col space-y-4 max-w-lg mb-8 md:mb-0'>
            <h1 className="font-chillax text-outline-white text-4xl font-semibold">BALLAMAS</h1>
            <p className='text-b-gray'>Subscribe to our newsletter for upcoming products and best discounts on all items</p>
            <div className='flex flex-row gap-4'>
              <input
                type="text"
                className='rounded-full bg-b-black text-white border border-white py-3 px-4 w-7/12'
                placeholder='Your email'
              />
              <button className="px-4 py-3 rounded-full bg-white text-b-black">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-b-gray">
            
            {/* Products Section */}
            <div>
              <p className="font-semibold text-lg pb-2">Products</p>
              <ul className="space-y-1">
                {products.map((item, index) => (
                  <li className="cursor-pointer hover:underline" key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Categories Section */}
            <div>
              <p className="font-semibold text-lg pb-2">Categories</p>
              <ul className="space-y-1">
                {categories.map((item, index) => (
                  <li className="cursor-pointer hover:underline" key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <p className="font-semibold text-lg pb-2">Our Social Media</p>
              <ul className="space-y-1">
                {social_media.map((item, index) => (
                  <li className="cursor-pointer hover:underline" key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <p className="text-center text-b-dark-gray text-xs py-10">
          &copy; BALLAMAS 2024 by <span className="underline">waris</span>
        </p>
      </div>
    </footer>
  );
}
