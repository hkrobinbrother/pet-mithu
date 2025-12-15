import { Link } from "react-router";
import logoImg from "../../public/images/logopet.png"


const NavBar = () => {
  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/petListing">Pet Listing</Link>
      </li>
      <li>
        <a>Donation Campaigns</a>
      </li>

      <li className="ml-14">
        <a >Login</a>
      </li>
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
              <Link className="btn btn-ghost text-2xl  font-bold uppercase ">Mithu</Link>
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
