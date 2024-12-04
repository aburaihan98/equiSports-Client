import { Link } from "react-router";

export default function EquipmentCard({ equipment }) {
  const { _id, image, sports, category, price, rating } = equipment || {};
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
      <Link to={`/equipment-details/${_id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          View Details
        </button>
      </Link>
    </div>
  );
}
