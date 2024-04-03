import { FaStar } from "react-icons/fa";
import { reviews } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 3,
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
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <div className="container mx-auto w-[85%] sm:w-3/4 md:w-[95%] py-20">
                    <div className='mb-10'>
                        <h5 className='tracking-wider text-[20px] mb-5 text-red-500'>TESTIMONIAL</h5>
                        <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Our Customer Reviews</h2>
                    </div>
                    <div className="w-full">
                        <Slider {...settings}>
                            {
                                reviews.map((item) => {
                                    return (
                                        <div key={item.id} className="w-full bg-[#d9edbf9d] tetx-black px-6 py-8 rounded-xl">
                                            <div className="flex justify-start items-center gap-5">
                                                <img className="w-[70px] h-[70px] rounded-full border-2 border-red-400" src={item.image} alt="client-iamge" />
                                                <div>
                                                    <h4 className="text-xl tracking-wide font-semibold mb-1">{item.name}</h4>
                                                    <p className="text-[#2c3e50]">{item.text}</p>
                                                </div>
                                            </div>
                                            <p className="text-md text-justify text-[#2c3e50] my-6">{item.feedback}</p>
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
                        </Slider>
                    </div>
                </div>
            </div>
        );
    };

    export default Testimonials;