const Input = ({ handleRadioChange, value, title, name }) => {
  return (
    <label>
      <input
        onChange={handleRadioChange}
        type="radio"
        value={value}
        name={name}
      />
      <span></span>
      {title}
    </label>
  );
};

export default Input;

