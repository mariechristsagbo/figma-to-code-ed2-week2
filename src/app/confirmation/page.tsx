
export default function Page() {
    return (
        <section className='font-archivo max-w-7xl px-4 mx-auto'>
            <div className="flex flex-col justify-center items-center space-y-5 py-44 text-center">
                <img src="/icons/success.svg"
                    alt="Success"
                    className="w-14 h-14" />
                <h1 className="font-semibold text-xl text-black">Thanks for you order ! </h1>
                <p className="text-md text-b-dark-gray">The order confirmation has been sent to johndoe@gmail.com</p>
            </div>
        </section>
    )
}
