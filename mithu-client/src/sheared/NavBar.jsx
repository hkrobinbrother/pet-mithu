import { Link } from "react-router";
import logoImg from "../../public/images/logopet.png";
import { useContext, useState } from "react";
import avatarImg from "../../public/images/avator.jpg";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
const {user} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/petListing">Pet Listing</Link>
      </li>
      <li>
        <Link to="/donation">Donation Campaigns</Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 w-full z-20 bg-black/30 backdrop-blur-md text-white font-bold shadow-md">
      <div className="container mx-auto px-4">
        <div className="navbar flex justify-between items-center py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="w-12 h-12 object-contain" />
            <Link to="/" className="text-2xl font-bold uppercase">
              Mithu
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">{navItems}</div>

          {/* User Dropdown */}
          <div className="relative flex items-center gap-2">
            {user && (
              <span className="hidden md:block text-white font-semibold">
                {user.displayName}
              </span>
            )}

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-neutral-200 rounded-full cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={user?.photoURL || avatarImg}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            </div>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                <div className="flex flex-col">
                  {user ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="px-4 py-3 hover:bg-gray-100 transition"
                      >
                        Dashboard
                      </Link>
                      <div
                        onClick={() => console.log("logout")} // replace with logOut function
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 hover:bg-gray-100 transition"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signUp"
                        className="px-4 py-3 hover:bg-gray-100 transition"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black backdrop-blur-md mt-2 rounded-lg py-2">
            <ul className="flex flex-col gap-2 px-4">
              {navItems}
              {user ? (
                <>
                  <span className="py-2 px-2 font-semibold">{user.displayName}</span>
                  <Link
                    to="/dashboard"
                    className="py-2 hover:bg-gray-100 rounded transition"
                  >
                    Dashboard
                  </Link>
                  <div
                    onClick={() => console.log("logout")}
                    className="py-2 hover:bg-gray-100 rounded cursor-pointer transition"
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="py-2 hover:bg-gray-100 rounded transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signUp"
                    className="py-2 hover:bg-gray-100 rounded transition"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;