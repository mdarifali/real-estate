import { FaMapMarkerAlt, FaCamera, FaVideo, FaBath, FaBed, FaThList, FaUserCircle, FaShareAlt, FaHeart, FaPlus } from "react-icons/fa";
import { property } from "../../components/data.js";


const AllProperties = () => {
    return (
        <div className="">
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className='mb-10'>
                    <h5 className='tracking-wider text-[20px] mb-5 text-red-500'>PROPERTIES</h5>
                    <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Explore The Latest</h2>
                </div>
                <div className="w-full grid-cols-1 grid sm:grid-cols-3 justify-center items-center gap-8">
                    {
                        property.map((card) => {
                            return (
                                <div key={card.id} className='shadow-xl'>
                                    <div className='h-[270px] bg-cover bg-center p-4 rounded-xl flex flex-col justify-between items-end ' style={{ backgroundImage: `url(${card.images})` }}>
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
                                                <p className='text-white text-xs'>{card.address}</p>
                                            </div>
                                            <div className='flex justify-center items-center gap-5'>
                                                <FaCamera className='size-5 text-white' />
                                                <FaVideo className='size-5 text-white' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                                        <h4 className='text-lg text-black'>{card.name}</h4>
                                        <h3 className='text-xl font-bold text-red-600'>$ {card.price}</h3>
                                        <p>{card.about}</p>
                                        <div className='flex justify-center items-start gap-4 mt-2'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <FaBath className='text-red-400 size-5' />
                                                <p>{card.bath}</p>
                                            </div>
                                            <div className='flex justify-center items-center gap-2'>
                                                <FaBed className='text-red-400 size-5' />
                                                <p>{card.bed}</p>
                                            </div>
                                            <div className='flex justify-center items-center gap-2'>
                                                <FaThList className='text-red-400 size-4' />
                                                <p>{card.area}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-[1px] bg-gray-200 mt-5'></div>
                                        <div className='w-full flex justify-between items-center mt-2'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <FaUserCircle className='text-red-400 size-5' />
                                                <p>{card.owner}</p>
                                            </div>
                                            <div className='flex justify-center items-center gap-2'>
                                                <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                                    <FaShareAlt className='text-red-400 size-3' />
                                                </div>
                                                <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                                    <FaHeart className='text-red-400 size-3' />
                                                </div>
                                                <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                                    <FaPlus className='text-red-400 size-3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='flex justify-end mt-5'>
                    <button className='sm:px-6 sm:py-3 py-2 px-4 border border-red-600 text-black mt-7 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out rounded-full'>See More...</button>
                </div>
            </div>
        </div>
    );
};

export default AllProperties;