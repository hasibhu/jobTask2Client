import { BsCart4 } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <div>
      <section>
        <div>
          <BsCart4 />
        </div>

        <Category></Category>
        <Price></Price>
        <Colors></Colors>
      </section>
    </div>
  );
};

export default Sidebar;
