import MyEquipmentListCard from "../component/myEquipmentListCard/MyEquipmentListCard";

export default function MyEquipmentList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {equipment.map((item) => (
          <MyEquipmentListCard />
        ))}
      </div>
    </div>
  );
}
