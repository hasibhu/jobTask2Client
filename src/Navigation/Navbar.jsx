
import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState()
  const {setProducts} = useContext(AuthContext)

  const handleSearch = async () => {
    if (!searchValue) return;

    try {
      const res = await fetch(`https://ecommerce-server-sable-zeta.vercel.app/search?query=${searchValue}`);

      const data = await res.json();
      setProducts(data);
      // console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

 
  

  


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
              onChange={(e)=>setSearchValue(e.target.value)}
              type="text"
              placeholder="Search here..."
              className="rounded-l-xl p-2 outline outline-red-600"
            />
            <button className="rounded-r-xl p-3 bg-[#EE4144] text-white  outline-red-600" onClick = {handleSearch}>search</button>
          </div>

          <div className="ml-3">
            <Login></Login>
          </div>
        </nav>
   </div>
  );
};

export default Navbar;
