import About from "../About/About";
import Properties from "../Properties/Properties";
import Hero from "./Hero";
import PopularArea from "./PopularArea";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <PopularArea />
            <Properties />
        </div>
    );
};

export default Home;