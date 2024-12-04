import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

export default function EquipmentDetails() {
  const { id } = useParams();
  const data = useLoaderData();

  const equipment = data.find((eq) => eq._id === id);

  if (!equipment) {
    return (
      <p className="text-4xl font-bold mt-12 lg:mt-24 text-center text-red-500">
        Equipment not found!
      </p>
    );
  }

  const {
    _id,
    name,
    email,
    image,
    sports,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipment || {};
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">{name}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div>
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* Details Section */}
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Sports Type:</span> {sports}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating} / 5
          </p>
          <p>
            <span className="font-semibold">Customization:</span>{" "}
            {customization ? "Available" : "Not Available"}
          </p>
          <p>
            <span className="font-semibold">Processing Time:</span>{" "}
            {processingTime} days
          </p>
          <p>
            <span className="font-semibold">Stock Status:</span> {stockStatus}
          </p>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Seller Email:</span> {email}
          </p>
          <Link to={`/equipment-edit/${_id}`}>
            <button className="bg-blue-500 text-white mr-2 lg:mr-4 px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Edit equipment
            </button>
          </Link>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            Delete equipment
          </button>
        </div>
      </div>
    </div>
  );
}
