import SubContact from "./SubContact";
import Header from "../Header/Header";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import PopularArea from "./PopularArea";
import ScrollTop from "./ScrollTop";
import SubAbout from "./SubAbout";
import SubServices from "./SubServices";
import Properties from "./Properties";
import LatestProperties from "./LatestProperties";


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
            <LatestProperties />
            <ScrollTop />
        </div>
    );
};

export default Home;