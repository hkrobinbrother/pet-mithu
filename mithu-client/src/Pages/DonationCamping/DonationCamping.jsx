import SectionTitle from "../../Components/SectionTitle";
import DonatePets from "./DonatePets";
import DonationBanner from "./DonationBanner";

const DonationCamping = () => {
  return (
    <div>
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
    </div>
  );
};

export default DonationCamping;
