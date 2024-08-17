
import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";

const ProductsCard = ({ img, title, description = '', start, reviews, prevPrice, newPrice, onClick }) => {
  // Ensure description is a string and handle cases where it might be undefined
  const truncatedDescription = typeof description === 'string'
    ? description.split(" ").slice(0, 9).join(" ") + "..."
    : "Description not available";

  return (
    <div className="card bg-base-100 lg:w-62 shadow-xl">
      <figure>
        <img className="w-44 h-[155px]" src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex flex-col">
          <p className="mb-1">{truncatedDescription}</p>
          <button 
            onClick={onClick} 
            className="text-blue-500 underline hover:text-blue-700 transition ml-1 self-start"
          >
            See more
          </button>
        </div>
        <div className="flex items-center mt-2">
          {[...Array(start)].map((_, index) => (
            <AiFillStar key={index} className="text-yellow-500" />
          ))}
          <h2 className="ml-1">{start}</h2>
        </div>
        <h1>{reviews}</h1>
        <div className="card-actions flex items-center justify-between mt-2">
          <div className="flex gap-1 items-center">
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
