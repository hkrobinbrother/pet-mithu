import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function PetForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const birthdate = watch("birthdate");

  const calculateAge = (date) => {
    if (!date) return "";
    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

  const onSubmit = async (data) => {
    try {
      // 👉 Get image file
      const imageFile = data.image[0];

      // 👉 Upload to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData,
      );

      const imageUrl = imgbbRes.data.data.url;

      // 👉 Calculate age
      const age = calculateAge(data.birthdate);

      // 👉 Final pet data
      const petData = {
        name: data.name,
        description: data.description,
        breed: data.breed,
        gender: data.gender,
        size: data.size,
        color: data.color,
        birthdate: data.birthdate,
        age: `${age} years`,
        location: data.location,
        image: imageUrl, // ✅ uploaded image URL
      };

      // 👉 Send to backend
      const res = await axios.post(
        `${import.meta.env.VITE_baseUrl}/petListing`,
        petData,
      );

      console.log(res.data);
      toast.success("Pet added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add pet");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center p-4">
    <div className="w-full max-w-3xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200">
      
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Add a Pet 🐾
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Name + Image */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Pet Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              className="w-full px-4 py-2 rounded-xl border bg-white cursor-pointer"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>
        </div>

        {/* Image Preview */}
        {watch("image")?.[0] && (
          <div className="flex justify-center">
            <img
              src={URL.createObjectURL(watch("image")[0])}
              alt="preview"
              className="w-40 h-40 object-cover rounded-2xl shadow-md border"
            />
          </div>
        )}

        {/* Description */}
        <textarea
          placeholder="Describe your pet..."
          {...register("description")}
          className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Breed + Color */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Breed"
            {...register("breed")}
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="text"
            placeholder="Color"
            {...register("color")}
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        {/* Gender + Size */}
        <div className="grid md:grid-cols-2 gap-4">
          <select
            {...register("gender")}
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            {...register("size")}
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Birthdate */}
        <div>
          <label className="text-sm font-semibold text-gray-600">
            Birthdate
          </label>
          <input
            type="date"
            {...register("birthdate", {
              required: "Birthdate is required",
            })}
            className="w-full px-4 py-3 rounded-xl border mt-1 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          {errors.birthdate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.birthdate.message}
            </p>
          )}
        </div>

        {/* Age Preview */}
        {birthdate && (
          <p className="text-sm text-gray-600 text-center">
            🐾 Age:{" "}
            <span className="font-semibold text-yellow-600">
              {calculateAge(birthdate)} years
            </span>
          </p>
        )}

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          {...register("location")}
          className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold text-lg shadow-md hover:scale-[1.02] transition-all duration-200"
        >
          🚀 Add Pet
        </button>
      </form>
    </div>
  </div>
);
}
