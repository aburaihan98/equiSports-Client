import React from "react";
import { Link } from "react-router";

export default function Equipment({ equipment }) {
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
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2">${price}</td>
      <td className="px-4 py-2 text-center">
        <Link to={`/equipment-details/${_id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
}
