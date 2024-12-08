import { Fade } from "react-awesome-reveal";
import { NavLink, useLoaderData, useLocation } from "react-router";

export default function Categories() {
  const { pathname } = useLocation();
  const data = useLoaderData();

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="w-11/12 m-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        <Fade cascade>Categories</Fade>
      </h1>
      <p className="text-center font-medium  mb-8">
        Explore our wide range of sports equipment categories. Select a category
        to find the perfect gear tailored to your needs.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {uniqueCategories.length > 0 ? (
          <>
            <Fade direction="left">
              <NavLink
                to="/"
                className={
                  pathname === "/"
                    ? "bg-primary text-white btn w-full mb-2 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    : "btn w-full mb-2 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                }
              >
                <button>All Category</button>
              </NavLink>

              {uniqueCategories.map((category, index) => (
                <div key={index}>
                  <NavLink
                    to={`/${category}`}
                    className={({ isActive }) =>
                      isActive
                        ? "btn w-full mb-2 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out bg-primary text-white"
                        : "btn w-full mb-2 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-primary"
                    }
                  >
                    {category || "No Category"}
                  </NavLink>
                </div>
              ))}
            </Fade>
          </>
        ) : (
          <div className="col-span-4 text-center mt-8 text-gray-500 text-xl font-bold w-full">
            No categories available.
          </div>
        )}
      </div>
    </div>
  );
}
