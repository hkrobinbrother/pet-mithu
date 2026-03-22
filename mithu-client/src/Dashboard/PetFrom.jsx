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
  const age = calculateAge(data.birthdate);

  const petData = {
    ...data,
    age: `${age} years`,
  };

  try {
    const res = await axios.post(`${import.meta.env.VITE_baseUrl}/petListing`, petData);

    console.log(res.data);
    toast.success("Pet added successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to add pet");
  }
};

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Add a Pet 🐶
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Pet Name */}
        <input
          type="text"
          placeholder="Pet Name (Buddy)"
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border rounded-lg"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Description */}
        <textarea
          placeholder="Friendly, loyal, and great with kids."
          {...register("description")}
          className="w-full p-2 border rounded-lg"
        />

        {/* Breed */}
        <input
          type="text"
          placeholder="Golden Retriever"
          {...register("breed")}
          className="w-full p-2 border rounded-lg"
        />

        {/* Gender */}
        <select
          {...register("gender")}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Size */}
        <select
          {...register("size")}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        {/* Color */}
        <input
          type="text"
          placeholder="Color (Golden)"
          {...register("color")}
          className="w-full p-2 border rounded-lg"
        />

        {/* ✅ Birthdate */}
        <div>
          <label className="font-semibold">Birthdate</label>
          <input
            type="date"
            {...register("birthdate", {
              required: "Birthdate is required",
            })}
            className="w-full p-2 border rounded-lg"
          />
          {errors.birthdate && (
            <p className="text-red-500">{errors.birthdate.message}</p>
          )}
        </div>

        {/* ✅ Auto Age Preview */}
        {birthdate && (
          <p className="text-sm text-gray-600">
            Age: {calculateAge(birthdate)} years
          </p>
        )}

        {/* Location */}
        <input
          type="text"
          placeholder="Dhaka, Bangladesh"
          {...register("location")}
          className="w-full p-2 border rounded-lg"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold"
        >
          Add Pet
        </button>
      </form>
    </div>
  );
}