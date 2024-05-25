import pImage1 from '../../assets/images/popular image -1.jpg';
import pImage2 from '../../assets/images/popular image -2.jpg';
import pImage3 from '../../assets/images/popular image -3.jpg';

const PopularArea = () => {
    return (
        <div className='bg-[#d9edbf9d]'>
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className="w-full grid-cols-1 grid sm:grid-cols-3 gap-5">
                    <div className='mb-5'>
                        <h5 className='tracking-wide text-xl mb-6 text-red-500'>POPULAR AREAS</h5>
                        <h2 className='tracking-wide text-3xl sm:text-4xl font-bold mb-3'>Explore Most</h2>
                        <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Popular Areas..</h2>

                        <div className="flex flex-col items-start justify-center gap-5 mt-10">
                            <div className='flex flex-col justify-center items-start rounded-md border shadow-lg p-5 min-w-60 hover:scale-110 transition-all'>
                                <h1 className='text-red-600 text-7xl font-semibold mb-2 sm:mb-0'>5K</h1>
                                <h2 className='text-back text-xl font-semibold'>ACTIVE LISTING</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start rounded-md border shadow-lg p-5 min-w-60 hover:scale-110 transition-all'>
                                <h1 className='text-red-600 text-7xl font-semibold mb-2 sm:mb-0'>7K</h1>
                                <h2 className='text-back text-xl font-semibold'>ACTIVE SALES</h2>
                            </div>
                            <div className='flex flex-col justify-center items-start rounded-md border shadow-lg p-5 min-w-60 hover:scale-110 transition-all'>
                                <h1 className='text-red-600 text-7xl font-semibold mb-2 sm:mb-0'>4K</h1>
                                <h2 className='text-back text-xl font-semibold'>ACTIVE CUSTOMERS</h2>
                            </div>
                        </div>

                    </div>
                    <div className="grid-cols-1 grid col-span-2 sm:grid-cols-3 justify-center items-center gap-5 sm:gap-1">
                        <div className='h-[400px] bg-cover bg-center hover:scale-105 transition-all shadow-lg' style={{ backgroundImage: `url(${pImage1})` }}></div>
                        <div className='h-[400px] sm:mt-[-60px] mt-0 bg-cover bg-center hover:scale-105 transition-all shadow-lg' style={{ backgroundImage: `url(${pImage2})` }}></div>
                        <div className='h-[400px] bg-cover bg-center hover:scale-105 transition-all shadow-lg' style={{ backgroundImage: `url(${pImage3})` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularArea;