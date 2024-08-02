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
