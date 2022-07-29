const ShortSummary = () => {
    return (
        <div className='grid lg:grid-cols-2  gap-5 px-5 py-7'>
            <div className=' text-white rounded-[20px]  bg-[#868686] '>
                <div className='grid grid-cols-2 p-5'>
                    <div > <i class="fa-solid fa-sack-dollar  text-[50px] text-white"></i></div>
                    <div className="text-2xl">
                        <h2 className=''>Earning</h2>
                        <h1 className='font-bold'>$242</h1>
                    </div>
                </div>

            </div>
            <div className=' text-white rounded-[20px]  bg-primary '>
                <div className='grid grid-cols-2 p-5'>
                    <div > <i class="fa-brands fa-product-hunt text-[50px] text-white"></i></div>
                    <div className="text-2xl">
                        <h2 className=''>Products</h2>
                        <h1 className='font-bold'>$242</h1>
                    </div>
                </div>

            </div>
            <div className=' text-white rounded-[20px]  bg-primary '>
                <div className='grid grid-cols-2 p-5'>
                    <div > <i class="fa-solid fa-message  text-[50px] text-white"></i></div>
                    <div className="text-2xl">
                        <h2 className=''>Messages</h2>
                        <h1 className='font-bold'>$242</h1>
                    </div>
                </div>

            </div>
            <div className=' text-white rounded-[20px]  bg-[#868686] '>
                <div className='grid grid-cols-2 p-5'>
                    <div > <i class="fa-solid fa-people-carry-box  text-[50px] text-white"></i></div>
                    <div className="text-2xl">
                        <h2 className=''>New Vendors</h2>
                        <h1 className='font-bold'>$242</h1>
                    </div>
                </div>

            </div>



        </div>

    )
}

export default ShortSummary