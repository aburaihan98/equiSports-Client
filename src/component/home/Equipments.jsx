import { useState } from "react";
import { useLoaderData } from "react-router";
import EquipmentCard from "./EquipmentCard";

export default function Equipments() {
  const data = useLoaderData();
  const [equipments, setEquipments] = useState(data);

  return (
    <div className="w-11/12 m-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Our Sports Equipment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {equipments &&
          equipments.map((equipment) => (
            <EquipmentCard key={equipment?._id} equipment={equipment} />
          ))}
      </div>
    </div>
  );
}
