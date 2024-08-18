const Button = ({ handleClick, value, title }) => {
  return (
    <button
      onClick={handleClick}
      value={value}
      className="btn border-2 border-lime-200 font-bold"
    >
      {title}
    </button>
  );
};

export default Button;
