import About from "../About/About";
import Properties from "../Properties/Properties";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
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
            <Testimonials />
        </div>
    );
};

export default Home;