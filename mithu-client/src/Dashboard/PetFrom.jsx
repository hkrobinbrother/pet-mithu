import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function PetForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
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
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      );

      const photo = imgbbRes.data.data.url;
      const age = calculateAge(data.birthdate);

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
        photo: photo,
        price: Number(data.price),
        rating: Number(data.rating),
        category: data.category, // 🔥 NEW FIELD
      };

      const res = await axios.post(
        `${import.meta.env.VITE_baseUrl}/petListing`,
        petData
      );

      console.log(res.data);
      toast.success("Pet added successfully!");
      reset();
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
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
              )}
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="">Select Category</option>
              <option value="cat">Cats 🐱</option>
              <option value="dog">Dogs 🐶</option>
              <option value="rabbit">Rabbit 🐰</option>
              <option value="fish">Fish 🐟</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>

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
            <label className="text-sm font-semibold text-gray-600">Birthdate</label>
            <input
              type="date"
              {...register("birthdate", { required: "Birthdate is required" })}
              className="w-full px-4 py-3 rounded-xl border mt-1 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            {errors.birthdate && (
              <p className="text-red-500 text-sm mt-1">{errors.birthdate.message}</p>
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

          {/* Price + Rating */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                placeholder="Price ($)"
                {...register("price", { required: "Price is required" })}
                className="w-full px-4 py-3 rounded-xl border mt-1 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="Rating (0 - 5)"
                {...register("rating", { required: "Rating is required" })}
                className="w-full px-4 py-3 rounded-xl border mt-1 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating.message}</p>
              )}
            </div>
          </div>

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
            className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold text-lg shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            🚀 Add Pet
          </button>
        </form>
      </div>
    </div>
  );
}