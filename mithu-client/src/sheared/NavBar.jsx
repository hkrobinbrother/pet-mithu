import { Link, useNavigate } from "react-router";
import logoImg from "../../public/images/logopet.png";
import { useContext, useState } from "react";
import avatarImg from "../../public/images/avator.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // profile dropdown

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        setDropdownOpen(false);
        setMenuOpen(false);
        navigate("/login");
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error("Logout failed");
        console.log(error.message);
      });
  };

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/petListing">Pet Listing</Link></li>
      <li><Link to="/donation">Donation Campaigns</Link></li>
    </>
  );

  return (
    <div className="fixed top-0 w-full z-20 bg-black/30 backdrop-blur-md text-white font-bold shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="w-12 h-12 object-contain" />
            <Link to="/" className="text-2xl font-bold uppercase">
              Mithu
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 list-none">
            {navItems}
          </ul>

          {/* User Dropdown */}
          <div className="relative flex items-center gap-2">
            {user && (
              <Link to="/profile" className="hidden md:block text-white font-semibold">
                {user.displayName}
              </Link>
            )}

            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2 border border-neutral-200 rounded-full cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={user?.photoURL || avatarImg}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-40 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
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
                        onClick={handleLogout}
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
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 border border-white rounded-md"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-black backdrop-blur-md mt-2 rounded-lg py-2">
            <ul className="flex flex-col gap-2 px-4 list-none">
              {navItems}

              {user ? (
                <>
                  <span className="py-2 px-2 font-semibold">
                    {user.displayName}
                  </span>
                  <Link
                    to="/dashboard"
                    className="py-2 hover:bg-gray-100 rounded transition"
                  >
                    Dashboard
                  </Link>
                  <div
                    onClick={handleLogout}
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