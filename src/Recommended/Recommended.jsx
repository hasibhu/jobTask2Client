import Button from "../components/Button";

import CategoryDropdown from "../Sidebar/Category/CategoryDropdown";
import PriceDropdown from "../Sidebar/Price/PriceDropdown";
import ColorsDropdown from "../Sidebar/Colors/ColorsDropdown";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Recommended = ({ handleRadioChange }) => {
  const { setCategory, setPrice, setColor, setBrand } = useContext(AuthContext);
  

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value) {
      const [min, max] = value.slice(1, -1).split(",").map(Number);
      setPrice([min, max]);
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleClick = (e) =>{
    const value = e.target.value;
    setBrand(value)
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center lg:gap-4 gap-2 m-2  ">
        <button
          onClick={handleClick}
          value=""
          className="btn border-2 border-lime-200 font-bold"
        >
          All Brands
        </button>
        <Button handleClick={handleClick} value="Nike" title="Nike"></Button>
        <Button handleClick={handleClick} value="NYX" title="NYX"></Button>
        <Button handleClick={handleClick} value="Adidas" title="Adidas"></Button>
        <Button handleClick={handleClick} value="Puma" title="Puma"></Button>
        <Button handleClick={handleClick} value="Vans" title="Vans"></Button>
        <Button handleClick={handleClick} value="Fusion" title="Fusion" ></Button>
        <Button handleClick={handleClick} value="Seed King" title="Seed King" ></Button>
      </div>

      <div className="flex flex-wrap justify-center items-center lg:gap-4 gap-2 m-2 lg:hidden">
        <CategoryDropdown handleRadioChange={handleCategoryChange} ></CategoryDropdown>
        <PriceDropdown handleRadioChange={handlePriceChange}></PriceDropdown>
        <ColorsDropdown handleRadioChange={handleColorChange}></ColorsDropdown>
      </div>
    </div>
  );
};

export default Recommended;
