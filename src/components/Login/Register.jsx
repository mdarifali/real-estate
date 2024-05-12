/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import SubHeader from "../Header/SubHeader";
import logo from "../../assets/images/Logo.png";
import PageTitle from './../PageTitle';
import { auth } from './../../firebaseAuthToken';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from "../Loading";
import Swal from "sweetalert2";


const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        Swal.fire({
            title: "Oops...",
            text: (error?.message),
            icon: "error"
        });
    }

    if (loading) {
        return <Loading />;
    }

    if (user) {
        Swal.fire({
            title: "Registration Success",
            text: (user.user.email),
            icon: "success"
        });
    }

    const handleSingup = async event => {
        await createUserWithEmailAndPassword(event.email, event.password);
        // await updateProfile({ displayName: data.name });

    }


    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | User Register" />
            <div className="bg-slate-700">
                <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                    <div className="flex justify-center items-center">
                        <form
                            onSubmit={handleSubmit(handleSingup)}
                            className='max-w-[500px] bg-slate-200 py-10 sm:py-16 px-10 shadow-2xl'>
                            <div className="flex justify-center mb-14">
                                <img className="w-[110px]" src={logo} alt="" />
                            </div>


                            <label>
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            <input
                                className="w-[100%] p-3 mb-5 bg-white text-black"
                                type="text"
                                placeholder="Full Name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />


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
                                className="w-[100%] p-3 bg-white text-black"
                                type="password"
                                placeholder="Password"
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

                            <button className='w-full text-md font-semibold py-4 my-10 bg-red-600 text-white hover:bg-black transition uppercase'>Submit</button>
                            <div className='flex justify-center'>
                                <Link to="/login">
                                    <p className='text-gray-500 hover:text-red-400 border-gray-500 border-b'>already have an account</p>
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