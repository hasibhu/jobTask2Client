import { createContext, useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import ProductsCard from "./ProductsCard";
import { AuthContext } from './../Provider/AuthProvider';

export const ProductContext = createContext();

const Products = () => {
  const {products,setProducts} = useContext(AuthContext);
 
  // Sorting
  const [sortByDate, setSortByDate] = useState("asc");
  const [sortByPrice, setSortByPrice] = useState("asc");

  // Pagination
  const [productLength, setProductLength] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const perPageData = 15;
  const totalPage = Math.ceil(productLength / perPageData);

  const paginationArray = [...Array(totalPage).keys()];

  const handlePrevBtn = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextBtn = () => {
    if (pageNumber < paginationArray.length - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    fetch(
      `https://ecommerce-server-sable-zeta.vercel.app/products?pages=${pageNumber}&size=${perPageData}&sortPrice=${sortByPrice}&sortDate=${sortByDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.allProduct);
        setProductLength(data.allProductLength);
      });
  }, [pageNumber, sortByPrice, sortByDate]);

  // Pagination End

 

  // Category + price Range
  const [category, setCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([1, 10000000]);

  const handlePriceRange = (e) => {
    const value = e.target.value;

    if (value) {
      const [min, max] = value.slice(1, -1).split(",").map(Number);

      setPriceRange([min, max]);
    }
  };

  useEffect(() => {
    fetch(
      `https://ecommerce-server-sable-zeta.vercel.app/search-category?category=${category}&min=${priceRange[0]}&max=${priceRange[1]}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category, priceRange]);

  return (
    
    <div className="min-h-[calc(100vh-100px)]">
      <div className="mb-4 flex space-x-4 flex-wrap justify-center items-center">
        {/* price  */}
        <div>
          <label className="mr-2">Sort by Price:</label>
          <select onChange={(e) => setSortByPrice(e.target.value)}>
            <option value="">Select</option>
            <option value="asc">Low to High</option>
            <option value="dsc">High to Low</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Sort by Date:</label>
          <select onChange={(e) => setSortByDate(e.target.value)}>
            <option value="">Select</option>
            <option value="asc"> Newest First</option>
            <option value="dsc"> Oldest First</option>
          </select>
        </div>
      </div>
      <div className="lg:w-4/5 mx-auto my-5 lg:my-10 overflow-auto">
       
      </div>
      {/* Products */}
      <div className="lg:w-4/5 mx-auto mt-10 p-3 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>

        {/* Pagination */}
      </div>

      {/* Pagination  */}
      <div className="flex items-center justify-center gap-5 my-5 overflow-x-auto">
        <button
          onClick={handlePrevBtn}
          className="shadow-sm shadow-gray-500 rounded-sm bg-gray-50 px-4 py-1"
        >
          Prev
        </button>

        {paginationArray.map((page, index) => (
          <button
            onClick={() => setPageNumber(page)}
            key={index}
            className={
              pageNumber === page
                ? "shadow-sm shadow-gray-500 text-white rounded-sm bg-yellow-500 px-4 py-1"
                : "shadow-sm shadow-gray-500 rounded-sm bg-gray-50 px-4 py-1"
            }
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNextBtn}
          className="shadow-sm shadow-gray-500 rounded-sm bg-gray-50 px-4 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
