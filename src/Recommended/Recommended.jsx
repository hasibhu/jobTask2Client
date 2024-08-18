import Button from "../components/Button";
import CategoryDropdown from "../Sidebar/Category/CategoryDropdown";
import PriceDropdown from "../Sidebar/Price/PriceDropdown";
import ColorsDropdown from "../Sidebar/Colors/ColorsDropdown";
import { useProducts } from "../hooks/ProductContext";

const Recommended = () => {
  const { setFilter } = useProducts();

  const handleClick = (event) => {
    const brand = event.target.value;
    setFilter("company", brand);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center lg:gap-4 gap-2 m-2">
        <button
          onClick={handleClick}
          value=""
          className="btn border-2 border-lime-200 font-bold"
        >
          All Brands
        </button>

        <Button handleClick={handleClick} value="Nike" title="Nike" />
        <Button handleClick={handleClick} value="NYX" title="NYX" />
        <Button handleClick={handleClick} value="Adidas" title="Adidas" />
        <Button handleClick={handleClick} value="Puma" title="Puma" />
        <Button handleClick={handleClick} value="Vans" title="Vans" />
        <Button handleClick={handleClick} value="Fusion" title="Fusion" />
        <Button handleClick={handleClick} value="Seed King" title="Seed King" />
      </div>

      <div className="flex flex-wrap justify-center items-center lg:gap-4 gap-2 m-2 lg:hidden">
        <CategoryDropdown handleRadioChange={setFilter} />
        <PriceDropdown handleRadioChange={setFilter} />
        <ColorsDropdown handleRadioChange={setFilter} />
      </div>
    </div>
  );
};

export default Recommended;
