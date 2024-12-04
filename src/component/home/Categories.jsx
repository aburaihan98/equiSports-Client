import { NavLink, useLoaderData, useLocation } from "react-router";

export default function Categories() {
  const { pathname } = useLocation();
  const data = useLoaderData();

  return (
    <div className="w-11/12 m-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Equipment Categories
      </h1>
      <NavLink
        to="/"
        className={
          pathname === "/"
            ? "bg-blue-500 text-white btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out"
            : "btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out"
        }
      >
        <button className="">All Category</button>
      </NavLink>
      {data &&
        data.map((equipment) => (
          <div key={equipment._id}>
            <NavLink
              to={`/${equipment?._id}`}
              className={({ isActive }) =>
                isActive
                  ? "btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out bg-blue-500 text-white"
                  : "btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out hover:bg-blue-500"
              }
            >
              {equipment?.category || "No Category"}
            </NavLink>
          </div>
        ))}
    </div>
  );
}
