import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import FAQ from "../Home/FAQ";
import DogListBanner from "./DogListBanner";
import Pets from "./Pets";

const PetListing = () => {
  return (
    <div>
      <Helmet>
        <title>petList</title>
      </Helmet>
      <div>
        <DogListBanner></DogListBanner>
      </div>
      <div className="mt-10">
        <SectionTitle
          firstHeading="Meet the animals"
          SecondHeading="Puppies Waiting for Adoption"
          thirdHeding="The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information Most dogs"
        ></SectionTitle>
      </div>
      <div className="">
        <Pets></Pets>
      </div>
      <div>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default PetListing;
