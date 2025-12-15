import Banner from "./Banner";
import Happycoustomer from "./Happycoustomer";
import WatingForAdoption from "./WatingForAdoption";
import WorkingForDog from "./WorkingForDog";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingForDog></WorkingForDog>
            <WatingForAdoption></WatingForAdoption>
            <Happycoustomer></Happycoustomer>
        </div>
    );
};

export default Home;