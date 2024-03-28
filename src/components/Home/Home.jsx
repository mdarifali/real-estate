import SubContact from "./SubContact";
import Header from "../Header/Header";
import Properties from "../Properties/Properties";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import PopularArea from "./PopularArea";
import ScrollTop from "./ScrollTop";
import SubAbout from "./SubAbout";
import SubServices from "./SubServices";


const Home = () => {
    return (
        <div className="relative">
            <Header />
            <Hero />
            <SubAbout />
            <PopularArea />
            <Properties />
            <SubServices />
            <Testimonials />
            <SubContact />
            <ScrollTop />
        </div>
    );
};

export default Home;