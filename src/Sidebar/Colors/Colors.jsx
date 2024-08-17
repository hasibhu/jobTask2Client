import Input from "../../components/Input";

const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold ">Colors</h1>
      <div className="flex flex-col">
        <label>
          <input
            onChange={handleRadioChange}
            type="radio"
            value=""
            name="color"
            id=""
          />
          <span></span>All
        </label>

        <Input
          handleRadioChange={handleRadioChange}
          value="black"
          title="Black"
          name="color"
        ></Input>
        
        <Input
          handleRadioChange={handleRadioChange}
          value="blue"
          title="Blue"
          name="color"
        ></Input>
        <Input
          handleRadioChange={handleRadioChange}
          value="red"
          title="Red"
          name="color"
        ></Input>
        <Input
          handleRadioChange={handleRadioChange}
          value="green"
          title="Green"
          name="color"
        ></Input>
        <Input
          handleRadioChange={handleRadioChange}
          value="white"
          title="White"
          name="color"
        ></Input>
      </div>
    </div>
  );
};

export default Colors;
