import { Link, NavLink } from "react-router";
import { FaHome, FaDog, FaPlus, FaHeart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">

      {/* Logo / Title */}
      <div className="p-5 text-2xl font-bold border-b border-gray-700">
        🐾 Pet Dashboard
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">

        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-amber-500" : "hover:bg-gray-700"
            }`
          }
        >
          <FaHome /> Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/my-pets"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-amber-500" : "hover:bg-gray-700"
            }`
          }
        >
          <FaDog /> My Pets
        </NavLink>

        <NavLink
          to="/dashboard/add-pet"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-amber-500" : "hover:bg-gray-700"
            }`
          }
        >
          <FaPlus /> Add Pet
        </NavLink>

        <NavLink
          to="/dashboard/donations"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${
              isActive ? "bg-amber-500" : "hover:bg-gray-700"
            }`
          }
        >
          <FaHeart /> Donations
        </NavLink>

      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © 2026 Pet App
      </div>
    </div>
  );
};

export default Sidebar;