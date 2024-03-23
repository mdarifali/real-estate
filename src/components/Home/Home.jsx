import About from "../About/About";
import Hero from "./Hero";
import PopularArea from "./PopularArea";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <PopularArea/>
        </div>
    );
};

export default Home;