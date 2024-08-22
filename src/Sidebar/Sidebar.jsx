/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Input from "../components/Input";
import { AuthContext } from './../Provider/AuthProvider';

const Sidebar = () => {
  const {setCategory, setPrice, setColor} = useContext(AuthContext)

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handlePriceChange = (e) => {
   
      const value = e.target.value;
  
      if (value) {
        const [min, max] = value.slice(1, -1).split(",").map(Number);
  
        setPrice([min, max]);
      }
  }

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }
  
  return (
    <div>
      <section className="">
        {/* <CategoryDropdown handleRadioChange={handleRadioChange}></CategoryDropdown> */}
        <div className="mb-2">
          <h1 className="text-2xl font-bold ">Category</h1>
          <div className="flex flex-col">
            <label>
              <input
                onChange={handleCategoryChange}
                type="radio"
                value=""
                name="category"
                id=""
              />
              <span></span>All
            </label>

            <Input
              handleRadioChange={handleCategoryChange}
              value="shoes"
              title="Shoes"
              name="category"
            ></Input>

            {/* Cosmetics */}
            <Input
              handleRadioChange={handleCategoryChange}
              value="cosmetics"
              title="Cosmetics"
              name="category"
            ></Input>

            {/* Pants */}
            <Input
              handleRadioChange={handleCategoryChange}
              value="pants"
              title="Pants"
              name="category"
            ></Input>

            {/* vegetable */}
            <Input
              handleRadioChange={handleCategoryChange}
              value="vegetable"
              title="Vegetable"
              name="category"
            ></Input>
          </div>
        </div>

        {/* <PriceDropdown handleRadioChange={handleRadioChange}></PriceDropdown> */}
        <div className="mb-2">
          <h1 className="text-2xl font-bold ">Price</h1>
          <div className="flex flex-col">
            <label>
              <input
                onChange={handlePriceChange}
                value=""
                type="radio"
                name="price"
              />
              <span></span>All
            </label>

            <Input
              handleRadioChange={handlePriceChange}
              value="[0,50]"
              name="price"
              title="$0-$50"
            ></Input>

            <Input
              handleRadioChange={handlePriceChange}
              value = "[51,100]"
              name="price"
              title="$51-$100"
            ></Input>
            <Input
              handleRadioChange={handlePriceChange}
              value="[101,150]"
              name="price"
              title="$101-$150"
            ></Input>
            <Input
              handleRadioChange={handlePriceChange}
              value="[151,10000000]"
              name="price"
              title="Over $150"
            ></Input>
          </div>
        </div>

        {/* <ColorsDropdown handleRadioChange={handleRadioChange}></ColorsDropdown> */}
        <div>
          <h1 className="text-2xl font-bold ">Colors</h1>
          <div className="flex flex-col">
            <label>
              <input
                onChange={handleColorChange}
                type="radio"
                value=""
                name="color"
                id=""
              />
              <span></span>All
            </label>

            <Input
              handleRadioChange={handleColorChange}
              value="black"
              title="Black"
              name="color"
            ></Input>

            <Input
              handleRadioChange={handleColorChange}
              value="blue"
              title="Blue"
              name="color"
            ></Input>
            <Input
              handleRadioChange={handleColorChange}
              value="red"
              title="Red"
              name="color"
            ></Input>
            <Input
              handleRadioChange={handleColorChange}
              value="green"
              title="Green"
              name="color"
            ></Input>
            <Input
              handleRadioChange={handleColorChange}
              value="white"
              title="White"
              name="color"
            ></Input>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Sidebar;
