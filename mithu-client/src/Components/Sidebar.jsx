import { Link, NavLink, useNavigate } from "react-router";
import { FaHome, FaDog, FaPlus, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
const Sidebar = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
      const handleLogout = () => {
    logOut()
      .then(() => {
    
        navigate("/login");
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error("Logout failed");
        console.log(error.message);
      });
  };

  return (
    <div className="m w-64 bg-gray-900 text-white flex flex-col shadow-lg">
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
          to="/dashboard/petFrom"
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
      <div
        onClick={handleLogout}
        className="flex items-center justify-center p-3 rounded-lg w-2/3 mx-auto mb-4
        border-amber-600 shadow-amber-200 shadow-xs border-2 hover:bg-amber-500 cursor-pointer transition"
      >
        Logout
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © 2026 Pet App
      </div>
    </div>
  );
};

export default Sidebar;
