import React, { useState } from 'react';
import ProductsCard from './ProductsCard';
import Modal from './Modal';

const Products = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-1">
        {products.map(product => (
          <ProductsCard
            key={product.id} // Ensure `product.id` is a unique and stable key
            {...product}
            onClick={() => openModal(product)}
          />
        ))}
      </div>
      
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Products;
