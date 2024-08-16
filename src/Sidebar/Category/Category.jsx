import React from "react";
import Input from "../../components/Input";

const Category = ({ handleRadioChange }) => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold ">Category</h1>
      <div className="flex flex-col">
        <label>
          <input
            onChange={handleRadioChange}
            type="radio"
            value=""
            name="category"
            id=""
          />
          <span></span>All
        </label>

        <Input
          handleRadioChange={handleRadioChange}
          value="shoes"
          title="Shoes"
          name="category"
        ></Input>
        
{/* Cosmetics */}
        <Input
          handleRadioChange={handleRadioChange}
          value="cosmetics"
          title="Cosmetics"
          name="category"
        ></Input>

        {/* Pants */}
        <Input
          handleRadioChange={handleRadioChange}
          value="pants"
          title="Pants"
          name="category"
        ></Input>

        {/* Clothe */}
        <Input
          handleRadioChange={handleRadioChange}
          value="clothes"
          title="Clothes"
          name="category"
        ></Input>

        {/* vegetable */}
        <Input
          handleRadioChange={handleRadioChange}
          value="vegetable"
          title="Vegetable"
          name="category"
        ></Input>
      </div>
    </div>
  );
};

export default Category;
