import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function EquipmentEdit() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-base-200 flex justify-center items-center">
      <div className="w-11/12 m-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Add new equipment
          </h1>
        </div>
        <div className="bg-base-100 shadow-xl rounded-lg p-8">
          <form
            onSubmit={handleEditEquipment}
            className=" lg:grid grid-cols-2 space-x-4 lg:space-x-8"
          >
            <div className="form-control ml-4 lg:ml-8">
              <label className="label text-lg font-semibold text-gray-700">
                Your name
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={user?.displayName || ""}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user?.email || ""}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Image
              </label>
              <input
                type="text"
                placeholder="Image"
                name="image"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Sports
              </label>
              <input
                type="text"
                placeholder="Sports"
                name="sports"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Category
              </label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Price
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Rating
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Customization{" "}
              </label>
              <input
                type="text"
                placeholder="Customization"
                name="customization"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Processing Time
              </label>
              <input
                type="text"
                placeholder="Processing Time"
                name="processingTime"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Stock Status
              </label>
              <select
                name="stockStatus"
                className="select select-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Limited Stock">Limited Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div className="form-control col-span-2">
              <label className="label text-lg font-semibold text-gray-700">
                Description
              </label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div></div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-primary w-full py-3 rounded-lg text-white font-semibold">
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
