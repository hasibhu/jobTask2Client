import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import ProductsCard from "./Products/ProductsCard";

function App() {
  // for category
  const [selectedCatergory, setSelectedCatergory] = useState(null);
  const [query, setQuery] = useState("");

  //-------------- input filter -----------------
  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  //-------------- Radio filter -----------------
  const handleRadioChange = (event) => {
    setSelectedCatergory(event.target.value);
  };

  //-------------- Buttons filter -----------------
  const handleClick = (event) => {
    setSelectedCatergory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Apply search filter
    if (query) {
      filteredProducts = filteredItems;
    }

    // Apply category or other filters
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <ProductsCard
          key={Math.random()} // It's better to use a stable key if possible, like product ID
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        ></ProductsCard>
      )
    );
  }

  const result = filteredData(products, selectedCatergory, query);

  return (
    <div className="m-2 mx-auto max-w-screen-xl p-5 bg-slate-300">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-2/12 sticky top-1/2 mt-60 h-screen">
          <Sidebar handleRadioChange={handleRadioChange} />
        </div>

        <div className="w-px bg-gray-400 mx-5"></div>

        {/* Main Content */}
        <div className="w-10/12 ml-auto">
          <Navbar />
          <div className="overflow-y-auto h-[calc(100vh-4rem)] p-2">
            <Recommended />
            {filteredData(products, selectedCatergory, query)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
