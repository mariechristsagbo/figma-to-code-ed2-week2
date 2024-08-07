import Image from "next/image"

export default function Collection() {
  return (
    <section className='my-20 text-center font-archivo'>
      <h1 className='text-4xl font-semibold font-chillax pb-4'>OUR COLLECTION</h1>
      <p className='text-b-dark-gray'>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>

      <div className='flex items-center gap-4 py-10'>
        <div className="relative w-1/3">
          <Image
            alt="Tech Mens Fleece"
            src='/images/collection-men1.svg'
            width={1728}
            height={2160}
            className="object-cover w-full h-auto rounded-32"
          />
          <div className="absolute inset-0 flex items-center justify-center bottom-0">
            <button className="px-4 py-2.5 rounded-full bg-white flex items-center">
              <span>LEARN MORE</span>
              <img src="/icons/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>

        <div className="border bg-collection-men2 bg-cover w-full h-2/3">
          <h2 className="text-3xl mb-2 text-outline-white font-chillax font-semibold">CLASSIC MEN</h2>
          <p className="text-lg text-white">We’re changing the way things get made</p>

        </div>
      </div>
    </section>
  )
}
