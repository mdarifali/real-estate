import { property } from "../../components/data.js";
import SubHeader from "../Header/SubHeader.jsx";
import PropertyCards from "./PropertyCards.jsx";
import PageTitle from './../PageTitle';


const AllProperties = () => {
    return (
        <>  <SubHeader />
            <PageTitle title="Real Estate | All Properties" />
            <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                <h2 className='tracking-wider text-3xl sm:text-4xl font-bold text-center mb-20'>Explore The Best <span className=" text-red-600 uppercase">Property</span></h2>
                <div className="w-full grid-cols-1 grid sm:grid-cols-3 justify-center items-center gap-8">
                    {
                        property.map((card) => {
                            return (
                                <PropertyCards key={card.id} card={card}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default AllProperties;