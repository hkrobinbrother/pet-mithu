import { Link } from "react-router";
import workingfordog from "../../../public/images/workigforDog.jpg"
import { MdOutlinePets } from "react-icons/md";



const WorkingForDog = () => {


  return (
    <div className="hero min-h-screen md: container mx-auto flex justify-between ">
      
       
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Working For
<span className="text-red-500">Dog Adoption </span>Free, Happy Time</h1>
          <p className="py-6">
           The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information.
          </p>
          <Link to="/petListing"><button className="btn bg-orange-400">Adoption <MdOutlinePets /></button></Link>
          
        </div>
         <div className="w-1/2">
            <img
          src={workingfordog}
          className=" rounded-lg shadow-2xl "
        />
        </div>
     
    </div>
  );
};

export default WorkingForDog;
