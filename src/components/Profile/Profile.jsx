import SubHeader from "../Header/SubHeader";
import PageTitle from "../PageTitle";
import profile from '../../assets/images/no-camera.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebaseAuthToken";
import useHook from "../Hook/useHook";

const Profile = () => {

    const [user] = useHook();
    console.log(user);


    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | User Profile" />
            {/* <div className='h-[150px] sm:h-[250px] bg-slate-700 flex justify-center items-center'>
                <h5 className='tracking-wider text-xl sm:text-3xl text-white font-bold'>USER PROFILE</h5>
            </div> */}
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20 flex items-center justify-center">
                <div className="bg-white overflow-hidden shadow-lg rounded-lg border w-[500px]">
                    <div className="flex justify-center my-10">
                        <img className="w-28 h-28 sm:w-40 sm:h-40 p-1 rounded-full ring-2 ring-slate-700"
                            src={!user.photoURL && profile}
                            alt="profile photo" />
                    </div>
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This is some information about the user.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="divide-y divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.name}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.email}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Phone number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.phone}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    123 Main St<br />
                                    Anytown, USA 12345
                                </dd>
                            </div>
                            <div className="my-5">
                                <button
                                    className="btn rounded-none btn-block text-white bg-slate-700"
                                    onClick={() => document.getElementById('my_modal_3').showModal()}>
                                    Edit Profile
                                </button>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            {/* Profile Edit Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black rounded-lg">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">✕</button>
                    </form>
                    <h4 className='text-xl text-start pb-10'>Edit Profile</h4>
                    <div className="flex justify-center cursor-pointer pb-5">
                        <div className="avatar placeholder">
                            <div className="border-dotted border-4 text-neutral-content rounded-full w-32">
                                {/* <span className="text-sm">Upload Photo</span> */}
                                <input type="file" className="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center mt-5 mb-5 gap-3">
                        <input className="w-full bg-white border p-3 outline-none text-sm" type="text" name="" id="" placeholder="Full Name" required />
                    </div>
                    <input className="w-full bg-white border p-3 outline-none mb-5 text-sm" type="email" name="" id="" placeholder="Email" required />
                    <input className="w-full bg-white border p-3 outline-none mb-5 text-sm" type="text" name="" id="" placeholder="Phone Number" required />
                    <textarea className="w-full bg-white border p-3 outline-none mb-5 text-sm" rows="2" name="" id="" placeholder="Contact Address"></textarea>
                    <button className='w-full text-md py-3 bg-green-500 text-white my-5 border-0 hover:bg-black transition '>Update</button>
                </div>
            </dialog>
        </>
    );
};

export default Profile;