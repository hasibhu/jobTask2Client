import React from "react";
import Input from "../../components/Input";

const Category = ({ handleRadioChange }) => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold ">Category</h1>
      <div className="flex flex-col">
        <label>
          <input type="radio" name="category" id="" />
          <span></span>All
        </label>

        <Input
          handleRadioChange={handleRadioChange}
          value="sneakers"
          title="Sneakers"
          name="category"
        ></Input>

        <Input
          handleRadioChange={handleRadioChange}
          value="flats"
          title="flats"
          name="category"
        ></Input>

        <Input
          handleRadioChange={handleRadioChange}
          value="sandals"
          title="Sndals"
          name="category"
        ></Input>
        <Input
          handleRadioChange={handleRadioChange}
          value="heels"
          title="Heels"
          name="category"
        ></Input>
      </div>
    </div>
  );
};

export default Category;
