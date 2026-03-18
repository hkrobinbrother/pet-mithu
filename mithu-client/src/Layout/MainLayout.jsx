import NavBar from "../sheared/NavBar";
import { Outlet, useLocation } from "react-router";
import Footer from "../sheared/Footer";

const MainLayout = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  // Navbar height (approx 72px) ke padding-top hisebe content-e add kora
  const navbarHeight = 72; // Tailwind nav height in px (adjust if needed)

  return (
    <div className="relative">
      {!noHeaderFooter && <NavBar />}

      <div
        className="min-h-screen "
        style={{ paddingTop: !noHeaderFooter ? `${navbarHeight}px` : "" }}
      >
        <Outlet />
      </div>

      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;