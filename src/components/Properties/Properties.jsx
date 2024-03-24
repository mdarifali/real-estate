import pImage1 from '../../assets/images/popular image -1.jpg';
import pImage2 from '../../assets/images/popular image -2.jpg';
import pImage3 from '../../assets/images/popular image -3.jpg';
import { FaMapMarkerAlt, FaCamera, FaVideo, FaBath, FaBed, FaThList, FaUserCircle,  FaShareAlt, FaHeart, FaPlus  } from "react-icons/fa";


const Properties = () => {
    return (
        <div className="mb-20">
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className='mb-10'>
                    <h5 className='tracking-wide text-xl mb-5 text-red-500'>PROPERTIES</h5>
                    <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Explore The Latest</h2>
                </div>
                <div className="w-full grid-cols-1 grid sm:grid-cols-3 justify-center items-center gap-8">
                    <div className='shadow-xl'>
                        <div className='h-[200px] bg-cover bg-center p-4 rounded-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between items-end ' style={{ backgroundImage: `url(${pImage1})` }}>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Featured</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Sales</button>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Active</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-end backdrop-brightness-50 py-2 px-3 rounded-lg'>
                                <div className='flex justify-start items-center gap-2'>
                                    <FaMapMarkerAlt className='size-5 text-white' />
                                    <p className='text-white text-xs'>New York City, New York</p>
                                </div>
                                <div className='flex justify-center items-center gap-5'>
                                    <FaCamera className='size-5 text-white' />
                                    <FaVideo className='size-5 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                            <h4 className='text-lg text-black'>Redfin Premier sales</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ 500.00</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, cupiditate?</p>
                            <div className='flex justify-center items-start gap-4'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBath className='text-red-400 size-5' />
                                    <p>3</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBed className='text-red-400 size-5' />
                                    <p>4</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaThList className='text-red-400 size-4' />
                                    <p>300 sq ft</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                            <div className='w-full flex justify-between items-center mt-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaUserCircle className='text-red-400 size-5'/>
                                    <p>Adam Smith</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaShareAlt className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaHeart className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaPlus className='text-red-400 size-3'/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl'>
                        <div className='h-[200px] bg-cover bg-center p-4 rounded-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between items-end' style={{ backgroundImage: `url(${pImage2})` }}>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Featured</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Sales</button>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Active</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-end backdrop-brightness-50 py-2 px-3 rounded-lg'>
                                <div className='flex justify-start items-center gap-2'>
                                    <FaMapMarkerAlt className='size-5 text-white' />
                                    <p className='text-white text-xs'>Los Angeles, California</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaCamera className='size-5 text-white' />
                                    <FaVideo className='size-5 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                            <h4 className='text-lg text-black'>Redfin Premier sales</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ 500.00</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, cupiditate?</p>
                            <div className='flex justify-center items-start gap-4'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBath className='text-red-400 size-5' />
                                    <p>3</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBed className='text-red-400 size-5' />
                                    <p>4</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaThList className='text-red-400 size-4' />
                                    <p>300 sq ft</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                            <div className='w-full flex justify-between items-center mt-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaUserCircle className='text-red-400 size-5'/>
                                    <p>Adam Smith</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaShareAlt className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaHeart className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaPlus className='text-red-400 size-3'/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl'>
                        <div className='h-[200px] bg-cover bg-center p-4 rounded-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between items-end' style={{ backgroundImage: `url(${pImage3})` }}>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Featured</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Sales</button>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Active</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-end backdrop-brightness-50 py-2 px-3 rounded-lg'>
                                <div className='flex justify-start items-center gap-2'>
                                    <FaMapMarkerAlt className='size-5 text-white' />
                                    <p className='text-white text-xs'>Chicago, Illinois</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaCamera className='size-5 text-white' />
                                    <FaVideo className='size-5 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                            <h4 className='text-lg text-black'>Redfin Premier sales</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ 500.00</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, cupiditate?</p>
                            <div className='flex justify-center items-start gap-4'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBath className='text-red-400 size-5' />
                                    <p>3</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBed className='text-red-400 size-5' />
                                    <p>4</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaThList className='text-red-400 size-4' />
                                    <p>300 sq ft</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                            <div className='w-full flex justify-between items-center mt-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaUserCircle className='text-red-400 size-5'/>
                                    <p>Adam Smith</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaShareAlt className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaHeart className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaPlus className='text-red-400 size-3'/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl'>
                        <div className='h-[200px] bg-cover bg-center p-4 rounded-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between items-end' style={{ backgroundImage: `url(${pImage1})` }}>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Featured</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Sales</button>
                                    {/* <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Active</button> */}
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-end backdrop-brightness-50 py-2 px-3 rounded-lg'>
                                <div className='flex justify-start items-center gap-2'>
                                    <FaMapMarkerAlt className='size-5 text-white' />
                                    <p className='text-white text-xs'>New York City, New York</p>
                                </div>
                                <div className='flex justify-center items-center gap-5'>
                                    <FaCamera className='size-5 text-white' />
                                    <FaVideo className='size-5 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                            <h4 className='text-lg text-black'>Redfin Premier sales</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ 500.00</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, cupiditate?</p>
                            <div className='flex justify-center items-start gap-4'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBath className='text-red-400 size-5' />
                                    <p>3</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBed className='text-red-400 size-5' />
                                    <p>4</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaThList className='text-red-400 size-4' />
                                    <p>300 sq ft</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                            <div className='w-full flex justify-between items-center mt-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaUserCircle className='text-red-400 size-5'/>
                                    <p>Adam Smith</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaShareAlt className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaHeart className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaPlus className='text-red-400 size-3'/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl'>
                        <div className='h-[200px] bg-cover bg-center p-4 rounded-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between items-end' style={{ backgroundImage: `url(${pImage2})` }}>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Featured</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Sales</button>
                                    {/* <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Active</button> */}
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-end backdrop-brightness-50 py-2 px-3 rounded-lg'>
                                <div className='flex justify-start items-center gap-2'>
                                    <FaMapMarkerAlt className='size-5 text-white' />
                                    <p className='text-white text-xs'>Los Angeles, California</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaCamera className='size-5 text-white' />
                                    <FaVideo className='size-5 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                            <h4 className='text-lg text-black'>Redfin Premier sales</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ 500.00</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, cupiditate?</p>
                            <div className='flex justify-center items-start gap-4'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBath className='text-red-400 size-5' />
                                    <p>3</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBed className='text-red-400 size-5' />
                                    <p>4</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaThList className='text-red-400 size-4' />
                                    <p>300 sq ft</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                            <div className='w-full flex justify-between items-center mt-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaUserCircle className='text-red-400 size-5'/>
                                    <p>Adam Smith</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaShareAlt className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaHeart className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaPlus className='text-red-400 size-3'/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl'>
                        <div className='h-[200px] bg-cover bg-center p-4 rounded-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col justify-between items-end' style={{ backgroundImage: `url(${pImage3})` }}>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Featured</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Sales</button>
                                    {/* <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition duration-300 ease-in-out'>Active</button> */}
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-end backdrop-brightness-50 py-2 px-3 rounded-lg'>
                                <div className='flex justify-start items-center gap-2'>
                                    <FaMapMarkerAlt className='size-5 text-white' />
                                    <p className='text-white text-xs'>Chicago, Illinois</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaCamera className='size-5 text-white' />
                                    <FaVideo className='size-5 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                            <h4 className='text-lg text-black'>Redfin Premier sales</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ 500.00</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, cupiditate?</p>
                            <div className='flex justify-center items-start gap-4'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBath className='text-red-400 size-5' />
                                    <p>3</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaBed className='text-red-400 size-5' />
                                    <p>4</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaThList className='text-red-400 size-4' />
                                    <p>300 sq ft</p>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                            <div className='w-full flex justify-between items-center mt-2'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaUserCircle className='text-red-400 size-5'/>
                                    <p>Adam Smith</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaShareAlt className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaHeart className='text-red-400 size-3'/> 
                                    </div>
                                    <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                        <FaPlus className='text-red-400 size-3'/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end mt-5'>
                    <button className='sm:px-6 sm:py-3 py-2 px-4 border border-red-600 text-black mt-7 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out rounded-full'>See More...</button>
                </div>
            </div>
        </div>
    );
};

export default Properties;