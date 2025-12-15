import Banner from "./Banner";
import BigFooter from "./BigFooter";
import Contact from "./Contact";
import Happycoustomer from "./Happycoustomer";
import Review from "./Review";
import WatingForAdoption from "./WatingForAdoption";
import WorkingForDog from "./WorkingForDog";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingForDog></WorkingForDog>
            <WatingForAdoption></WatingForAdoption>
            <Happycoustomer></Happycoustomer>
            <Contact></Contact>
            <BigFooter></BigFooter>
        </div>
    );
};

export default Home;