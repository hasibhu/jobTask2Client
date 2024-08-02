import React from "react";
import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="flex gap-4 m-2 ">
      <button
        onClick={handleClick}
        value=""
        className="btn border-2 border-lime-200 font-bold"
      >
        All Products
      </button>

      <Button handleClick={handleClick} value="Nike" title="Nike"></Button>
      <Button handleClick={handleClick} value="Adidas" title="Adidas"></Button>
      <Button handleClick={handleClick} value="Puma" title="Puma"></Button>
      <Button handleClick={handleClick} value="Vans" title="Vans"></Button>
    </div>
  );
};

export default Recommended;
