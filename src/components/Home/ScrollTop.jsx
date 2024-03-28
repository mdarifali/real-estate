import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
    return (
        <div className="p-4 bg-red-500 rounded-full fixed right-1 bottom-20 hover:bg-black transition">
            <a href="#hero">
                <FaArrowUp className="text-white" />
            </a>
        </div>
    );
};

export default ScrollTop;