import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { useState } from "react";

const SubHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const toggleClose = () => {
        setIsOpen(false)
    }


    return (
        <nav className="w-full bg-slate-200">
            <div className="container mx-auto w-[95%] sm:w-3/4">
                <div className="relative flex items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" onClick={toggleOpen}>
                        {/* <!-- Mobile menu button--> */}

                        {
                            isOpen ?
                                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 bg-black text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                :
                                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 bg-black text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>

                        }


                    </div>
                    <div className="flex py-5 flex-1 items-center justify-end sm:justify-between">
                        <div className="flex items-center">
                            <Link to="/">
                                <img className="h-16 sm:h-24 w-auto" src={logo} alt="Your Company logo" />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 items-center sm:block">
                            <div className="flex space-x-4 ">
                                <Link to="/" className="text-black hover:text-red-600 uppercase rounded-md px-3 font-semibold tracking-wider">Home</Link>
                                <Link to="/propertis" className="text-black hover:text-red-600 uppercase rounded-md px-3 font-semibold tracking-wider">Properties</Link>
                                <Link to="/services" className="text-black hover:text-red-600 uppercase rounded-md px-3 font-semibold tracking-wider">Services</Link>
                                <Link to="/about" className="text-black hover:text-red-600 uppercase rounded-md px-3 font-semibold tracking-wider">About</Link>
                                <Link to="/contact" className="text-black hover:text-red-600 uppercase rounded-md px-3 font-semibold tracking-wider">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden sm:w-3/4 bg-slate-200`} onClick={toggleClose}>
                <div className="space-y-1 px-2 pb-8 pt-8">
                    <Link to="#" className="text-black  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base uppercase font-semibold">Home</Link>
                    <Link to="/propertis" className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base uppercase font-semibold">Properties</Link>
                    <Link to="/services" className="text-black hover:bg-gray-700 uppercase hover:text-white block rounded-md px-3 py-2 text-base font-semibold">Services</Link>
                    <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white block rounded-md uppercase px-3 py-2 text-base font-semibold">About</Link>
                    <Link to="/contact" className="text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base uppercase font-semibold">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default SubHeader;