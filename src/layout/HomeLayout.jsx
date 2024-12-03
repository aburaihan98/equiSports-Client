import AboutUs from "../component/home/AboutUs";
import CustomerReviews from "../component/home/CustomerReviews";
import Slider from "../component/home/Slider";

export default function HomeLayout() {
  return (
    <>
      <Slider />
      <CustomerReviews />
      <AboutUs />
    </>
  );
}
