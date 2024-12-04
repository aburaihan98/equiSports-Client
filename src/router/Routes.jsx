import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import AddEquipment from "../pages/AddEquipment";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";
import EquipmentEdit from "../pages/EquipmentEdit";
import Login from "../pages/Login";
import MyEquipmentList from "../pages/MyEquipmentList";
import Register from "../pages/Register";
import Root from "../Root";
import ErrorPage from "./../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        loader: () => fetch("http://localhost:3000/sports"),
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment />,
        loader: () => fetch("http://localhost:3000/sports"),
      },
      {
        path: "/my-equipment-list",
        element: <MyEquipmentList />,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
      {
        path: "/equipment-details/:id",
        element: <EquipmentDetails />,
        loader: () => fetch("http://localhost:3000/sports"),
      },
      {
        path: "/equipment-edit/:id",
        element: <EquipmentEdit />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/sports/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
