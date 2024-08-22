const Button = ({ handleClick, value, title }) => {
  return (
    <button
      className="btn  border-2 border-lime-200 font-bold"
      onClick={handleClick}
      value={value}
    >
      {title}
    </button>
  );
};

export default Button;
