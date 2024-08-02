import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";

const ProductsCard = ({ img, title, start, reviews, prevPrice, newPrice }) => {
  return (
    <div className="card bg-base-100 w-56 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex items-center">
          {[...Array(start)].map((_, index) => (
            <AiFillStar key={index} className="text-yellow-500" />
          ))}
          <h2 className="ml-1">{start}</h2>
        </div>
        <h1>{reviews}</h1>
        <div className="card-actions flex items-center justify-between">
          <div className="flex gap-1">
            <h1>Price: $</h1>
            <del>{prevPrice}</del> {newPrice}
          </div>
          <IoBagAdd className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

// break down the expression [{...Array(start)].map((_, index) => ( <AiFillStar key={index} className="text-yellow-500" /> ))} in detail.

// Step-by-Step Explanation
// 1. Array(start):
// The Array() constructor is used to create a new array with a specified length.
// Array(start) creates an array with start number of empty slots. For example, if start is 5, it will create an array with 5 empty slots: [ , , , , ].
// 2. [...Array(start)]:
// The spread operator (...) is used to spread the elements of an array into a new array.
// Array(start) by itself creates an array with empty slots, but these slots are not iterables. When you use the spread operator with Array(start), it converts those empty slots into actual undefined values, which makes the array iterable.
// This means [...Array(start)] will convert [ , , , , ] into [undefined, undefined, undefined, undefined, undefined].
// 3. .map((_, index) => (...):
// .map() is an array method that creates a new array by calling a provided function on every element in the calling array.
// In this case, .map() is used to iterate over each element of the array created by [...Array(start)].
// The callback function inside .map() takes two parameters: the current element (which we don't need, so it's represented by _ to signify that it will be ignored) and the index of the element in the array.
// 4. <AiFillStar key={index} className="text-yellow-500" />:
// For each element in the array, the callback function returns a <AiFillStar /> component.
// The key={index} part is a unique identifier for each component instance. React uses this key to efficiently update the DOM when the array changes.
// The className="text-yellow-500" is used to style the star icon, making it appear yellow.
// Putting It All Together
// Array Creation: Array(start) creates an array with start number of slots.
// Spreading: [...Array(start)] spreads the array to make it iterable.
// Mapping: .map((_, index) => (<AiFillStar />)) iterates over the array and returns a <AiFillStar /> component for each item.
// Key Attribute: Each star icon is given a unique key based on its index.
// Result
// This entire expression generates an array of <AiFillStar /> components, with the number of stars corresponding to the value of start. Each star is rendered in the JSX, and the array is automatically expanded and displayed in the UI.
