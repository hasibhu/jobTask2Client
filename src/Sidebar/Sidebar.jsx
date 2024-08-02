import { BsCart4 } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleRadioChange }) => {
  return (
    <div>
      <section>
        <div>
          <BsCart4 />
        </div>

        <Category handleRadioChange={handleRadioChange}></Category>
        <Price handleRadioChange={handleRadioChange}></Price>
        <Colors handleRadioChange={handleRadioChange}></Colors>
      </section>
    </div>
  );
};

export default Sidebar;
