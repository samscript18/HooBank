const Features = ({ id, icon, title, content }) => {
  return (
    <div
      className="flex flex-row justify-start items-start my-4 px-6 py-3 rounded-xl cursor-pointer feature-card"
      id={id}
    >
      <div className="sm:w-[50px] sm:h-[50px] xs:w-[75px] xs:h-[50px] p-3 flex md:justify-center items-center bg-dimBlue rounded-full mr-4">
        <img src={icon} className="object-contain" alt={title} />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-white xs:text-base font-bold">{title}</h3>
        <p className="text-dimWhite xs:text-base font-normal">{content}</p>
      </div>
    </div>
  );
};
export default Features;
