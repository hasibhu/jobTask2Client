


import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
// import products from "./db/data"; // Assuming products are ordered by oldest to newest
import Products from "./Products/Products";
import Footer from "./Footer/Footer";
import useAllProducts from "./hooks/useAllProducts";
// import useAllProducts from "./hooks/useAllProducts";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortByDate, setSortByDate] = useState("");
  const [products, refetch, isLoading] = useAllProducts();
  const handleInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
  

  const handleRadioChange = (event) => {
    const value = event.target.value;
    if (event.target.name === "price") {
      setSelectedPriceRange(value);
    } else {
      setSelectedCategory(value);
    }
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSortByDateChange = (event) => {
    setSortByDate(event.target.value);
  };

  const filterByPrice = (product) => {
    if (!selectedPriceRange) return true;

    if (selectedPriceRange == 50) return product.newPrice <= 50;
    if (selectedPriceRange == 100) return product.newPrice > 50 && product.newPrice <= 100;
    if (selectedPriceRange == 150) return product.newPrice > 100 && product.newPrice <= 150;
    if (selectedPriceRange == 200) return product.newPrice > 150;

    return true;
  };



const filteredData = (products, selectedCategory, query, selectedPriceRange) => {
    let filteredProducts = products;

    // Date sorting logic based on array order
    if (sortByDate === "newestFirst") {
      filteredProducts = [...filteredProducts].reverse(); // Reverse the array to show newest first
    }

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selectedCategory ||
          product.color === selectedCategory ||
          product.company === selectedCategory ||
          product.title === selectedCategory
      );
    }

    if (selectedPriceRange) {
      filteredProducts = filteredProducts.filter(filterByPrice);
    }

    // Sorting logic
    if (sortOrder === "lowToHigh") {
      filteredProducts.sort((a, b) => a.newPrice - b.newPrice);
    } else if (sortOrder === "highToLow") {
      filteredProducts.sort((a, b) => b.newPrice - a.newPrice);
    }

    // If "oldestFirst" is selected or no date sorting is selected, do nothing further
    return filteredProducts;
  };




  const filteredProducts = filteredData(
    products,
    selectedCategory,
    query,
    selectedPriceRange
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const loadMoreProducts = () => {
    setProductsPerPage((prevProductsPerPage) => prevProductsPerPage + 4);
  };

  return (
    <div className="m-2 lg:mx-auto lg:max-w-screen-xl p-5 bg-slate-300">
      <div className="lg:flex">
        <div className="lg:w-2/12 sticky top-1/2 lg:mt-60 lg:h-screen pl-12 hidden lg:block ">
          <Sidebar handleRadioChange={handleRadioChange} />
        </div>

        <div className="w-px bg-gray-400 mx-5 hidden lg:block"></div>

        <div className="lg:w-10/12 ml-auto">
          <Navbar query={query} handleInputChange={handleInputChange} />
          <div className="overflow-y-auto h-[calc(100vh-4rem)] p-2">
            <Recommended
              handleClick={handleClick}
              handleRadioChange={handleRadioChange}
            />
            {/* Sorting Dropdown */}
            <div className="mb-4 flex space-x-4 flex-wrap justify-center items-center">
              <div>
                <label className="mr-2">Sort by Price:</label>
                <select onChange={handleSortChange} value={sortOrder}>
                  <option value="">Select</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
              <div>
                <label className="mr-2">Sort by Date:</label>
                <select onChange={handleSortByDateChange} value={sortByDate}>
                  <option value="">Select</option>
                  <option value="newestFirst">Date Added: Newest First</option>
                  <option value="oldestFirst">Date Added: Oldest First</option>
                </select>
              </div>
            </div>

            <Products products={currentProducts} />
            {filteredProducts.length > indexOfLastProduct && (
              <div className="flex justify-center items-center ">
                <button
                onClick={loadMoreProducts}
                className="mt-4 p-2 bg-purple-700 text-white rounded"
              >
                See More
              </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
