import { CarouselComponent } from "../../Components/Carosule/Carosule";
import Hero from "../../Components/Hero/Hero";
import Offers from "../../Components/Offers/Offers";
import Services from "../../Components/Services/Services";
import { Mobileservice } from "../../MobileService/MobileService";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CarouselComponent ></CarouselComponent>
            <Mobileservice></Mobileservice>
            <Services></Services>
            <Offers></Offers>
            
            
        </div>
    );
};

export default Home;