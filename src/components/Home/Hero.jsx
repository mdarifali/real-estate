import { Link } from 'react-router-dom';
import banner from '../../assets/images/Hero-banner.jpg';

const Hero = () => {
    return (
        <div id='hero' className='max-h-fit pt-40 pb-10 mb-0 sm:mb-36 bg-cover bg-center bg-fixed bg-no-repeat' style={{ backgroundImage: `url(${banner})` }}>
            <div className="container mx-auto w-[85%] sm:w-3/4 pt-0 sm:pt-20 pb-14">
                <div className='text-white flex flex-col sm:flex-row items-center gap-12'>
                    <div className='w-full flex-1'>
                        <h1 className='tracking-wider text-4xl sm:text-6xl font-bold sm:font-extrabold mb-10'>Find your next home in Las Vegas</h1>
                        <p className='text-md sm:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, a! Assumenda magni fuga molestiae commodi?</p>
                        <Link to="/propertis">
                            <button className='px-10 py-4 tracking-wider bg-red-600 text-white mt-10 uppercase hover:bg-black transition-all'>See More</button>
                        </Link>
                    </div>
                    <div className='w-full flex-1 bg-white rounded-xl'>
                        <div className='flex flex-col gap-6 p-12'>
                            <div className='w-full '>
                                <h1 className='text-black text-[19px]'>Location</h1>
                                <input
                                    type="text"
                                    placeholder='Enter and address, state, city or pincode'
                                    className='w-full text-black p-2 mt-2 border-b-2 border-gray-500 outline-none bg-transparent'
                                />
                            </div>
                            <div className='w-full'>
                                <h1 className='text-black text-[19px]'>Type</h1>
                                <select className='w-full p-2 text-black mt-2 border-b-2 border-gray-500 outline-none bg-transparent' name="selectOption" id="selectOption">
                                    <option value="" disabled selected>Select Property</option>
                                    <option value="option1">Rentals</option>
                                    <option value="option1">Sales</option>
                                    <option value="option1">Commercial</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-black text-[19px]'>Category</h1>
                                <select className='w-full p-2 text-black mt-2 border-b-2 border-gray-500 outline-none bg-transparent' name="selectOption" id="selectOption">
                                    <option value="" disabled selected>Property Category</option>
                                    <option value="option1">Apartment</option>
                                    <option value="option1">Duples</option>
                                    <option value="option1">Condos</option>
                                </select>
                            </div>
                            <div className="w-full mt-5 sm:mt-0">
                                <button className='w-full py-3 bg-red-600 text-white mt-5 hover:bg-black transition-all'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;