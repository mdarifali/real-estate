import { services } from "../data.js";

const SubServices = () => {
    return (
        <div className="bg-[#d9edbf9d]">
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className='mb-10'>
                    <h5 className='tracking-wider text-[20px] mb-5 text-red-500'>OUR SERVICES</h5>
                    <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Top Real Estate Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-8">

                    {
                        services.map((itme) => {
                            return (
                                <div key={itme.id} className="bg-white text-black h-[280px] px-8 py-14 rounded-xl flex flex-col justify-center items-start border-b-[6px] border-red-600 hover:bg-transparent hover:shadow-2xl">
                                    <div className="p-6 rounded-full bg-red-100 mb-5">
                                        <itme.icon className="size-10 text-red-400" />
                                    </div>
                                    <h3 className="tracking-wide text-[22px] font-semibold mb-2">{itme.title}</h3>
                                    <p className="text-[16px] text-slate-700">{itme.desc}</p>
                                    <button className="mt-4 border-b border-red-600 text-red-600">Read More</button>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );
};

export default SubServices;