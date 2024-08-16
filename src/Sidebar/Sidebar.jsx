/* eslint-disable react/prop-types */
import { BsCart4 } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import CategoryDropdown from "./Category/CategoryDropdown";
import PriceDropdown from "./Price/PriceDropdown";
import ColorsDropdown from "./Colors/ColorsDropdown";

const Sidebar = ({ handleRadioChange }) => {
  return (
    <div>
      <section className="">
       
        {/* <CategoryDropdown handleRadioChange={handleRadioChange}></CategoryDropdown> */}
        <Category handleRadioChange={handleRadioChange}></Category>

        {/* <PriceDropdown handleRadioChange={handleRadioChange}></PriceDropdown> */}
        <Price handleRadioChange={handleRadioChange}></Price>

        
        {/* <ColorsDropdown handleRadioChange={handleRadioChange}></ColorsDropdown> */}
        <Colors handleRadioChange={handleRadioChange}></Colors>
      </section>
    </div>
  );
};

export default Sidebar;
