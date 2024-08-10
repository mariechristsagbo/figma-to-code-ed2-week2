export default function Hero() {
  return (
    <section className="text-white font-archivo">
      <div className="rounded-52 py-12 text-center h-25 sm:h-30 relative overflow-hidden px-4 mx-2 lg:mx-0 bg-hero bg-cover bg-center bg-no-repeat">

        <div className="absolute inset-0 bg-b-black bg-opacity-40"></div>

        <div className="relative flex flex-col space-y-3 px-2 sm:px-4 sm:py-12 sm:space-y-5 items-center justify-center h-full">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-white w-10"></div>
              <p className="text-white text-sm text-center">We bring new fashion to the world</p>
              <div className="h-px bg-white w-10"></div>
            </div>
          </div>

          <h1 className="md:text-5xl sm:text-4xl text-2xl font-extrabold leading-normal font-chillax text-center">
            DISCOVER THE LATEST FASHION TRENDS <br /> HERE
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-center">
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
