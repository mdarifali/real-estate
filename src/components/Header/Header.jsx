import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import image1 from "../../assets/images/card image1.jpg";
import image2 from "../../assets/images/card image1.jpg";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [favOpen, setFavOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const toggleClose = () => {
        setIsOpen(false)
    }


    return (
        <nav className="w-full absolute z-50 ">
            <div className="container mx-auto w-[95%] sm:w-3/4 md:w-[95%]">
                <div className="relative flex items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden md:flex lg:hidden" onClick={toggleOpen}>
                        {/* <!-- Mobile menu button--> */}

                        {
                            isOpen ?

                                <button type="button" className="relative inline-flex items-center justify-center p-2 border text-white hover:text-red-400 transition focus:outline-none">
                                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>

                                :

                                <button type="button" className="relative inline-flex items-center justify-center p-2 border text-white hover:text-red-400 transition focus:outline-none">
                                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                        }


                    </div>
                    <div className="flex py-3 flex-1 items-center sm:justify-between">
                        <div className="flex items-start">
                            <Link to="/">
                                <img className="h-16 sm:h-20 w-auto" src={logo} alt="Your Company logo" />
                            </Link>
                        </div>
                        <div className="hidden lg:block md:hidden sm:ml-6 items-center ">
                            <div className="flex space-x-4 items-center justify-center ">
                                <Link to="/" className="text-white hover:text-black transition uppercase px-3 font-normal tracking-wider">Home</Link>
                                <Link to="/propertis" className="text-white hover:text-black transition uppercase px-3 font-normal tracking-wider">Properties</Link>
                                <Link to="/services" className="text-white hover:text-black transition uppercase px-3 font-normal tracking-wider">Services</Link>
                                <Link to="/about" className="text-white hover:text-black transition uppercase px-3 font-normal tracking-wider">About</Link>
                                <Link to="/contact" className="text-white hover:text-black transition uppercase px-3 font-normal tracking-wider">Contact</Link>
                            </div>
                        </div>
                        <div className="absolute right-[67px] sm:right-0 md:right-[67px] lg:right-0 sm:relative md:absolute lg:relative flex justify-between items-center gap-5">
                            <div className="cursor-pointer" onClick={() => { setFavOpen(!favOpen) }}>
                                <span className="hidden sm:block md:hidden lg:block text-white hover:text-black transition uppercase px-3 font-normal tracking-wider">Favorites</span>
                                <div className="sm:hidden md:block lg:hidden p-2 border cursor-pointer">
                                    <FaHeart className="text-white hover:text-red-400 transition-all size-7" />
                                </div>
                                {
                                    favOpen &&
                                    <div className="bg-white fixed top-0 right-0 z-40 h-screen w-full sm:w-[400px] p-4 overflow-y-auto transition-all">
                                        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-red-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close menu</span>
                                        </button>
                                        {/* Offcanvas body section */}
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
                                    </div>
                                }
                            </div>
                            <div>
                                <Link to="/login" className="hidden sm:block md:hidden lg:block text-white hover:text-black transition uppercase font-normal tracking-wider">Login</Link>
                                <Link to="/login">
                                    <div className="sm:hidden md:block lg:hidden p-2 border">
                                        <FaUserCircle className="text-white hover:text-red-400 transition-all size-7" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isOpen ? 'hidden' : 'block'} ${isOpen ? 'md:hidden' : 'md:block'} sm:block md:block lg:hidden sm:w-3/4 md:w-full bg-slate-200`} onClick={toggleClose}>
                <div className="space-y-1 px-2 pb-8 pt-8">
                    <Link to="#" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md px-3 py-2 text-base uppercase font-normal">Home</Link>
                    <Link to="/propertis" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md px-3 py-2 text-base uppercase font-normal">Properties</Link>
                    <Link to="/services" className="text-black hover:bg-gray-700 uppercase hover:text-white transition block rounded-md px-3 py-2 text-base font-normal">Services</Link>
                    <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md uppercase px-3 py-2 text-base font-normal">About</Link>
                    <Link to="/contact" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md px-3 py-2 text-base uppercase font-normal">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;