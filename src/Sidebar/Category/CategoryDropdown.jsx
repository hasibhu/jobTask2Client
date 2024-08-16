

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
          <option value="sneakers">Sneakers</option>
          <option value="flats">Flats</option>
          <option value="sandals">Sandals</option>
          <option value="heels">Heels</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryDropdown;
