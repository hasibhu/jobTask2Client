

const CategoryDropdown = ({ handleRadioChange }) => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold text-center">Category</h1>
      <div className="flex flex-col">
        <select
          onChange={handleRadioChange}
          name="category"
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="shoes">Shoes</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="pants">Pants</option>
          <option value="vegetable">Vegetables</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryDropdown;
