import { Outlet } from "react-router";
import AboutUs from "../component/home/AboutUs";
import Categories from "../component/home/Categories";
import CustomerReviews from "../component/home/CustomerReviews";
import Slider from "../component/home/Slider";

export default function HomeLayout() {
  return (
    <>
      <Slider />
      <div className="w-11/12 m-auto grid lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Categories />
        </div>
        <div className="lg:col-span-10">
          <Outlet />
        </div>
      </div>
      <CustomerReviews />
      <AboutUs />
    </>
  );
}
