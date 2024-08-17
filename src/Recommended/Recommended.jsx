
import Button from "../components/Button";

import CategoryDropdown from "../Sidebar/Category/CategoryDropdown";
import PriceDropdown from '../Sidebar/Price/PriceDropdown'
import ColorsDropdown from '../Sidebar/Colors/ColorsDropdown'
import { useState } from "react";

const Recommended = ({ handleClick, handleRadioChange }) => {
 

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
        <Button handleClick={handleClick} value="Fusion" title="Fusion"></Button>
        <Button handleClick={handleClick} value="Seed King" title="Seed King"></Button>


      </div>
      
      <div className="flex flex-wrap justify-center items-center lg:gap-4 gap-2 m-2 lg:hidden">
        <CategoryDropdown handleRadioChange={handleRadioChange}></CategoryDropdown>
        <PriceDropdown handleRadioChange={handleRadioChange}></PriceDropdown>
        <ColorsDropdown handleRadioChange={handleRadioChange}></ColorsDropdown>

      </div>
    </div>
  );
};

export default Recommended;
