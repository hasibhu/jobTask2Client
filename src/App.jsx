import { useEffect, useState } from "react";
import Navbar from "./Navigation/Navbar";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
// import products from "./db/data"; // Assuming products are ordered by oldest to newest
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="m-2 lg:mx-auto lg:max-w-screen-xl p-5 bg-slate-300">
      <div className="lg:flex">
        <div className="lg:w-2/12 sticky top-1/2 lg:mt-60 lg:h-screen pl-12 hidden lg:block ">
          <Sidebar />
        </div>

        <div className="w-px bg-gray-400 mx-5 hidden lg:block"></div>

        <div className="lg:w-10/12 ml-auto">
          <Navbar />
          <div className="overflow-y-auto h-[calc(100vh-4rem)] p-2">
            <Recommended />
            <Products />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
