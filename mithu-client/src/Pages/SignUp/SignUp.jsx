import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const baseUrl = import.meta.env.VITE_baseUrl;

  // Email/password signup
  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const result = await createUser(data.email, data.password);
      const user = result.user;

      const tokenRes = await axios.post(`${baseUrl}/jwt`, {
        email: user.email,
        name: data.name,
        photo: data.photo,
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

  // Google signup/login
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
          <img src="/images/register.jpg" alt="register" className="h-full w-full object-cover" />
        </div>

        <div className="p-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Create Account 🚀</h2>
          <p className="text-gray-500 mb-6">Join us and start your journey today</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-600">Name</label>
              <input type="text" placeholder="Your Name" className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition" {...register("name", { required: "Name is required" })} />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">Photo URL</label>
              <input type="text" placeholder="Image URL" className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition" {...register("photo", { required: "Photo URL is required" })} />
              {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition" {...register("email", { required: "Email is required" })} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-400 transition" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })} />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold shadow-md hover:scale-105 transition duration-300">
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <button onClick={handleGoogle} disabled={loading} className="btn bg-white text-black border w-full flex items-center justify-center gap-2">Continue with Google</button>

          <p className="text-center text-sm mt-6">
            Already have an account? <Link to="/login" className="text-amber-500 font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;