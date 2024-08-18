// Example implementation of useAllProducts
import { useState, useEffect } from 'react';

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5007/products'); // Adjust the API endpoint as needed
        const data = await response.json();
        setProducts(data); // Ensure this is an object with an allProducts property
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return [products, isLoading];
};

export default useAllProducts;
