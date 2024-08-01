import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-10 bg-blue-400  ">
      <div>
        <input
          type="text"
          placeholder="Enter your text here..."
          className="rounded-xl p-2 outline outline-red-600"
        />
      </div>

      <div>
        <h1>Profile</h1>
      </div>
    </nav>
  );
};

export default Navbar;
