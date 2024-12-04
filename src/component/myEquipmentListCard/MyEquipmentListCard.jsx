import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function MyEquipmentListCard({ equipment }) {
  const { _id, image, sports, category, price, rating } = equipment || {};

  const handleEquipmentDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete fetch req
        fetch(`http://localhost:3000/sports/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then((data) => {})
          .catch(() => {});
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="card shadow-lg rounded-lg p-4 bg-white">
      <img
        src={image}
        alt={sports}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex gap-8">
        <h2 className="text-lg font-bold mb-2">{sports}</h2>
        <h2 className="text-lg font-bold mb-2">{price}</h2>
      </div>
      <div className="flex gap-8">
        <p className="text-gray-600 mb-4">{category}</p>
        <p className="text-gray-600 mb-4">{rating}</p>
      </div>
      <div className="flex justify-between items-center">
        <Link
          to={`/equipment-edit/${_id}`}
          className="btn btn-primary text-white"
        >
          Update
        </Link>
        <button
          onClick={() => handleEquipmentDelete(_id)}
          className="btn btn-error text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
