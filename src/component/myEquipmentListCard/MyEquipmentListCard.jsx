import React from "react";

export default function MyEquipmentListCard() {
  return (
    <div key={item._id} className="card shadow-lg rounded-lg p-4 bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{item.name}</h2>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/equipment-edit/${item._id}`}
          className="btn btn-primary text-white"
        >
          Update
        </Link>
        <button
          onClick={() => handleDelete(item._id)}
          className="btn btn-error text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
