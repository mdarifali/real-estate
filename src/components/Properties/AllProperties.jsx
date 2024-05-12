import { property } from "../../components/data.js";
import SubHeader from "../Header/SubHeader.jsx";
import PropertyCards from "./PropertyCards.jsx";
import PageTitle from './../PageTitle';


const AllProperties = () => {
    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | All Properties" />
            <div className='h-[150px] sm:h-[250px] bg-slate-700 flex justify-center items-center'>
                <h5 className='tracking-wider text-xl sm:text-3xl text-white font-bold'>OUR PROPERTIES</h5>
            </div>
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <div className="flex sm:gap-10 gap-5">
                    <div className="flex-1">
                        <div className="drawer lg:drawer-open">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex flex-col items-center justify-center tooltip tooltip-right" data-tip="Sort & filter">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-2" className="btn rounded-none bg-transparent border-0 drawer-button lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-gray-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="drawer-side z-10">
                                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                                <div className="menu p-4 w-72 min-h-full bg-white text-slate-700">
                                    <div className="mt-10">
                                        <h5 className="text-[18px] mb-5">Price Filter</h5>
                                        <hr />
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Defult Price</span>
                                                <input type="radio" name="1" className="radio" checked/>
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">High Price</span>
                                                <input type="radio" name="1" className="radio" />
                                            </label>
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Low Price</span>
                                                <input type="radio" name="1" className="radio" />
                                            </label>
                                        </div>
                                        {/* <button className="py-[8px] px-[20px] border mt-2 btn-block">Apply</button> */}
                                    </div>
                                    <div className="mt-10">
                                        <h5 className="text-[18px] mb-5">Property Filter</h5>
                                        <hr />
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Defult</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Recent</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Best Selling</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Featured</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        {/* <button className="py-[8px] px-[20px] border mt-2 btn-block">Apply</button> */}
                                    </div>
                                    <div className="mt-10">
                                        <h5 className="text-[18px] mb-5">Category Filter</h5>
                                        <hr />
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Defult</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Apartment</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Duples</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text">Condos</span>
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                            </label>
                                        </div>
                                        {/* <button className="py-[8px] px-[20px] border mt-2 btn-block">Apply</button> */}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex-grow">
                        <h2 className='tracking-wider text-xl sm:text-4xl font-bold text-center mb-20 sm:mt-0 mt-2 text-black'>Explore The Best <span className=" text-red-600 uppercase">Property</span></h2>
                        <div className="w-full grid-cols-1 grid sm:grid-cols-2 justify-center items-center gap-8">
                            {
                                property.map((card) => {
                                    return (
                                        <PropertyCards key={card.id} card={card} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProperties;