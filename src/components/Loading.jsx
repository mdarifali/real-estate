

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <div className="text-red-500 block text-center">
                <h5 className="text-2xl uppercase mb-3">Real Estate</h5>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    );
};

export default Loading;