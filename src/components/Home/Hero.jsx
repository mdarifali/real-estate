import banner from '../../assets/images/Real_Estate_Banner.png';

const Hero = () => {
    return (
        <div className='min-h-fit bg-cyan-200 pt-40 pb-20 relative'>
            <div className="container mx-auto w-[85%] sm:w-3/4">
                <div className='flex flex-col sm:flex-row items-center gap-5'>
                    <div className='flex-1 order-2 sm:order-1 mb-5 sm:mb-0'>
                        <h1 className='tracking-wide text-4xl sm:text-6xl font-bold sm:font-extrabold mb-5'>Find your next home in Las Vegas</h1>
                        <p className='text-md sm:text-xl text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, a! Assumenda magni fuga molestiae commodi?</p>
                    </div>
                    <div className='flex-1 order-1 sm:order-2 mb-8 sm:mb-0'>
                        <img src={banner} alt="banner" />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row'>
                    <div className='w-full mt-5'>
                        <h1 className='text-black font-semibold'>LOCATION</h1>
                        <input
                            type="text"
                            placeholder='Enter and address, state, city or pincode'
                            className='w-full p-2 mt-2 border-b-2 border-gray-500 outline-none bg-transparent'
                        />
                    </div>
                    <div className='w-full mt-5'>
                        <h1 className='text-black font-semibold'>TYPE</h1>
                        <select className='w-full p-2 mt-2 border-b-2 border-gray-500 outline-none bg-transparent' name="selectOption" id="selectOption">
                            <option value="" disabled selected>Select Property</option>
                            <option value="option1">Rentals</option>
                            <option value="option1">Sales</option>
                            <option value="option1">Commercial</option>
                        </select>
                    </div>
                    <div className='w-full mt-5'>
                        <h1 className='text-black font-semibold'>CATEGORY</h1>
                        <select className='w-full p-2 mt-2 border-b-2 border-gray-500 outline-none bg-transparent' name="selectOption" id="selectOption">
                            <option value="" disabled selected>Property Category</option>
                            <option value="option1">Apartment</option>
                            <option value="option1">Duples</option>
                            <option value="option1">Condos</option>
                        </select>
                    </div>
                    <div className="w-full mt-5">
                        <button className='w-full py-3 bg-red-600 text-white mt-5 hover:bg-black transition duration-300 ease-in-out'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;