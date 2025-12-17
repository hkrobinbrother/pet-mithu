import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const DonatePets = () => {
    const axiosPublic = useAxiosPublic();

  const { data: donations = [] } = useQuery({
    queryKey: ["donation"],
    queryFn: async () => {
      const res = await axiosPublic.get("/donation");
      return res.data;
    },
  });


    return (
        <div className="w-10/12 mx-auto mt-10">
              <div className="grid md:grid-cols-3 gap-4">
                {donations.map((donate) => (
                  <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                      <img
                        className="w-100 h-100 object-cover"
                        src={donate.photo}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <div>
                        <h1 className="text-2xl font-bold text-red-500 text-center">
                          {donate.name}
                        </h1>
                      </div>
                      <div className=" items-center   font-bold">
                        <h1 className="flex items-center gap-2 text-gray-500 ">
                         Donated amount:  ${donate.donatedAmount}
                        </h1>
                        <h1 className="flex items-center gap-2 text-gray-500 ">
                           Maximum donation: ${donate.maxDonation}
                        </h1>
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

export default DonatePets;