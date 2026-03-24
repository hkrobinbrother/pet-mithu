import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddDonationPet = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const donationData = {
      ...data,
      donatedAmount: 0,
      createdAt: new Date(),
    };

    try {
      const res = await axiosPublic.post("/donation", donationData);
      if (res.data.insertedId) {
        toast.success("🐾 Donation Pet Added Successfully!");
        reset();
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          🐶 Add Donation Pet
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Pet Name */}
          <div>
            <label className="block mb-1 font-semibold">Pet Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter pet name"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-semibold">Pet Image URL</label>
            <input
              {...register("photo", { required: true })}
              type="text"
              placeholder="Enter image URL"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              {...register("description", { required: true })}
              rows="4"
              placeholder="Write about this pet..."
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Max Donation */}
          <div>
            <label className="block mb-1 font-semibold">
              Maximum Donation Amount ($)
            </label>
            <input
              {...register("maxDonation", { required: true })}
              type="number"
              placeholder="Enter goal amount"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition">
            ➕ Add Donation Pet
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDonationPet;