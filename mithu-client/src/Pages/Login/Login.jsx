import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16">

        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src="/images/login.png"
            alt="login illustration"
            className="max-w-md"
          />
        </div>

        {/* Form Section */}
        <div className="card w-full max-w-sm bg-base-100 shadow-xl">
          <div className="card-body">

            <h2 className="text-3xl font-bold text-center mb-4">
              Welcome Back 👋
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <a className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Login
              </button>
            </form>

            {/* Signup */}
            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="text-primary font-semibold"
              >
                Sign Up
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;