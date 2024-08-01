import React from "react";

const Category = () => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold ">Category</h1>
      <div className="flex flex-col">
        <label>
          <input type="radio" name="category" id="" />
          <span></span>All
        </label>
        <label>
          <input type="radio" name="category" id="" />
          <span></span>Sneakers
        </label>
        <label>
          <input type="radio" name="category" id="" />
          <span></span>Flats
        </label>
        <label>
          <input type="radio" name="category" id="" />
          <span></span>Shoes
        </label>
      </div>
    </div>
  );
};

export default Category;
