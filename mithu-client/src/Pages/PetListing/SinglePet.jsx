import { useLoaderData } from "react-router";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const SinglePet = () => {
  const pet = useLoaderData();

  const {
    name,
    breed,
    birthdate,
    age,
    gender,
    size,
    color,
    price,
    rating,
    location,
    photo,
    description,
  } = pet;

  return (
    <div className=" min-h-screen py-16 px-4 pt-16">
      <div className="max-w-6xl pt-50 mx-auto bg-gray-100 shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">

        {/* Image Section */}
        <div className="relative">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Rating Badge */}
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{rating}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between">

          <div>
            <h1 className="text-4xl font-bold text-gray-800">{name}</h1>

            <p className="text-gray-500 mt-2">{description}</p>

            {/* Pet Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge badge-primary">{breed}</span>
              <span className="badge badge-secondary">{gender}</span>
              <span className="badge badge-accent">{size}</span>
              <span className="badge badge-outline">{color}</span>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-2 text-gray-700">

              <p>
                <span className="font-semibold">Birthdate:</span> {birthdate}
              </p>

              <p>
                <span className="font-semibold">Age:</span> {age} years
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {location}
              </p>

            </div>
          </div>

          {/* Price + Button */}
          <div className="mt-8 flex items-center justify-between">

            <h2 className="text-3xl font-bold text-primary">
              ${price}
            </h2>

            <button className="btn btn-primary px-8">
              Adopt Now 🐾
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePet;