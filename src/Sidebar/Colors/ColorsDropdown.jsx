import React from "react";

const ColorsDropdown = ({ handleRadioChange }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Colors</h1>
      <div className="flex flex-col">
        <select
          onChange={handleRadioChange}
          name="color"
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
};

export default ColorsDropdown;
