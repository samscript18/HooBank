import { robot, discount } from "../assets/export";
import GetStarted from "./GetStarted";

const Header = () => {
  return (
    <section
      id="Home"
      className="w-full xl:max-w-[1280px] flex md:flex-row xs:flex-col justify-between items-center relative md:px-[3rem] md:pt-4 sm:px-[2rem] xs:px-[1.5rem] xs:py-[2.5rem] xs:pb-[8rem] sm:pb-8"
    >
      <div className="text-white md:max-w-xl lg:max-w-2xl">
        <div className="md:w-[330px] sm:w-[300px] xs:w-full p-1 sm:pl-[1px] rounded-lg bg-discount-gradient">
          <div className="flex flex-row justify-center items-center capitalize">
            <img src={discount} className="mr-2" alt="discount" />
            <p className="font-medium text-dimWhite cursor-pointer md:text-base sm:text-sm xs:text-base">
              <span className="text-white">20%</span> discount for
              <span className="text-white"> 1 Month </span> account
            </p>
          </div>
        </div>
        <h1 className="capitalize md:text-6xl sm:text-5xl xs:text-[50px] md:leading-[68px] sm:leading-[56px] xs:leading-[78px] my-5 font-bold">
          the next <br className="xs:hidden md:block" />{" "}
          <span className="text-gradient">generation </span> <br />
          payment method
        </h1>
        <GetStarted />
        <p className="font-normal text-dimWhite mt-7 xs:text-base">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <p className="font-normal text-dimWhite mt-3 xs:text-base">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>
      <div className="flex-1 relative">
        <img
          src={robot}
          className="max-w-full max-h-full relative xs:my-14 md:my-0"
          alt="header-img"
        />
      </div>
    </section>
  );
};
export default Header;
