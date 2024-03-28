import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-svh bg-slate-200">
            <div className="container mx-auto w-[95%] sm:w-3/4">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-9xl mb-5">404</h1>
                    <h2>Your are worng route go back</h2>
                    <Link to="/" className="px-14 py-5 bg-red-600 hover:bg-black transition text-white uppercase">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;