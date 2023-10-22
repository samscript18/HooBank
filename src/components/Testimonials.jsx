import FeedBackCard from "./FeedBackCard";
import { feedback } from "../constants";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="w-full md:px-[3rem] py-[3rem] sm:px-[2rem] xs:px-[1.5rem]"
    >
      <div className="flex flex-col justify-start item-start">
        <div className="flex md:flex-row xs:flex-col justify-start md:items-center xs:item-start mb-8">
          <div className="basis-1/2">
            <h1 className="font-bold sm:text-[2.6rem] xs:text-[2.4rem] text-white">
              What people are <br /> saying about us.
            </h1>
          </div>
          <div className="basis-1/2">
            <p className="font-normal md:text-lg xs:text-base text-dimWhite my-8">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row xs:flex-col justify-start items-center md:mt-12 xs:mt-6">
          {feedback.map((feedbacks, index) => {
            return <FeedBackCard {...feedbacks} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
