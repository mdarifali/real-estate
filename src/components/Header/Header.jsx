import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import cardImage from "../../assets/images/about-image.jpg"
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, SetDropdownOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const toggleClose = () => {
        setIsOpen(false)
    }


    return (
        <nav className="w-full absolute z-50 ">
            <div className="container mx-auto w-[95%] sm:w-3/4">
                <div className="relative flex items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden" onClick={toggleOpen}>
                        {/* <!-- Mobile menu button--> */}

                        {
                            isOpen ?
                                <button type="button" className="relative inline-flex items-center justify-center p-2 border text-white hover:text-red-400 transition focus:outline-none">
                                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                :
                                <button type="button" className="relative inline-flex items-center justify-center p-2 border text-white hover:text-red-400 transition focus:outline-none">
                                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>

                        }


                    </div>
                    <div className="flex py-3 sm flex-1 items-center sm:justify-between">
                        <div className="flex items-start">
                            <Link to="/">
                                <img className="h-16 sm:h-20 w-auto" src={logo} alt="Your Company logo" />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 items-center sm:block">
                            <div className="flex space-x-4 items-center justify-center relative">
                                <Link to="/" className="text-white hover:text-black transition uppercase px-3 font-semibold tracking-wider">Home</Link>
                                <Link to="/propertis" className="text-white hover:text-black transition uppercase px-3 font-semibold tracking-wider">Properties</Link>
                                <Link to="/services" className="text-white hover:text-black transition uppercase px-3 font-semibold tracking-wider">Services</Link>
                                <Link to="/about" className="text-white hover:text-black transition uppercase px-3 font-semibold tracking-wider">About</Link>
                                <Link to="/contact" className="text-white hover:text-black transition uppercase px-3 font-semibold tracking-wider">Contact</Link>
                            </div>
                        </div>
                        <div className="absolute right-[67px] sm:right-0 sm:relative flex justify-between items-center gap-5">

                            <div onClick={() => { SetDropdownOpen(!dropdownOpen) }} id="dropdown-icon">
                                <span className="hidden sm:block text-white hover:text-black transition uppercase px-3 font-semibold tracking-wider">Favorites</span>
                                <div className="block sm:hidden p-2 border cursor-pointer">
                                    <FaHeart className="text-white hover:text-red-400 transition-all size-7" />
                                    {
                                        dropdownOpen && <div id="dropdown-box" className="h-[200px] w-auto p-6 bg-slate-200 absolute top-12 right-1">
                                            <div className="flex items-center">
                                                <img src={cardImage} className="w-[90px]" alt="" />
                                                <h4>Lorem ipsum dolor sit amet.</h4>
                                                <p>$900</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div>
                                <Link to="#" className="hidden sm:block text-white hover:text-black transition uppercase font-semibold tracking-wider">Login/Register</Link>
                                <div className="block sm:hidden p-2 border cursor-pointer">
                                    <FaUserCircle className="text-white hover:text-red-400 transition-all size-7"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden sm:w-3/4 bg-slate-200`} onClick={toggleClose}>
                <div className="space-y-1 px-2 pb-8 pt-8">
                    <Link to="#" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md px-3 py-2 text-base uppercase font-semibold">Home</Link>
                    <Link to="/propertis" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md px-3 py-2 text-base uppercase font-semibold">Properties</Link>
                    <Link to="/services" className="text-black hover:bg-gray-700 uppercase hover:text-white transition block rounded-md px-3 py-2 text-base font-semibold">Services</Link>
                    <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md uppercase px-3 py-2 text-base font-semibold">About</Link>
                    <Link to="/contact" className="text-black hover:bg-gray-700 hover:text-white transition block rounded-md px-3 py-2 text-base uppercase font-semibold">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;