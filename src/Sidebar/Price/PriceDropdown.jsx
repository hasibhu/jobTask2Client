import React from "react";

const PriceDropdown = ({ handleRadioChange }) => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold text-center">Price</h1>
      <div className="flex flex-col">
        <select
          onChange={handleRadioChange}
          name="price"
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value= "[0,50]">$0-$50</option>
          <option value= "[51,100]">$51-$100</option>
          <option value= "[101,150]">$101-$150</option>
          <option value= "[151,2000000]">Over $150</option>
        </select>
      </div>
    </div>
  );
};

export default PriceDropdown;
