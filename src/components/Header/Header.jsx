import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import image1 from "../../assets/images/card image1.jpg";
import image2 from "../../assets/images/card image1.jpg";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebaseAuthToken";
import { signOut } from "firebase/auth";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };

    return (
        <nav className="w-full absolute z-50">
            <div className="container mx-auto w-[95%] sm:w-3/4">
                <div className="relative flex items-center justify-between">
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute inset-y-0 right-0 flex items-center sm:hidden md:flex lg:hidden">
                        {/*Mobile menu button*/}

                        {
                            isOpen ?

                                <button type="button" className="relative inline-flex items-center justify-center p-2 border  rounded-full text-white hover:bg-red-500 hover:border-red-500 transition-all focus:outline-none">
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                :
                                <button type="button" className="relative inline-flex items-center justify-center p-2 border rounded-full text-white hover:bg-red-500 hover:border-red-500 transition-all focus:outline-none">
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
                            {/* favorites dropdown menu start*/}
                            <div className="dropdown dropdown-bottom" >
                                {
                                    user ?

                                        <div className="p-2 border rounded-full hover:bg-red-500 hover:border-red-500 transition-all" tabIndex={0} role="button">
                                            <FaHeart className="text-white size-6" />
                                        </div>

                                        :

                                        <>
                                            <div className="hidden lg:flex md:flex items-center justify-center px-3 gap-2 p-2 border rounded-full hover:bg-red-500 hover:border-red-500 transition-all" tabIndex={0} role="button">
                                                <FaHeart className="text-white size-4" />
                                                <span className="text-white uppercase text-base tracking-wider mb-1">Favorites</span>
                                            </div>
                                            <div className="sm:hidden p-2 cursor-pointer border rounded-full hover:bg-red-500 hover:border-red-500 transition-all" tabIndex={0} role="button">
                                                <FaHeart className="text-white size-6" />
                                            </div>
                                        </>
                                }
                                <div tabIndex={0} className="dropdown-content z-[1] card rounded-none border card-compact w-[400px] p-2 mt-5 shadow bg-white left-[-240px]">
                                    <div className="card-body">
                                        <div className="p-4">
                                            <div className="flex flex-col justify-center item-start gap-5 my-5">
                                                <h3 className="text-xl text-center text-black mb-5">Favorites Property </h3>
                                                <div className="flex bg-white justify-start items-center gap-5 p-5 hover:shadow-2xl transition-all rounded-sm">
                                                    <img src={image1} className="w-[90px] rounded-lg" alt="image" />
                                                    <div>
                                                        <h2 className="text-sm mb-2">Brand New House</h2>
                                                        <p className="font-medium">$ 400.00</p>
                                                    </div>
                                                    <div className="tooltip tooltip-right tooltip-error" data-tip="Delete">
                                                        <button><MdClose className="text-2xl hover:text-red-600" /></button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="flex bg-white justify-start items-center gap-5 p-5 hover:shadow-2xl transition-all rounded-sm">
                                                    <img src={image2} className="w-[90px] rounded-lg" alt="image" />
                                                    <div>
                                                        <h2 className="text-sm ">Brand New House</h2>
                                                        <p className="font-medium">$ 400.00</p>
                                                    </div>
                                                    <div className="tooltip tooltip-right tooltip-error" data-tip="Delete">
                                                        <button><MdClose className="text-2xl hover:text-red-600" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* favorites dropdown menu end*/}

                            <div className="cursor-pointer">


                                {
                                    user ?
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button">
                                                <div className="p-2 mt-1 border rounded-full hover:bg-red-500 hover:border-red-500 transition-all">
                                                    <FaUserCircle className="text-white size-6" />
                                                </div>
                                            </div>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-5 shadow bg-white w-52">
                                                <li>
                                                    <a className="justify-between">
                                                        Profile
                                                        <span className="badge">New</span>
                                                    </a>
                                                </li>
                                                <li><Link to='/admin'>Admin</Link></li>
                                                <li onClick={logout}><a>Logout</a></li>
                                            </ul>
                                        </div>

                                        :

                                        <>
                                            <Link to="/login">
                                                <div className="hidden lg:flex md:flex items-center justify-center px-3 gap-2 p-2 border rounded-full hover:bg-red-500 hover:border-red-500 transition-all">
                                                    <FaUserCircle className="text-white size-4" />
                                                    <span className=" text-white uppercase text-base tracking-wider mb-1">Login</span>
                                                </div>
                                            </Link>
                                            <Link to="/login">
                                                <div className="sm:hidden p-2 cursor-pointer border rounded-full hover:bg-red-500 hover:border-red-500 transition-all">
                                                    <FaUserCircle className="text-white size-6" />
                                                </div>
                                            </Link>
                                        </>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile menu items start*/}
            <div
                className={`${!isOpen ? 'hidden' : 'block'} z-50 w-full bg-[#151515] transition-all delay-150 duration-200`}>
                <div className="space-y-2 px-2 pb-8 pt-8 text-center">
                    <Link to="/" className="text-white hover:bg-red-500 transition-all block px-3 py-2 text-base uppercase font-normal">Home</Link>
                    <Link to="/propertis" className="text-white hover:bg-red-500 transition-all block px-3 py-2 text-base uppercase font-normal">Properties</Link>
                    <Link to="/services" className="text-white hover:bg-red-500 uppercase transition-all block px-3 py-2 text-base font-normal">Services</Link>
                    <Link to="/about" className="text-white hover:bg-red-500 transition-all block uppercase px-3 py-2 text-base font-normal">About</Link>
                    <Link to="/contact" className="text-white hover:bg-red-500 transition-all block px-3 py-2 text-base uppercase font-normal">Contact</Link>
                </div>
            </div>
            {/* mobile menu items end*/}

        </nav>
    );
};

export default Header;