import About from "../About/About";
import Properties from "../Properties/Properties";
import Services from "../Services/Services";
import Hero from "./Hero";
import PopularArea from "./PopularArea";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <PopularArea />
            <Properties />
            <Services />
        </div>
    );
};

export default Home;