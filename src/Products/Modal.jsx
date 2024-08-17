/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-300 focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
        <img src={product.img} alt={product.title} className=" h-[225px] mb-4" />
        <p className="mb-4">{product.description}</p>
        <div className="flex items-center mb-4">
          {[...Array(product.start)].map((_, index) => (
            <AiFillStar key={index} className="text-yellow-500" />
          ))}
          <h2 className="ml-2 text-lg">{product.start}</h2>
        </div>
        <h1 className="mb-4 text-lg">{product.reviews}</h1>
        <div className="flex gap-2">
          <h1 className="text-lg font-semibold">Price: $</h1>
          <del className="text-gray-500">{product.prevPrice}</del> {product.newPrice}
        </div>
      </div>
    </div>
  );
};

export default Modal;
