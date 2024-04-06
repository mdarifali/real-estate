/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import SubHeader from './../Header/SubHeader';
import logo from "../../assets/images/Logo.png";

const Login = () => {
    return (
        <>  <SubHeader />
            <div className="h-screen">
                <div className="container mx-auto w-[85%] sm:w-3/4 md:w-[95%] py-20">
                    <div className="flex justify-center items-center">
                        <form className='max-w-[500px] bg-slate-200 py-16 px-10'>
                            <div className="flex justify-center mb-14">
                                <img className="w-[110px]" src={logo} alt="" />
                            </div>
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="email" placeholder="Your Email" required />
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="password" placeholder="Enter Password" required />
                            <div className='flex gap-1 items-center justify-start'>
                                <input type="checkbox" id="remember"/>
                                <label className='text-gray-600' htmlFor="remember">Remember Me</label>
                            </div>
                            <button className='w-full text-md font-semibold py-4 my-10 bg-red-600 text-white hover:bg-black transition uppercase'>Login</button>
                            <div className='flex justify-between items-center'>
                                <Link to="#">
                                    <p className='text-gray-600 font-semibold hover:text-black hover:border-b border-red-600'>Reset Password</p>
                                </Link>
                                <Link to="/register">
                                    <p className='font-semibold text-gray-500 hover:text-red-400'>don't have an account?</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;