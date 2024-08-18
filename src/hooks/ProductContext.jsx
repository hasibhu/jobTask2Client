import React, { createContext, useContext, useState } from "react";
import useAllProducts from "../hooks/useAllProducts";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, isLoading] = useAllProducts();
  const [filter, setFilter] = useState("");

  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  return (
    <ProductContext.Provider value={{ products: filteredProducts, setFilter, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
