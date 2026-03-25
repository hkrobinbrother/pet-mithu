import { Link } from "react-router";

const DashboardHome = () => {
  return (
    <div className="p-6 space-y-6">

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold">Welcome Back 🐾</h2>
        <p className="mt-2">Manage your pets, donations, and activities from here.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-gray-500">Total Pets</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-gray-500">Donations</h3>
          <p className="text-3xl font-bold mt-2">$1,250</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-gray-500">Adopted Pets</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

      </div>
      

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/dashboard/petFrom"
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
          >
            ➕ Add New Pet
          </Link>

          <Link
            to="/petListing"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
          >
            🐶 View Pets
          </Link>

          <Link
            to="/donation"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            ❤️ Donation Campaigns
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>

        <ul className="space-y-3 text-gray-600">
          <li>🐾 New pet "Max" added</li>
          <li>💰 Donation received: $50</li>
          <li>🐶 Pet "Lucy" adopted</li>
        </ul>
      </div>

    </div>
  );
};

export default DashboardHome;