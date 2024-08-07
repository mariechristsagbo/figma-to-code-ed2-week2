import Image from "next/image"

export default function Collection() {
  return (
    <section className='my-20 text-center font-archivo'>
      <h1 className='text-4xl font-semibold font-chillax pb-4'>OUR COLLECTION</h1>
      <p className='text-b-dark-gray'>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>

      <div className='flex items-center gap-4 py-10 md:flex-row flex-col-reverse max-w-3xl mx-auto lg:max-w-full'>
        <div className="relative lg:w-1/3 max-w-sm lg:max-w-full">
          <Image
            alt="Tech Mens Fleece"
            src='/images/collection-men1.svg'
            width={200}
            height={500}
            className="object-cover w-full h-auto rounded-32"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
            <button className="px-4 py-2.5 rounded-full bg-white flex items-center mb-3">
              <span>LEARN MORE</span>
              <img src="/icons/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>

        <div className="relative lg:w-2/3 h-full min-h-[482px] lg:min-h-[510px] rounded-32 overflow-hidden flex items-center justify-center max-w-sm lg:max-w-full">
          <div className="absolute inset-0">
            <Image
              alt="Classic Men"
              src='/images/collection-men2.svg'
              layout="fill"
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
          <div className="relative p-6 text-center">
            <h2 className="text-6xl mb-2 text-outline-white font-chillax font-extrabold">CLASSIC MEN</h2>
            <p className="text-lg text-white">We’re changing the way things get made</p>
          </div>
        </div>
      </div>
    </section>
  )
}
