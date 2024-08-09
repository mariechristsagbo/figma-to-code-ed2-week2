export default function Hero() {
  return (
    <section className="w-full text-white font-archivo">
      <div
        className="lg:max-w-7xl rounded-52 py-12 my-10 text-center relative overflow-hidden px-4 mx-2 lg:mx-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.svg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-b-black bg-opacity-40"></div>

        <div className="relative flex flex-col space-y-5 px-4 py-12">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-white w-10"></div>
              <p className="text-white text-sm">We bring new fashion to the world</p>
              <div className="h-px bg-white w-10"></div>
            </div>

          </div>

          <h1 className="md:text-5xl text-2xl font-extrabold leading-normal font-chillax">
            DISCOVER THE LATEST FASHION TRENDS <br /> HERE
          </h1>
          <p className="max-w-2xl mx-auto">
            Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.
          </p>
          <div className="flex items-center justify-center">
            <button className="bg-white text-b-black p-4 py-3 text-sm rounded-full font-semibold hover:opacity-80">
              Start shopping
            </button>
            <button className="bg-white rounded-full p-3 flex items-center justify-center hover:opacity-80 active:scale-95 transition-transform duration-150 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-black transform rotate-45">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m-7 7l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
