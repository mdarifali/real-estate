import pImage1 from '../../assets/images/popular image -1.jpg';
import pImage2 from '../../assets/images/popular image -2.jpg';
import pImage3 from '../../assets/images/popular image -3.jpg';

const PopularArea = () => {
    return (
        <div className='bg-slate-300 my-2'>
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className="w-full grid-cols-1 grid sm:grid-cols-3 gap-5">
                    <div className='mb-5'>
                        <h5 className='tracking-wide text-xl mb-10 text-red-500'>POPULAR AREAS</h5>
                        <h2 className='tracking-wide text-3xl sm:text-4xl font-bold mb-3'>Explore Most</h2>
                        <h2 className='tracking-wide text-3xl sm:text-4xl'>Popular Areas</h2>
                    </div>
                    <div className="grid-cols-1 grid col-span-2 sm:grid-cols-3 justify-center items-center gap-8">
                        <div className='h-[400px] bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(${pImage1})` }}></div>
                        <div className='h-[400px] bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(${pImage2})` }}></div>
                        <div className='h-[400px] bg-cover bg-center rounded-xl' style={{ backgroundImage: `url(${pImage3})` }}></div>
                    </div>
                </div>
                <div className="w-full grid-cols-1 grid sm:grid-cols-3 items-center gap-5 py-10 sm:py-20">
                    <div className='flex sm:justify-end justify-center lg:items-center gap-5'>
                        <h1 className='text-back text-7xl font-semibold'>5K</h1>
                        <h2 className='text-back text-xl'>ACTIVE <br /> LISTING</h2>
                    </div>
                    <div className='flex sm:justify-end justify-center lg:items-center gap-5'>
                        <h1 className='text-back text-7xl font-semibold'>5K</h1>
                        <h2 className='text-back text-xl'>ACTIVE <br /> LISTING</h2>
                    </div>
                    <div className='flex sm:justify-end justify-center lg:items-center gap-5'>
                        <h1 className='text-back text-7xl font-semibold'>5K</h1>
                        <h2 className='text-back text-xl'>ACTIVE <br /> LISTING</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularArea;