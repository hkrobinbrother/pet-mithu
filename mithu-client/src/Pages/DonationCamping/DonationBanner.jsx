import { Link } from "react-router";
import donationBannerImg from "../../../public/images/donationBanner.jpg"

const DonationBanner = () => {
    return (
       <div className=" relative">
      <div className="w-full object-cover">
        <img className="h-140 max-h-1/2 object-cover w-full" src={donationBannerImg} alt="" />
      </div>
      <div className="absolute top-50 left-50">
        <h1 className="text-4xl text-white bg-red-500  p-4  rounded-b-2xl font-bold">
          Donation
        </h1>
        <div className="flex mt-3 ">
          <p>
            <Link to="/">
              <button className="text-2xl text-white font-bold cursor-pointer">
                Home
              </button>
            </Link>
          </p>
          <div className="divider text-white bg-white lg:divider-horizontal  "></div>
          <p>
            <Link to="/petListing">
              <button className="text-2xl text-white font-bold cursor-pointer">
                Pet List
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default DonationBanner;