import Input from "../../components/Input";

const Price = ({ handleRadioChange }) => {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-bold ">Price</h1>
      <div className="flex flex-col">
        <label>
          <input
            onChange={handleRadioChange}
            value=""
            type="radio"
            name="price"
          />
          <span></span>All
        </label>

        <Input
          handleRadioChange={handleRadioChange}
          value={50}
          name="price"
          title="$0-$50"
        ></Input>

        <Input
          handleRadioChange={handleRadioChange}
          value={100}
          name="price"
          title="$51-$100"
        ></Input>
        <Input
          handleRadioChange={handleRadioChange}
          value={150}
          name="price"
          title="$101-$150"
        ></Input>
        <Input
          handleRadioChange={handleRadioChange}
          value={200}
          name="price"
          title="Over $150"
        ></Input>
      </div>
    </div>
  );
};

export default Price;
