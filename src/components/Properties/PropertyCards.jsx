/* eslint-disable react/prop-types */
import { FaMapMarkerAlt, FaCamera, FaVideo, FaBath, FaBed, FaThList, FaUserCircle, FaShareAlt, FaHeart, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const PropertyCards = ({ card }) => {

    const { images, address, name, price, about, bed, bath, area, owner } = card;

    return (

        <div className='shadow-xl'>
            <Link to={`/property/${card.id}`}>
                <div className='h-[270px] bg-cover bg-center p-4 rounded-xl flex flex-col justify-between items-end' style={{ backgroundImage: `url(${images[0].img})` }}>
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
                            <p className='text-white text-xs'>{address}</p>
                        </div>
                        <div className='flex justify-center items-center gap-5'>
                            <FaCamera className='size-5 text-white' />
                            <FaVideo className='size-5 text-white' />
                        </div>
                    </div>
                </div>
            </Link>
            <div className='w-full p-4 flex flex-col justify-center items-start gap-2'>
                <h4 className='text-lg text-black'>{name}</h4>
                <h3 className='text-xl font-bold text-red-600'>$ {price}</h3>
                <p>{about.slice(0, 90)}</p>
                <div className='flex justify-center items-start gap-4 mt-2'>
                    <div className='flex justify-center items-center gap-2'>
                        <FaBath className='text-red-400 size-5' />
                        <p>{bath}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <FaBed className='text-red-400 size-5' />
                        <p>{bed}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <FaThList className='text-red-400 size-4' />
                        <p>{area}</p>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-200 mt-5'></div>
                <div className='w-full flex justify-between items-center mt-2'>
                    <div className='flex justify-center items-center gap-2'>
                        <FaUserCircle className='text-red-400 size-5' />
                        <p>{owner}</p>
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
    );
};

export default PropertyCards;