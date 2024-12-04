import { useState } from "react";
import { useLoaderData } from "react-router";
import Equipment from "../component/equipment/Equipment";

export default function AllSportsEquipment() {
  const data = useLoaderData();
  const [equipments, setEquipments] = useState(data);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Sports Equipment
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Category</th>
              <th className="px-4 py-2 text-left font-semibold">Price</th>
              <th className="px-4 py-2 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {equipments &&
              equipments.map((equipment) => (
                <Equipment key={equipment?._id} equipment={equipment} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
