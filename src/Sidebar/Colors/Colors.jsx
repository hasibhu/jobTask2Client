import { useProducts } from "../../hooks/ProductContext";

const Colors = () => {
  const { setFilter } = useProducts();

  const handleRadioChange = (event) => {
    setFilter("color", event.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Colors</h1>
      <div className="flex flex-col">
        <label>
          <input
            onChange={handleRadioChange}
            value=""
            type="radio"
            name="color"
          />
          All
        </label>
        <label>
          <input
            onChange={handleRadioChange}
            value="Red"
            type="radio"
            name="color"
          />
          Red
        </label>
        {/* Add more colors as needed */}
      </div>
    </div>
  );
};

export default Colors;
