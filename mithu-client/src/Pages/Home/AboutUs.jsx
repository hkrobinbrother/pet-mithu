import { Link } from "react-router";
import aboutIMg from "../../../public/images/about.jpg";
import { MdOutlinePets } from "react-icons/md";
const AboutUs = () => {
  return (
    <div className="hero min-h-screen md: container mx-auto flex justify-between ">
      <div className="w-1/2">
        <img src={aboutIMg} className=" rounded-lg shadow-2xl " />
      </div>
      <div className="w-1/2 ml-4">
        <h1 className="text-5xl font-bold text-gray-500">About Us</h1>
        <h1 className="text-3xl text-red-500">Where every Pet finds a home!</h1>
        <p className="py-6">
          Our pet adoption platform is designed to make the process of finding and adopting pets as easy and enjoyable as possible. The website serves as a bridge between loving individuals and animals in need of a forever home. Users can browse through a variety of pets, including dogs, cats, and other small animals, with detailed information about their breed, age, size, and temperament. Each pet profile also includes clear images to help users make an informed decision when choosing a pet to adopt.
        </p>
        <Link to="/petListing">
          <button className="btn bg-orange-400">
            Adoption <MdOutlinePets />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
