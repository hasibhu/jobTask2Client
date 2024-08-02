import { FaStar } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";

const ProductsCard = ({ img }) => {
  return (
    <div className="card bg-base-100 w-52 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex items-center">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <h2 className="ml-1">4</h2>
        </div>

        <div className="card-actions flex items-center justify-between">
          {/* price part  */}
          <div className="flex gap-1">
            <h1>Price: $</h1>
            <del>300</del> 200
          </div>
          <IoBagAdd className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
