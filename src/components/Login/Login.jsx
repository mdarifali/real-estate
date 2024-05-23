/* eslint-disable react/no-unescaped-entities */
import { Link, Navigate } from 'react-router-dom';
import SubHeader from './../Header/SubHeader';
import logo from "../../assets/images/Logo.png";
import PageTitle from './../PageTitle';
import auth from '../../firebaseAuthToken';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Loading from '../Loading';
import { useState } from 'react';

const Login = () => {

    const [user, setUser] = useState([]);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);

    // if (error) {
    //     Swal.fire({
    //         title: "Oops...",
    //         text: (error?.message),
    //         icon: "error"
    //       });
    // }

    // if (loading) {
    //     return <Loading />;
    // }

    if (user) {
        return <Navigate to="/admin" />
    }

    const handleLogin = e => {
        const email = e.email
        const password = e.password
        const data = { email, password }

        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser(data);

                if (data.error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'User & Password not match',
                        timer: 3500
                    })
                }
            })

        reset();
    }

    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | User Login" />
            <div className='bg-slate-700'>
                <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                    <div className="flex justify-center items-center">
                        <form onSubmit={handleSubmit(handleLogin)}
                            className='max-w-[500px] bg-slate-200 py-10 sm:py-16 px-10 shadow-2xl'>
                            <div className="flex justify-center mb-14">
                                <img className="w-[110px]" src={logo} alt="" />
                            </div>

                            <label>
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                            <input
                                className="w-[100%] p-3 mb-5 bg-white text-black"
                                type="email"
                                placeholder="Your Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            
                            <label>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                            <input
                                className="w-[100%] p-3 mb-5 bg-white text-black"
                                type="password"
                                placeholder="Enter Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message: 'Min 8 characters, at least 1 letter, 1 number and 1 special character!'
                                    }
                                })}
                            />

                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text text-gray-600 text-[16px]">Remember Me</span>
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-error rounded-full" />
                                </label>
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
                                        <p className='text-gray-500 hover:text-red-400 border-gray-500 border-b'>don't have an account?</p>
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