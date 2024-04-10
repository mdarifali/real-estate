import { property } from "../data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const LatestProperties = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <div>
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className='mb-10'>
                        <h5 className='tracking-wider text-[20px] mb-5 text-red-500'>LATEST PROPERTIES</h5>
                        <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Our Latest Collection</h2>
                    </div>
                <div className="w-full">
                    <Slider {...settings}>
                        {
                            property.map((card) => {
                                return (
                                    <div key={card.id}>
                                        <div className='h-[270px] bg-cover bg-center p-4 flex flex-col justify-between items-end' style={{ backgroundImage: `url(${card.images[0].img})` }}>
                                            <div className='w-full flex justify-between items-center'>
                                                <div>
                                                    <button className='bg-black px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition'>Latest</button>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition'>Sales</button>
                                                    <button className='bg-red-600 px-3 py-1 rounded-full text-white text-[13px] hover:bg-white hover:text-black transition'>Active</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default LatestProperties;