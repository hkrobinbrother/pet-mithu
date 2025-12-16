import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Pets = () => {
  const axiosPublic = useAxiosPublic();

  const { data: petListing = [] } = useQuery({
    queryKey: ["petListing"],
    queryFn: async () => {
      const res = await axiosPublic.get("/petListing");
      return res.data;
    },
  });

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="grid md:grid-cols-3 gap-4">
        {petListing.map((pet) => (
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
                  <Rating style={{ maxWidth: 120 }} value={pet.rating} readOnly />
                </h1>
                <h1 className="text-gray-500 font-bold">Total price: ${pet.price}</h1>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
