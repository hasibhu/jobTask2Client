import { useProducts } from "../../hooks/ProductContext";

const Price = () => {
  const { setFilter } = useProducts();

  const handleRadioChange = (event) => {
    setFilter("priceRange", event.target.value);
  };

  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold">Price</h1>
      <div className="flex flex-col">
        <label>
          <input
            onChange={handleRadioChange}
            value=""
            type="radio"
            name="price"
          />
          All
        </label>
        <label>
          <input
            onChange={handleRadioChange}
            value={50}
            name="price"
          />
          $0-$50
        </label>
        {/* Add more price ranges as needed */}
      </div>
    </div>
  );
};

export default Price;
