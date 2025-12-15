import SectionTitle from "../../Components/SectionTitle";
import Review from "./Review";


const Happycoustomer = () => {
    return (
        <div className="mt-10">
            <SectionTitle
            firstHeading="  Testimonials"
            SecondHeading="Our Happy Customers"
            thirdHeding="The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information Most dogs"
            ></SectionTitle> 

            <div>
                    <Review></Review>
            </div>           
        </div>
    );
};

export default Happycoustomer;