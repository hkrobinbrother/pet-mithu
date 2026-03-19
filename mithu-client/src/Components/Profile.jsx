import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  // Example role (you can later make it dynamic from DB)
  const role = "User";

  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* Background Section */}
      <div className="relative h-64 md:h-80">
        <img
          src="https://i.ibb.co.com/VWZ8D5HS/pexels-nadialovessingle-6821106.jpg"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Profile Card */}
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 text-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/2kR1Q2k/avatar.png"}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover mx-auto shadow-lg"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="mt-24 text-center px-4">

        <h2 className="text-3xl font-bold text-gray-800">
          {user?.displayName || "Unknown User"}
        </h2>

        <p className="text-gray-500 mt-2">
          {user?.email}
        </p>

        {/* Role */}
        <span className="inline-block mt-4 px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-semibold">
          {role}
        </span>

        {/* Extra Info Card */}
        <div className="mt-8 max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-left">

          <h3 className="text-lg font-semibold mb-3">Profile Info</h3>

          <p><strong>Name:</strong> {user?.displayName}</p>
          <p className="mt-2"><strong>Email:</strong> {user?.email}</p>
          <p className="mt-2"><strong>Role:</strong> {role}</p>

        </div>
      </div>

    </div>
  );
};

export default Profile;