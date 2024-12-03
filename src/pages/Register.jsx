import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one Uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one Lowercase letter");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must contain at least one six characters");
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("Your register successful");
        navigate("/login");
      })
      .catch(() => toast.error("Enter your valid email!"));
  };

  return (
    <div className="bg-base-200 flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Register now!
          </h1>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-lg p-8">
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label mb-2 text-sm text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label mb-2 text-sm text-gray-700">Photo</label>
              <input
                type="text"
                placeholder="Phot url"
                name="photo"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label mb-2 text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label mb-2 text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full py-3 rounded-lg text-white font-semibold">
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Allready Have An Account ?{" "}
              <Link to="/login" className="text-primary font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
