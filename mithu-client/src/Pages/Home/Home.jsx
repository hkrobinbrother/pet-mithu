import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import BigFooter from "./BigFooter";
import FAQ from "./FAQ";
import Happycoustomer from "./Happycoustomer";

import WatingForAdoption from "./WatingForAdoption";
import WorkingForDog from "./WorkingForDog";




const Home = () => {



    return (
        <div>
            <Helmet>
                <title>Mithu | Home</title>
            </Helmet>
            <Banner></Banner>
            <WorkingForDog></WorkingForDog>
            <WatingForAdoption></WatingForAdoption>
            <AboutUs></AboutUs>
            <Happycoustomer></Happycoustomer>

            <FAQ></FAQ>
            <BigFooter></BigFooter>
        </div>
    );
};

export default Home;