import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import image1 from "../../assets/images/card image1.jpg";
import image2 from "../../assets/images/card image1.jpg";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const SubHeader = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [favOpen, setFavOpen] = useState(false);

    return (
        <nav className="w-full bg-slate-700 shadow-md">
            <div className="container mx-auto w-[95%] sm:w-3/4 md:w-[95%]">
                <div className="relative flex items-center justify-between">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute inset-y-0 right-0 flex items-center sm:hidden md:flex lg:hidden">
                        {/*Mobile menu button*/}

                        {
                            isOpen ?

                                <button type="button" className="relative inline-flex items-center justify-center p-2 border rounded-full text-white hover:bg-red-500 hover:border-red-500 transition-all focus:outline-none">
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>

                                :

                                <button type="button" className="relative inline-flex items-center justify-center p-2 border  rounded-full text-white hover:bg-red-500 hover:border-red-500 transition-all focus:outline-none">
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                        }


                    </div>
                    <div className="flex py-3 flex-1 items-center sm:justify-between">
                        {/* navbar logo */}
                        <div className="flex items-start">
                            <Link to="/">
                                <img className="h-16 sm:h-20 w-auto" src={logo} alt="Your Company logo" />
                            </Link>
                        </div>

                        {/* desktop menu items */}
                        <div className="hidden lg:block md:hidden sm:ml-6 items-center ">
                            <div className="flex space-x-4 items-center justify-center ">
                                <Link to="/" className="text-white hover:text-red-500 transition-all uppercase px-3 font-normal tracking-wider">Home</Link>
                                <Link to="/propertis" className="text-white hover:text-red-500 transition-all uppercase px-3 font-normal tracking-wider">Properties</Link>
                                <Link to="/services" className="text-white hover:text-red-500 transition-all uppercase px-3 font-normal tracking-wider">Services</Link>
                                <Link to="/about" className="text-white hover:text-red-500 transition-all uppercase px-3 font-normal tracking-wider">About</Link>
                                <Link to="/contact" className="text-white hover:text-red-500 transition-all uppercase px-3 font-normal tracking-wider">Contact</Link>
                            </div>
                        </div>
                        <div className="absolute right-[55px] sm:right-0 md:right-[67px] lg:right-0 sm:relative md:absolute lg:relative flex justify-between items-center gap-3">
                            <div className="cursor-pointer" onClick={() => { setFavOpen(!favOpen) }}  >
                                <div className="hidden lg:flex md:flex items-center justify-center px-3 gap-2 p-2 border rounded-full hover:bg-red-500 hover:border-red-500 transition-all">
                                    <FaHeart className="text-white size-4 sm:size-4" />
                                    <span className="text-white uppercase text-sm sm:text-base tracking-wider">Favorites</span>
                                </div>

                                <div className="sm:hidden p-2 cursor-pointer border rounded-full hover:bg-red-500 hover:border-red-500 transition-all">
                                    <FaHeart className="text-white size-6" />
                                </div>
                            </div>

                            <div>
                                <div className="hidden lg:flex md:flex items-center justify-center px-3 gap-2 p-2 border rounded-full hover:bg-red-500 hover:border-red-500 transition-all">
                                    <FaUserCircle className="text-white size-4 sm:size-4" />
                                    <Link to="/login" className=" text-white uppercase text-sm sm:text-base tracking-wider">Login</Link>
                                </div>

                                <Link to="/login">
                                    <div className="sm:hidden p-2 cursor-pointer border rounded-full hover:bg-red-500 hover:border-red-500 transition-all">
                                        <FaUserCircle className="text-white size-6" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile menu items start */}
            <div
                className={`${isOpen ? 'lg:translate-x-full' : 'lg:-translate-x-full'} ${isOpen && '-translate-x-full'} ${isOpen && 'md:-translate-x-full'} left-0 fixed z-50 h-screen w-full bg-black transition-all delay-150 duration-200`}>
                <div className="space-y-1 px-2 pb-8 pt-8 text-center">
                    <Link to="#" className="text-white hover:bg-red-500 hover:scale-110 transition-all block px-3 py-2 text-base uppercase font-normal">Home</Link>
                    <Link to="/propertis" className="text-white hover:bg-red-500 hover:scale-110 transition-all block px-3 py-2 text-base uppercase font-normal">Properties</Link>
                    <Link to="/services" className="text-white hover:bg-red-500 hover:scale-110 uppercase transition-all block px-3 py-2 text-base font-normal">Services</Link>
                    <Link to="/about" className="text-white hover:bg-red-500 hover:scale-110 transition-all block uppercase px-3 py-2 text-base font-normal">About</Link>
                    <Link to="/contact" className="text-white hover:bg-red-500 hover:scale-110 transition-all block px-3 py-2 text-base uppercase font-normal">Contact</Link>
                </div>
            </div>
            {/* mobile menu items end*/}
            {/* favorites offcanvas section start*/}
            {/* <div className={`${!favOpen && "-translate-x-full"} bg-white fixed top-0 right-[-0] sm:right-[-400px] z-40 h-screen w-full sm:w-[400px] p-4 transition-all delay-150 duration-200`}>
                <div className="p-2 flex justify-end">
                    <button onClick={() => { setFavOpen(!favOpen) }} type="button" className="text-black transition focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-4">
                    <div className="flex flex-col justify-center item-start gap-5 my-10">
                        <h3 className="text-xl font-semibold mb-5">Favorites Property </h3>
                        <div className="flex justify-start items-center gap-5 shadow-sm p-5 hover:shadow-2xl transition">
                            <img src={image1} className="w-[90px] rounded-lg" alt="image" />
                            <div>
                                <h2 className="text-sm mb-2">Brand New House</h2>
                                <p className="font-medium">$ 400.00</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-5 shadow-sm p-5 hover:shadow-2xl transition">
                            <img src={image2} className="w-[90px] rounded-lg" alt="image" />
                            <div>
                                <h2 className="text-sm ">Brand New House</h2>
                                <p className="font-medium">$ 400.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* favorites offcanvas section end*/}
        </nav>
    );
};

export default SubHeader;