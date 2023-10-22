import { quotes } from "../assets/export";

const FeedBackCard = ({ id, img, name, title, content }) => {
  return (
    <div
      className="basis-1/3 w-full feedback-card md:mr-8 xs:mr-0 md:mt-0 xs:mt-8 sm:px-8 sm:py-6 xs:px-5 xs:py-5 rounded-xl cursor-pointer"
      id={id}
    >
      <img src={quotes} className="max-w-full" alt="quotes" />
      <p className="font-normal text-lg sm:text-base text-white my-10">
        {content}
      </p>
      <div className="flex flex-row justify-start item-center">
        <img src={img} className="max-w-full mr-4" alt={name} />
        <div className="flex flex-col justify-center item-center">
          <h3 className="text-white sm:text-base xs:text-base font-bold">
            {name}
          </h3>
          <p className="text-dimWhite sm:text-base xs:text-base font-normal">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default FeedBackCard;
