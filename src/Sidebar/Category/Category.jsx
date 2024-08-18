import React from 'react';
import { useProducts } from "../../hooks/ProductContext";

const Category = () => {
  const { setFilter, isLoading, products } = useProducts(); // Access products for debugging

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleRadioChange = (event) => {
    const category = event.target.value;
    setFilter(category);
    console.log("Selected category:", category);
    console.log("Filtered products:", products); // Debug output
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Category</h1>
      <div className="flex flex-col">
        <label>
          <input
            onChange={handleRadioChange}
            type="radio"
            value=""
            name="category"
          />
          All
        </label>
        <label>
          <input
            onChange={handleRadioChange}
            type="radio"
            value="Shoes"
            name="category"
          />
          Shoes
        </label>
        <label>
          <input
            onChange={handleRadioChange}
            type="radio"
            value="Cosmetics"
            name="category"
          />
          Cosmetics
        </label>
        <label>
          <input
            onChange={handleRadioChange}
            type="radio"
            value="Pants"
            name="category"
          />
          Pants
        </label>
        <label>
          <input
            onChange={handleRadioChange}
            type="radio"
            value="Vegetable"
            name="category"
          />
          Vegetable
        </label>
      </div>
    </div>
  );
};

export default Category;
