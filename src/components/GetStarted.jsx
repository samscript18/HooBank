import { arrowUp } from "../assets/export";

const GetStarted = () => {
  return (
    <div className="w-[100px] h-[100px] p-[1px] rounded-full bg-blue-gradient absolute lg:top-[30%] lg:left-[30%] md:top-[25%] md:left-[38%] sm:top-[6%] sm:left-[73%] xs:bottom-[2%] xs:left-[38%] cursor-pointer z-10">
      <div className="w-full h-full rounded-full bg-primary flex flex-row justify-center items-center">
        <p className="text-gradient md:text-base font-medium">
          <span className="flex justify-center items-center">
            Get{" "}
            <span>
              <img src={arrowUp} className="ml-[6px]" alt="arrow-up" />
            </span>
          </span>
          Started
        </p>
      </div>
    </div>
  );
};
export default GetStarted;
