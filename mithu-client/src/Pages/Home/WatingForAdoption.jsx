import { MdOutlinePets } from "react-icons/md";
import SectionTitle from "../../Components/SectionTitle";

import { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Link, Links } from "react-router";

const WatingForAdoption = () => {

  


  const [petss,setPets] = useState([])

  const pets = petss.slice(0,6)

  useEffect(()=>{
    fetch("http://localhost:5000/petListing")
    .then(res => res.json())
    .then(data => setPets(data))
  },[])

  return (
     <div className="w-10/12 mx-auto mt-10">
      <div className="grid md:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                className="w-100 h-100 object-cover"
                src={pet.photo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div>
                <h1 className="text-2xl font-bold text-red-500 text-center">
                  {pet.name}
                </h1>
              </div>
              <div className="flex justify-between items-center  font-bold">
                <h1 className="flex items-center gap-2 text-gray-500 ">
                  <IoSettingsSharp /> {pet.breed}
                </h1>
                <h1 className="flex items-center gap-2 text-gray-500 ">
                  <FaCalendarAlt />
                  {pet.birthdate}
                </h1>
              </div>
              <div className="divider"></div>
              <div className="flex items-center justify-between">
                <h1 className="">
                  {" "}
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={pet.rating}
                    readOnly
                  />
                </h1>
                <h1 className="text-gray-500 font-bold">{pet.location}</h1>
              </div>
              <div className="card-actions justify-end">
                <Link className="text-center flex justify-center items-center   w-full mt-2" to={`/petListing/${pet._id}`}>
                  <button className="btn bg-amber-500">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
     <div className=" justify-center items-center flex text-center mt-6">
       <Link  to={"/petListing"} className="btn bg-amber-400 text-black font-bold justify-center items-center flex text-center">View All</Link>
     </div>
    </div>
  );
};

export default WatingForAdoption;
