import React from "react";
import Login from "./Login";

const Navbar = ({ handleInputChange, query }) => {
  return (
    <nav className="flex justify-around items-center p-10 bg-blue-400  ">
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your text here..."
          className="rounded-xl p-2 outline outline-red-600"
        />
      </div>

      <div>
        <Login></Login>
      </div>
    </nav>
  );
};

export default Navbar;
