import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router";
import EquipmentCard from "./EquipmentCard";

export default function Equipments() {
  const { category } = useParams();
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch("https://equi-sports-server-ivory.vercel.app")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filteredEquipments = data.filter(
            (equipment) =>
              equipment?.category?.toLowerCase() === category.toLowerCase()
          );
          setEquipments(filteredEquipments);
        } else {
          setEquipments(data);
        }
      });
  }, [category]);

  return (
    <div className="w-11/12 m-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        <Fade cascade>Customer Reviews</Fade>
      </h2>
      <p className="text-center font-medium mb-8">
        Hear from our valued customers about their experiences with our
        products. Your feedback helps us improve and serve you better.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {equipments && equipments.length > 0 ? (
          equipments.map((equipment) => (
            <EquipmentCard key={equipment?._id} equipment={equipment} />
          ))
        ) : (
          <div className="col-span-3 text-center mt-8 text-gray-500 text-xl font-bold">
            No equipment found. Please check back later!
          </div>
        )}
      </div>
    </div>
  );
}
