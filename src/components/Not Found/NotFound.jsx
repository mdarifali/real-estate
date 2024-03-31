import banner from '../../assets/images/Hero-banner.jpg';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen justify-center items-center flex bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container mx-auto w-[95%] sm:w-3/4">
                <div className="flex flex-col justify-center items-center gap-8">
                    <h1 className="text-9xl text-white font-bold mb-5">404</h1>
                    <h2 className="text-3xl text-white font-bold tracking-[3px]">Your are worng route go back</h2>
                    <Link to="/" className="text-[18px] px-16 py-5 bg-red-600 hover:bg-black transition text-white uppercase">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;