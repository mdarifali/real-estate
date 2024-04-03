import about from '../../assets/images/about-image.jpg';
import SubHeader from './../Header/SubHeader';

const About = () => {
    return (
        <>  <SubHeader />
            <div className="container mx-auto w-[85%] sm:w-3/4 md:w-[95%] my-20">
                <div className='flex flex-col sm:flex-row items-center gap-5'>
                    <div className='flex-1 order-1 sm:order-1 mb-8 sm:mb-0'>
                        <img className='rounded-3xl w-full sm:w-10/12' src={about} alt="banner" />
                    </div>
                    <div className='flex-1 order-2 sm:order-1 mb-5 sm:mb-0'>
                        <h5 className='tracking-wider text-[20px] mb-5 text-red-500'>WOH WE ARE</h5>
                        <h2 className='text-4xl font-bold mb-5'>Lorem ipsum dolor sit amet consectetur</h2>
                        <p className='text-md text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic culpa neque ullam accusamus eveniet saepe esse fuga beatae, fugit eius quibusdam quam molestiae porro voluptatum reprehenderit modi labore impedit? Vitae.</p>
                        <button className='px-6 py-3 bg-red-600 text-white mt-7 hover:bg-black transition duration-300 ease-in-out'>Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;