const Price = () => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold ">Price</h1>
      <div className="flex flex-col">
        <label>
          <input type="radio" name="test" id="" />
          <span></span>All
        </label>
        <label>
          <input type="radio" name="test" id="" />
          <span></span>$0-$50
        </label>
        <label>
          <input type="radio" name="test" id="" />
          <span></span>$51-$100
        </label>
        <label>
          <input type="radio" name="test" id="" />
          <span></span>$101-$150
        </label>
        <label>
          <input type="radio" name="test" id="" />
          <span></span>200
        </label>
      </div>
    </div>
  );
};

export default Price;
