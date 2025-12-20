import { Link } from "react-router";
import logoImg from "../../public/images/logopet.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import avatarImg from "../../public/images/avator.jpg"

const NavBar = () => {
  const [user,setuser] = useState()
  const [isOpen, setIsOpen] = useState(false);
  const nav = (
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
      {/* dropdown menu */}

      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          {/* Dropdown btn */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          >
            {/* <AiOutlineMenu /> */}
            <div className="hidden md:block">
              {/* Avatar */}
              <img
                className="rounded-full w-8 h-8"
                referrerPolicy="no-referrer"
                src={user && user.photoURL ? user.photoURL : avatarImg}
                alt="profile"
                height="30"
                width="30"
                
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
              <Link
                to="/"
                className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Home
              </Link>

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Dashboard
                  </Link>
                  <div
                    onClick={logOut}
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-3 hover:bg-neutral-100 transition text-black font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-3 hover:bg-neutral-100 transition text-black font-semibold"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="bg-black/20 text-white font-bold fixed z-10 w-full ">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {nav}
              </ul>
            </div>
            <div className="flex items-center">
              <img className="w-18 h-18" src={logoImg} alt="" />
              <Link className="btn btn-ghost text-2xl  font-bold uppercase ">
                Mithu
              </Link>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{nav}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
