import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

const CategoryPets = () => {
  const { categoryName } = useParams(); // 🔥 category ধরতেছি
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/petListing?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, [categoryName]);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-16">

      {/* 🔥 Dynamic Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 capitalize">
          🐾 {categoryName} Waiting for Adoption
        </h2>
        <p className="text-gray-500 mt-3">
          Find your perfect {categoryName} ❤️
        </p>
      </div>

      {/* 🐶 Same Cards UI */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
          >
            <div className="overflow-hidden">
              <img
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                src={pet.photo}
                alt={pet.name}
              />
            </div>

            <div className="p-5">
              <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {pet.name}
              </h1>

              <div className="flex justify-between text-gray-500 text-sm mt-3">
                <span className="flex items-center gap-2">
                  <IoSettingsSharp /> {pet.breed}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> {pet.birthdate}
                </span>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex items-center justify-between">
                <Rating style={{ maxWidth: 100 }} value={pet.rating} readOnly />
                <span className="text-gray-500 text-sm">
                  {pet.location}
                </span>
              </div>

              <div className="mt-5">
                <Link to={`/petListing/${pet._id}`}>
                  <button className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Data */}
      {pets.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No pets found 😢
        </p>
      )}
    </div>
  );
};

export default CategoryPets;