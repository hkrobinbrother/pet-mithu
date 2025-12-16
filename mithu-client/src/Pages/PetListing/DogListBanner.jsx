
import { Link } from "react-router";
import petList from "../../../public/images/listBanner.jpg"
const DogListBanner = () => {
    return (
        <div className=" relative">
            <div className="w-full object-cover">
                <img className="h-140  object-fill w-full" src={petList} alt="" />
            </div>
            <div className="absolute top-50 left-50">
                <h1 className="text-4xl text-white bg-red-500  p-4  rounded-b-2xl font-bold">Pet List</h1>
                <div className="flex mt-3 ">
                    <p><Link to="/"><button className="text-2xl text-white font-bold cursor-pointer">Home</button></Link></p>
                     <div className="divider text-white bg-white lg:divider-horizontal  "></div>
                <p><Link to="/petListing"><button className="text-2xl text-white font-bold cursor-pointer">Pet List</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default DogListBanner;