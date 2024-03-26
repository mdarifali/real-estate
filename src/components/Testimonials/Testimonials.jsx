// import { reviews } from "../data.js";
import { FaStar } from "react-icons/fa";
import { reviews } from "../data";

const Testimonials = () => {
    return (
        <div>
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className='mb-10'>
                    <h5 className='tracking-wider text-[20px] mb-5 text-red-500'>OUR SERVICES</h5>
                    <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Top Real Estate Services</h2>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-8">
                    {
                        reviews.map((item) => {
                            return (
                                <div key={item.id} className="bg-[#d9edbf9d] tetx-black w-full px-8 py-12  rounded-xl flex flex-col gap-6">
                                    <div className="flex justify-start items-center gap-5">
                                        <img className="w-[70px] h-[70px] rounded-full border-2 border-red-400" src={item.image} alt="client-iamge" />
                                        <div>
                                            <h4 className="text-xl tracking-wide font-semibold mb-1">{item.name}</h4>
                                            <p className="text-[#2c3e50]">{item.text}</p>
                                        </div>
                                    </div>
                                    <p className="text-md text-justify text-[#2c3e50]">{item.feedback}</p>
                                    <div className="flex justify-start items-start gap-2 w-full">
                                        <FaStar className="text-yellow-400 size-5 hover:scale-150 transition" />
                                        <FaStar className="text-yellow-400 size-4 hover:scale-150 transition" />
                                        <FaStar className="text-yellow-400 size-4 hover:scale-150 transition" />
                                        <FaStar className="text-yellow-400 size-4 hover:scale-150 transition" />
                                        <FaStar className="text-yellow-400 size-5 hover:scale-150 transition" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;