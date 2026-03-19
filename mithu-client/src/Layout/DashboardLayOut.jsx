import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";


const DashboardLayout = () => {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;