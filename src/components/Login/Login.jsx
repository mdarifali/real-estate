/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import SubHeader from './../Header/SubHeader';
import logo from "../../assets/images/Logo.png";
import PageTitle from './../PageTitle';

const Login = () => {
    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | User Login" />
            <div>
                <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                    <div className="flex justify-center items-center">
                        <form className='max-w-[500px] bg-slate-200 py-10 sm:py-16 px-10'>
                            <div className="flex justify-center mb-14">
                                <img className="w-[110px]" src={logo} alt="" />
                            </div>
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="email" placeholder="Your Email" required />
                            <input className="w-[100%] border-2 border-gray-200 rounded-sm p-3 outline-none mb-5" type="password" placeholder="Enter Password" required />
                            <div className='flex gap-1 items-center justify-start'>
                                <input type="checkbox" id="remember" />
                                <label className='text-gray-600' htmlFor="remember">Remember Me</label>
                            </div>
                            <button className='w-full text-md font-semibold py-4 my-10 bg-red-600 text-white hover:bg-black transition uppercase'>Login</button>
                            <div className='flex flex-col sm:flex-row justify-between items-center gap-5'>
                                <Link to="#">
                                    <div className=''>
                                        <p className='text-gray-600 hover:text-black'>Reset Password</p>
                                    </div>
                                </Link>
                                <Link to="/register">
                                    <div className=''>
                                        <p className='text-gray-500 hover:text-red-400'>don't have an account?</p>
                                    </div>
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