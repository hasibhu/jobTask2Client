
import Login from "./Login";

const Navbar = ({ handleInputChange, query }) => {
  return (
      <div className=" bg-blue-400 p-3 rounded-lg">
        <div className="flex justify-center items-center pb-2 lg:hidden sm:block">
            <h1 className="w-20 h-20 bg-red-500 rounded-full text-white font-extrabold text-2xl flex justify-center items-center">
              Bazar
            </h1>
        </div>
      <nav className="flex justify-around  items-center lg:p-10  ">
        <div className="lg:first-line:flex justify-center items-center pb-2 hidden lg:block">
            <h1 className="w-20 h-20 bg-red-500 rounded-full text-white font-extrabold text-2xl lg:flex justify-center items-center">
              Bazar
            </h1>
        </div>
          <div>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Search here..."
              className="rounded-xl p-2 outline outline-red-600"
            />
          </div>

          <div className="ml-3">
            <Login></Login>
          </div>
        </nav>
   </div>
  );
};

export default Navbar;
