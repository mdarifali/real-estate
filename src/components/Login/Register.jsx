/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import SubHeader from "../Header/SubHeader";
import logo from "../../assets/images/Logo.png";
import PageTitle from './../PageTitle';
import { useFormik } from "formik";
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     phone: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//   });

const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
}

const Register = () => {

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values);
        },
    })

    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | User Register" />
            <div className="bg-slate-700">
                <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                    <div className="flex justify-center items-center">
                        <form
                            onSubmit={handleSubmit}
                            className='max-w-[500px] bg-slate-200 py-10 sm:py-16 px-10'>
                            <div className="flex justify-center mb-14">
                                <img className="w-[110px]" src={logo} alt="" />
                            </div>
                            <div>
                                <input
                                    className="w-[100%] border-b-2 border-gray-200 rounded-sm p-3 mb-5 bg-white text-black"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="Full Name"
                                />
                                {
                                    <div className="text-red-500 my-5">{errors.name}</div>
                                }
                            </div>
                            <input
                                className="w-[100%] border-2 border-gray-200 rounded-sm p-3 mb-5 bg-white text-black"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Email"
                                required />
                                 {
                                    <div className="text-red-500 my-5">{errors.name}</div>
                                }
                            <input
                                className="w-[100%] border-2 border-gray-200 rounded-sm p-3 mb-5 bg-white text-black"
                                name="phone"
                                type="text"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Phone Number"
                                required />
                            <input
                                className="w-[100%] border-2 border-gray-200 rounded-sm p-3 mb-5 bg-white text-black"
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Password"
                                required />
                            <input
                                className="w-[100%] border-2 border-gray-200 rounded-sm p-3 bg-white text-black"
                                name="cpassword"
                                type="password"
                                value={values.cpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Confirm Password"
                                required />
                            <button className='w-full text-md font-semibold py-4 my-10 bg-red-600 text-white hover:bg-black transition uppercase'>Submit</button>
                            <div className='flex justify-center'>
                                <Link to="/login">
                                    <p className='text-gray-500 hover:text-red-400'>Already have an account</p>
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