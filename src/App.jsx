import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Products from "./Products/Products"; // Updated to use Products component
import Footer from "./Footer/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selectedCategory || // Filtering by category
          product.color === selectedCategory || // Filtering by color
          product.company === selectedCategory || // Filtering by company
          product.title === selectedCategory || // Filtering by title
          product.newPrice === selectedCategory // Filtering by price
      );
    }

    return filteredProducts;
  };

  const filteredProducts = filteredData(products, selectedCategory, query);

  return (
    <div className="m-2 lg:mx-auto lg:max-w-screen-xl p-5 bg-slate-300">
      <div className="lg:flex">

        <div className="lg:w-2/12 sticky top-1/2 lg:mt-60 lg:h-screen hidden lg:block ">
          <Sidebar handleRadioChange={handleRadioChange} />
        </div>

        <div className="w-px bg-gray-400 mx-5 hidden lg:block"></div>

        <div className="lg:w-10/12 ml-auto">
          <Navbar query={query} handleInputChange={handleInputChange} />
          <div className="overflow-y-auto h-[calc(100vh-4rem)] p-2">
            <Recommended handleClick={handleClick} handleRadioChange={handleRadioChange}/>
            <Products products={filteredProducts} />{" "}
           
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
