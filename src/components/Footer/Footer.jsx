import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import logo from '../../assets/images/Logo.png';
import image1 from '../../assets/images/card image1.jpg';
import image2 from '../../assets/images/card image2.jpg';

const Footer = () => {
    return (
        <div className="">
            <footer className="container mx-auto w-[85%] sm:w-3/4 py-16 border-t-2">
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-10">
                    <div className="flex flex-col justify-center item-start gap-5">
                        <img src={logo} className="w-[120px]" alt="site-logo" />
                        <p className="text-slate-600 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt modi ullam illo nam, voluptates ab.</p>
                        <div className="flex flex-col justify-center item-start gap-5">
                            <div className="flex justify-start items-start gap-3 mt-2">
                                <div className="p-2 rounded-2xl bg-black hover:bg-red-500 transition cursor-pointer hover:scale-110">
                                    <FaFacebookF className="size-4 text-white" />
                                </div>
                                <div className="p-2 rounded-2xl bg-black hover:bg-red-500 transition cursor-pointer hover:scale-110">
                                    <FaTwitter className="size-4 text-white" />
                                </div>
                                <div className="p-2 rounded-2xl bg-black hover:bg-red-500 transition cursor-pointer hover:scale-110">
                                    <FaLinkedinIn className="size-4 text-white" />
                                </div>
                                <div className="p-2 rounded-2xl bg-black hover:bg-red-500 transition cursor-pointer hover:scale-110">
                                    <FaYoutube className="size-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center item-start gap-5">
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                        <div className="flex justify-start items-center gap-2">
                            <div className="p-2 bg-black rounded-full">
                                <FaMapMarkerAlt className="text-white size-4" />
                            </div>
                            <p className="text-slate-600">26908 Skye Falls Apt. 969, USA</p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="p-2 bg-black rounded-full">
                                <IoIosMailOpen className="text-white size-4" />
                            </div>
                            <p className="text-slate-600">company@mail.com</p>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <div className="p-2 bg-black rounded-full">
                                <FaPhoneAlt className="text-white size-4" />
                            </div>
                            <p className="text-slate-600">623.392.4959</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center item-start gap-5">
                        <h3 className="text-2xl font-semibold">Latest Properties</h3>
                        <div className="flex justify-start items-center gap-5">
                            <img src={image1} className="w-[100px] rounded-lg" alt="image" />
                            <div>
                                <h2 className="text-[20px] mb-2">Brand New House</h2>
                                <p className="font-medium">$ 400.00</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-5">
                            <img src={image2} className="w-[100px] rounded-lg" alt="image" />
                            <div>
                                <h2 className="text-[20px]">Brand New House</h2>
                                <p className="font-medium">$ 400.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-slate-200 p-5 flex justify-center item-center gap-5">
                <h1 className="text-black tracking-wider text-justify font-thin text-sm">Copyright @  2024 Real Estate | Rights Reserved <span className="font-bold">ARIF ALI</span></h1>
            </div>
            
        </div>
    );
};

export default Footer;