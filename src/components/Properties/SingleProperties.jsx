import { FaMapMarkerAlt, FaPhone, FaBath, FaBed, FaThList, FaUserCircle, FaShareAlt, FaHeart, FaPlus } from "react-icons/fa";
import { property } from '../data.js';
import { useParams } from 'react-router-dom';
import SubHeader from './../Header/SubHeader';
import googleMap2 from '../../assets/images/Google Map2.jpg';
import LatestProperties from './../Home/LatestProperties';

const SingleProperties = () => {

    const { id } = useParams()
    const AllPropertys = property;
    const items = AllPropertys.find(data => data.id == id)
    const { images, address, contact, name, price, about, bed, bath, area, owner } = items;

    return (
        <>  <SubHeader />
            <div className='container mx-auto w-[85%] sm:w-3/4 py-20 flex flex-col gap-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5'>
                    <img src={images} alt="" />
                    <div className='grid grid-cols-4 sm:grid-cols-2 justify-center items-center gap-3 p-0 sm:p-3'>
                        <img src={images} alt="" />
                        <img src={images} alt="" />
                        <img src={images} alt="" />
                        <img src={images} alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className='w-full flex flex-col justify-center items-start gap-5'>
                        <div className="flex flex-col items-start gap-5">
                            <h4 className='text-3xl text-black'>{name}</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ {price}</h3>
                        </div>
                        <div className='flex justify-center items-start gap-4 mt-2'>
                            <div className='flex justify-center items-center gap-2'>
                                <FaBath className='text-red-400 size-6' />
                                <p>{bath}</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <FaBed className='text-red-400 size-6' />
                                <p>{bed}</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <FaThList className='text-red-400 size-5' />
                                <p>{area}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 mt-2">
                            <h1 className="text-3xl">About This Home</h1>
                            <p className="text-xl text-justify font-light">{about}</p>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-gray-200 mt-3 mb-2 sm:hidden'></div>
                    <div className='w-full flex flex-col items-start gap-5'>
                        <div className='flex justify-center items-center gap-2'>
                            <FaUserCircle className='size-8' />
                            <p className="tracking-wider font-semibold text-2xl">{owner}</p>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <FaMapMarkerAlt className="size-5" />
                            <h3 className="text-xl">{address}</h3>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <FaPhone className="size-5" />
                            <h3 className="text-xl">{contact}</h3>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                <FaShareAlt className='text-red-400 size-4' />
                            </div>
                            <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                <FaHeart className='text-red-400 size-4' />
                            </div>
                            <div className='p-2 border-2 border-gray-200 cursor-pointer hover:bg-black  transition duration-300 ease-in-out'>
                                <FaPlus className='text-red-400 size-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start gap-5">
                    <h1 className="text-3xl">Map</h1>
                    <img src={googleMap2} alt="" />
                </div>
            </div>
            <LatestProperties />
        </>
    );
};

export default SingleProperties;