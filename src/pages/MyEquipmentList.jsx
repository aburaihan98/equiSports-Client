import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import MyEquipmentListCard from "../component/myEquipmentListCard/MyEquipmentListCard";
import { AuthContext } from "../provider/AuthProvider";

export default function MyEquipmentList() {
  const { user, loading } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/sports/by-email/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setEquipments(data))
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please try again later.",
          });
        });
    }
  }, [user?.email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-11/12 m-auto">
      <h1 className="text-3xl font-bold text-center mb-8">My Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        {equipments.length === 0 ? (
          <div>No equipment found</div>
        ) : (
          equipments.map((equipment) => (
            <MyEquipmentListCard key={equipment?._id} equipment={equipment} />
          ))
        )}
      </div>
    </div>
  );
}
