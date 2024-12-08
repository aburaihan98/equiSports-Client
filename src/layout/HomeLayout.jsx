import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import AboutUs from "../component/home/AboutUs";
import Categories from "../component/home/Categories";
import CustomerReviews from "../component/home/CustomerReviews";
import Slider from "../component/home/Slider";

export default function HomeLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Slider />
      <div className="w-11/12 m-auto ">
        <div className="">
          <Categories />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
      <CustomerReviews />
      <AboutUs />
    </>
  );
}
