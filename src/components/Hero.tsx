export default function Hero() {
  return (
    <section className="w-full text-white font-archivo">
      <div className="lg:max-w-7xl rounded-52 py-10 my-10 text-center bg-hero bg-cover relative overflow-hidden px-4 mx-2 lg:mx-0">
        <div className="absolute inset-0 bg-b-black bg-opacity-40"></div>
        <div className="relative flex flex-col space-y-5 px-4 py-12">
          <p>We bring new fashion to the world</p>
          <h1 className="md:text-5xl text-2xl font-extrabold leading-normal font-chillax">
            DISCOVER THE LATEST FASHION TRENDS <br /> HERE
          </h1>
          <p className="max-w-2xl mx-auto">
            Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.
          </p>
          <div className="flex items-center justify-center">
            <button className="bg-white text-b-black p-4 py-3 rounded-full font-semibold">
              Start shopping
            </button>
            <button className="bg-white rounded-full p-4 flex items-center justify-center">
              <img src="/icons/arrow.svg" alt="Go to shopping page" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
