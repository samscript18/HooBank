import Button from "./Button";
import { features } from "../constants";
import Features from "./Features";

const Business = () => {
  return (
    <section
      id="features"
      className="w-full md:px-[3rem] py-[2rem] sm:px-[2rem] xs:px-[1.5rem]"
    >
      <div className="flex md:flex-row xs:flex-col justify-start items-center">
        <div className="basis-1/2 md:mr-12">
          <h1 className="font-bold md:text-[2.6rem] xs:text-[2.4rem] text-white">
            You do the business,
            <br />
            we'll handle the money.
          </h1>
          <p className="font-normal md:text-lg xs:text-base text-dimWhite my-8">
            With the right credit card, you can truly improve your financial
            life by building credit, earning rewards and saving money. But with
            hundreds of credit cards on the market.
          </p>
          <Button text={"get started"} />
        </div>
        <div className="basis-1/2 flex flex-col xs:w-full xs:pt-4">
          {features.map((feature, index) => {
            return <Features {...feature} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Business;
