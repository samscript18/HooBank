const Button = ({ text }) => {
  return (
    <button className="px-6 py-3 capitalize font-medium text-base text-primary bg-blue-gradient rounded-lg cursor-pointer">
      {text}
    </button>
  );
};
export default Button;
