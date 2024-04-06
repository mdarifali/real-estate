/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import SubHeader from "../Header/SubHeader";
import logo from "../../assets/images/Logo.png";


const Register = () => {
    return (
        <>  <SubHeader />
            <div className="h-screen">
                <div className="container mx-auto w-[85%] sm:w-3/4 md:w-[95%] py-20">
                    <div className="flex justify-center items-center">
                        <form className='max-w-[500px] bg-slate-200 py-10 px-10'>
                            <div className="flex justify-center mb-14">
                                <img className="w-[110px]" src={logo} alt="" />
                            </div>
                            <input className="w-[100%] border-b-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="text" placeholder="Full Name" required />
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="email" placeholder="Your Email" required />
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="text" placeholder="Phone Number" required />
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="password" placeholder="Password" required />
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none" type="password" placeholder="Confirm Password" required />
                            <button className='w-full text-md font-semibold py-4 my-10 bg-red-600 text-white hover:bg-black transition uppercase'>Submit</button>
                            <div className='flex justify-center'>
                                <Link to="/login">
                                    <p className='font-semibold text-gray-500 hover:text-red-400'>Already have an account</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;