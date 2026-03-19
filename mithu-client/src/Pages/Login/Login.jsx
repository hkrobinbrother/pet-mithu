import { Link, useNavigate, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const baseUrl = import.meta.env.VITE_baseUrl;

  // 🔥 Firebase error clean function
  const getErrorMessage = (error) => {
    if (error.includes("auth/invalid-credential")) {
      return "Invalid email or password";
    }
    if (error.includes("auth/user-not-found")) {
      return "User not found";
    }
    if (error.includes("auth/wrong-password")) {
      return "Wrong password";
    }
    return "Something went wrong";
  };

  // ✅ Email Login
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await signIn(data.email, data.password);
      const user = result.user;

      // JWT
      const tokenRes = await axios.post(`${baseUrl}/jwt`, {
        email: user.email,
        name: user.displayName || "",
        photo: user.photoURL || "",
      });

      localStorage.setItem("access-token", tokenRes.data.token);

      toast.success("Login Successful 🎉");

      navigate(from, { replace: true });

    } catch (err) {
      toast.error(getErrorMessage(err.message));
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login
  const handleGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      const tokenRes = await axios.post(`${baseUrl}/jwt`, {
        email: user.email,
        name: user.displayName || "",
        photo: user.photoURL || "",
      });

      localStorage.setItem("access-token", tokenRes.data.token);

      toast.success(" Login Successful 🚀");

      navigate(from, { replace: true });

    } catch {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* Image */}
        <div className="hidden md:block">
          <img src="/images/login.png" alt="login" className="h-full w-full object-cover" />
        </div>

        {/* Form */}
        <div className="p-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back 👋</h2>
          <p className="text-gray-500 mb-6">Login to continue your journey</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold hover:scale-105 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Google */}
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-amber-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;