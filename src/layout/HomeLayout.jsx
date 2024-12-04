import AboutUs from "../component/home/AboutUs";
import CustomerReviews from "../component/home/CustomerReviews";
import Equipments from "../component/home/Equipments";
import Slider from "../component/home/Slider";

export default function HomeLayout() {
  return (
    <>
      <Slider />
      <CustomerReviews />
      <Equipments />
      <AboutUs />
    </>
  );
}
