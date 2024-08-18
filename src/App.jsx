import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";
import { useProducts } from "./hooks/ProductContext";

function App() {
  const { products, isLoading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const loadMoreProducts = () => {
    setProductsPerPage((prevProductsPerPage) => prevProductsPerPage + 4);
  };

  return (
    <div className="m-2 lg:mx-auto lg:max-w-screen-xl p-5 bg-slate-300">
      <div className="lg:flex">
        <div className="lg:w-2/12 sticky top-1/2 lg:mt-60 lg:h-screen pl-12 hidden lg:block ">
          <Sidebar />
        </div>

        <div className="w-px bg-gray-400 mx-5 hidden lg:block"></div>

        <div className="lg:w-10/12 ml-auto">
          <Navbar />
          <div className="overflow-y-auto h-[calc(100vh-4rem)] p-2">
            <Recommended />
            <Products products={currentProducts} />
            {products.length > indexOfLastProduct && (
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
