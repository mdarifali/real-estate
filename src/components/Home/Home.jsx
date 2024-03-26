import About from "../About/About";
import Contact from "../Contact/Contact";
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
            <Contact />
        </div>
    );
};

export default Home;