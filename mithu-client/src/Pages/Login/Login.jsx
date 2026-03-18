import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const baseUrl = import.meta.env.VITE_baseUrl;

  // Email/password login
  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const result = await signIn(data.email, data.password);
      const user = result.user;

      // Save to DB & get JWT
      const tokenRes = await axios.post(`${baseUrl}/jwt`, {
        email: user.email,
        name: user.displayName || "",
        photo: user.photoURL || "",
      });
      localStorage.setItem("access-token", tokenRes.data.token);

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      const tokenRes = await axios.post(`${baseUrl}/jwt`, {
        email: user.email,
        name: user.displayName || "",
        photo: user.photoURL || "",
      });
      localStorage.setItem("access-token", tokenRes.data.token);

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        <div className="hidden md:block">
          <img src="/images/login.png" alt="login" className="h-full w-full object-cover" />
        </div>

        <div className="p-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back 👋</h2>
          <p className="text-gray-500 mb-6">Login to continue your journey</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition" {...register("email", { required: "Email is required" })} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition" {...register("password", { required: "Password is required" })} />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div className="text-right">
              <a className="text-sm text-amber-500 hover:underline cursor-pointer">Forgot password?</a>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold shadow-md hover:scale-105 transition duration-300">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <button onClick={handleGoogle} disabled={loading} className="btn w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            Continue with Google
          </button>

          <p className="text-center text-sm mt-6">
            Don't have an account? <Link to="/signUp" className="text-amber-500 font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;