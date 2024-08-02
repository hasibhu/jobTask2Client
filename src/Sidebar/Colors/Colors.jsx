const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold ">Colors</h1>
      <div className="flex flex-col">
        <label>
          <input type="radio" name="color" id="" />
          <span></span>Black
        </label>
        <label>
          <input type="radio" name="color" id="" />
          <span></span>Blue
        </label>
        <label>
          <input type="radio" name="color" id="" />
          <span></span>Red
        </label>
        <label>
          <input type="radio" name="color" id="" />
          <span></span>Green
        </label>
        <label>
          <input type="radio" name="color" id="" />
          <span></span>White
        </label>
      </div>
    </div>
  );
};

export default Colors;
