import { Link } from "react-router";

const categories = [
  { name: "cat", label: "🐱 Cats" },
  { name: "dog", label: "🐶 Dogs" },
  { name: "rabbit", label: "🐰 Rabbit" },
  { name: "fish", label: "🐟 Fish" },
];

const CategorySection = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🐾 Pet Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/category/${cat.name}`}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center font-semibold text-lg md:text-xl"
          >
            <span className="text-5xl mb-3">{cat.label.split(" ")[0]}</span>
            <span className="capitalize">{cat.label.split(" ")[1]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;