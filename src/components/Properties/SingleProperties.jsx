import { FaMapMarkerAlt, FaPhone, FaBath, FaBed, FaThList, FaUserCircle } from "react-icons/fa";
import { property } from '../data.js';
import { useParams } from 'react-router-dom';
import SubHeader from './../Header/SubHeader';
import googleMap2 from '../../assets/images/Google Map2.jpg';
import LatestProperties from './../Home/LatestProperties';
import { useState } from "react";

const SingleProperties = () => {

    const { id } = useParams()
    const AllPropertys = property;
    const items = AllPropertys.find(data => data.id == id)
    const { images, address, contact, name, price, about, bed, bath, area, owner } = items;

    const [chnageImg, setChangeImg] = useState(images[0].img);

    return (
        <>  <SubHeader />
            <div className='container mx-auto w-[85%] sm:w-[100%] py-20 flex flex-col gap-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 justify-center gap-5'>
                    <img className="w-full" src={chnageImg} alt="" />
                    <div className='grid grid-cols-4 sm:grid-cols-2 justify-center items-center gap-3'>

                        {
                            images.map((img, index) => {
                                return (

                                    <img key={index}
                                        onClick={() => setChangeImg(img.img)}
                                        className="cursor-pointer hover:brightness-50 transition-all"
                                        src={img.img}
                                        alt="image" />
                                )
                            })
                        }
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-10">
                    <div className='w-full flex flex-col justify-center items-start gap-10'>
                        <div className="flex flex-col items-start gap-5">
                            <h4 className='text-2xl sm:text-3xl text-black'>{name}</h4>
                            <h3 className='text-xl font-bold text-red-600'>$ {price}</h3>
                        </div>
                        <table className="min-w-full table-auto border">
                            <thead>
                                <tr className="">
                                    <th scope="col" className="px-6 py-4 border border-slate-400">
                                        <FaBath className='text-red-400 size-6' />
                                    </th>
                                    <th scope="col" className="px-6 py-4 border border-slate-400">
                                        <FaBed className='text-red-400 size-6' />
                                    </th>
                                    <th scope="col" className="px-6 py-4 border border-slate-400">
                                        <FaThList className='text-red-400 size-5' />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="whitespace-nowrap px-6 py-4 border border-slate-400">
                                        <p>{bed}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 border border-slate-400">
                                        <p>{bath}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 border border-slate-400">
                                        <p>{area}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex flex-col gap-5 mt-2">
                            <h1 className="text-2xl sm:text-3xl">About This Home</h1>
                            <p className="text-[18px] sm:text-xl text-justify font-light">{about}</p>
                        </div>
                        <table className="min-w-full border">
                            <thead>
                                <tr className="">
                                    <th scope="col" className="px-6 py-4 border border-slate-400">
                                        <FaUserCircle className='size-6' />
                                    </th>
                                    <th scope="col" className="px-6 py-4 border border-slate-400">
                                        <FaMapMarkerAlt className="size-6" />
                                    </th>
                                    <th scope="col" className="px-6 py-4 border border-slate-400">
                                        <FaPhone className="size-5" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="px-6 py-4 border border-slate-400">
                                        <p>{owner}</p>
                                    </td>
                                    <td className="px-6 py-4 border border-slate-400">
                                        <p>{address}</p>
                                    </td>
                                    <td className="px-6 py-4 border border-slate-400">
                                        <p>{contact}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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