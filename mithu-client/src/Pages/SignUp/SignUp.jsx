import { Link } from "react-router";
import { useForm } from "react-hook-form";

const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // here you will connect firebase createUser
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-md">
          
          <p className="py-6 text-gray-500">
            <img src="../../../public/images/register.jpg" alt="Register illustration" />
          </p>
        </div>

        {/* Form Section */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

              {/* Name */}
              <h1 className="text-3xl font-bold">Create Account 🚀</h1>
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Image URL */}
              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                  {...register("photo", { required: "Photo URL is required" })}
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm">{errors.photo.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button type="submit" className="btn btn-primary w-full mt-2">
                Register
              </button>

            </form>

            {/* Login Link */}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold">
                Login
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;