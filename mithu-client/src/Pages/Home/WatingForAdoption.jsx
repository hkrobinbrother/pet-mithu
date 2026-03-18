import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const WatingForAdoption = () => {
  const [petss, setPets] = useState([]);
  const pets = petss.slice(0, 6);

  useEffect(() => {
    fetch("http://localhost:5000/petListing")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-16">

      {/* 🔥 Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          🐾 Waiting for Adoption
        </h2>
        <p className="text-gray-500 mt-3">
          Find your perfect companion and give them a loving home ❤️
        </p>
      </div>

      {/* 🐶 Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                src={pet.photo}
                alt={pet.name}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {pet.name}
              </h1>

              {/* Info */}
              <div className="flex justify-between items-center text-gray-500 text-sm mt-3">
                <span className="flex items-center gap-2">
                  <IoSettingsSharp /> {pet.breed}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> {pet.birthdate}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t my-4"></div>

              {/* Rating + Location */}
              <div className="flex items-center justify-between">
                <Rating style={{ maxWidth: 100 }} value={pet.rating} readOnly />
                <span className="text-gray-500 text-sm font-medium">
                  {pet.location}
                </span>
              </div>

              {/* Button */}
              <div className="mt-5">
                <Link to={`/petListing/${pet._id}`}>
                  <button className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold hover:opacity-90 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔽 View All */}
      <div className="flex justify-center mt-12">
        <Link
          to="/petListing"
          className="px-8 py-3 rounded-full bg-amber-400 text-black font-bold hover:bg-amber-500 transition shadow-md"
        >
          View All Pets
        </Link>
      </div>
    </div>
  );
};

export default WatingForAdoption;