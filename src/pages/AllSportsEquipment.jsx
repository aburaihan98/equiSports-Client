import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import EquipmentTable from "../component/equipment/EquipmentTable";

export default function AllSportsEquipment() {
  const [loading, setLoading] = useState(true);
  const [equipments, setEquipments] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setEquipments(data);
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-11/12 m-auto pt-8 pb-24">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">
        All Sports Equipment
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Category</th>
              <th className="px-4 py-2 text-left font-semibold">Price</th>
              <th className="px-4 py-2 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {equipments &&
              equipments.map((equipment) => (
                <EquipmentTable key={equipment?._id} equipment={equipment} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
