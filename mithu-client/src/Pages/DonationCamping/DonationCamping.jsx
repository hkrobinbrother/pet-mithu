import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import DonatePets from "./DonatePets";
import DonationBanner from "./DonationBanner";
import BigFooter from "../Home/BigFooter";

const DonationCamping = () => {
  return (
    <div>
      <Helmet>
        <title>Donation</title>
      </Helmet>
      <DonationBanner></DonationBanner>
      <div className="mt-10">
        <SectionTitle
          firstHeading="Meet the animals"
          SecondHeading="Puppies Waiting for Donation"
        ></SectionTitle>
      </div>
      <div>
        <DonatePets></DonatePets>
      </div>
      <BigFooter></BigFooter>
    </div>
  );
};

export default DonationCamping;
