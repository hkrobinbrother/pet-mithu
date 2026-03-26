import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const categories = [
  { name: "cat", label: "🐱 Cats" },
  { name: "dog", label: "🐶 Dogs" },
  { name: "rabbit", label: "🐰 Rabbit" },
  { name: "fish", label: "🐟 Fish" },
];

const Pets = () => {
  const axiosPublic = useAxiosPublic();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [displayPets, setDisplayPets] = useState([]);

  // Fetch pets
  const { data: petListing = [] } = useQuery({
    queryKey: ["petListing"],
    queryFn: async () => {
      const res = await axiosPublic.get("/petListing");
      return res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    },
  });

  // Filter pets
  useEffect(() => {
    if (!petListing) return;

    let filtered = petListing;

    if (searchText) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    setDisplayPets(filtered);
  }, [petListing, searchText, selectedCategory]);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-600
       text-white p-8 rounded-lg gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by pet name..."
          className="border px-4 py-2 rounded-xl w-full md:w-1/2 focus:ring-2 focus:ring-amber-400 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-xl w-full md:w-1/3 focus:ring-2 focus:ring-amber-400 outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Pets Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {displayPets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={pet.photo}
                alt={pet.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {pet.name}
              </h1>

              <div className="flex justify-between items-center text-gray-500 text-sm mt-3">
                <span className="flex items-center gap-2">
                  <IoSettingsSharp /> {pet.breed}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> {pet.age}
                </span>
              </div>

              <div className="border-t my-4"></div>

              <div className="flex items-center justify-between">
                <Rating style={{ maxWidth: 100 }} value={pet.rating} readOnly />
                <span className="text-gray-500 text-sm font-medium">{pet.location}</span>
              </div>

              <div className="mt-5">
                <Link to={`/petListing/${pet._id}`}>
                  <button className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold hover:opacity-90 transition cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {displayPets.length === 0 && (
          <p className="text-center text-gray-500 col-span-3 mt-10">
            No pets found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Pets;