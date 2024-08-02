import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {" "}
      {/* Grid with 4 columns */}
      {products.map(({ img, title, start, reviews, prevPrice, newPrice }) => (
        <ProductsCard
          key={Math.random()} // Use a stable key, such as product ID or title
          img={img}
          title={title}
          start={start}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ))}
    </div>
  );
};

export default Products;
