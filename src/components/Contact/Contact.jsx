
import mapImage from '../../assets/images/Google Map.jpg';
import SubHeader from './../Header/SubHeader';
import PageTitle from './../PageTitle';

const Contact = () => {

    

    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | Contact Us" />
            <div>
                <div className='h-[150px] sm:h-[250px] bg-slate-700 flex justify-center items-center'>
                    <h5 className='tracking-wider text-xl sm:text-3xl text-white font-bold'>CONTACT US</h5>
                </div>
                <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8">
                        <div className='w-full flex flex-col justify-start'>
                            <img className='rounded-2xl max-h-[550px]' src={mapImage} alt="" />
                            <div className='min-h-2.5'>
                            </div>
                        </div>

                        <div className="flex justify-center items-center border rounded-xl p-6">
                            <form className=' text-black'>
                                <h4 className='text-xl sm:text-3xl text-center pb-5'>Send Message</h4>
                                <div className="flex justify-start items-center mt-5 mb-5 gap-3">
                                    <input className="w-[50%] bg-white border-2 border-gray-200 rounded-xl p-3 outline-none text-md" type="text" name="" id="" placeholder="First Name" required />
                                    <input className="w-[50%] bg-white border-2 border-gray-200 rounded-xl p-3 outline-none " type="text" name="" id="" placeholder="Last Name" required />
                                </div>
                                <input className="w-[100%] bg-white border-2 border-gray-200 rounded-xl p-3 outline-none mb-5" type="email" name="" id="" placeholder="Email" required />
                                <input className="w-[100%] bg-white border-2 border-gray-200 rounded-xl p-3 outline-none mb-5" type="text" name="" id="" placeholder="Phone Number" required />
                                <textarea className="w-[100%] bg-white border-2 border-gray-200 rounded-xl p-3 outline-none mb-5" rows="5" name="" id="" placeholder="Message"></textarea>
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