import mapImage from '../../assets/images/Google Map.jpg';
import SubHeader from './../Header/SubHeader';
import PageTitle from './../PageTitle';

const Contact = () => {
    return (
        <>  <SubHeader /> 
            <PageTitle title="Real Estate | Contact Us" />
            <div className="">
                <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                    <div className='mb-10'>
                        <h5 className='tracking-wider text-[20px] mb-5 text-red-500'>CONTACT US</h5>
                        <h2 className='tracking-wide text-3xl sm:text-4xl font-bold'>Send Message</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8">
                        <div className='w-full flex flex-col justify-start'>
                            <img className='rounded-2xl max-h-[550px]' src={mapImage} alt="" />
                        </div>

                        <div className="flex justify-center items-center">
                            <form>
                                <div className="flex justify-start items-center mt-5 mb-5 gap-3">
                                    <input className="w-[50%] border-2 border-gray-200 rounded-xl p-3 outline-none text-md" type="text" name="" id="" placeholder="first name" required />
                                    <input className="w-[50%] border-2 border-gray-200 rounded-xl p-3 outline-none " type="text" name="" id="" placeholder="last name" required />
                                </div>
                                <input className="w-[100%] border-2 border-gray-200 rounded-xl p-3 outline-none mb-5" type="email" name="" id="" placeholder="enter your email" required />
                                <input className="w-[100%] border-2 border-gray-200 rounded-xl p-3 outline-none mb-5" type="text" name="" id="" placeholder="enter your phone number" required />
                                <textarea className="w-[100%] border-2 border-gray-200 rounded-xl p-3 outline-none mb-5" rows="5" name="" id="" placeholder="your message"></textarea>
                                <button className='w-full text-md font-semibold py-4 bg-red-600 text-white mt-5 hover:bg-black transition uppercase'>Send Email</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;