import { card } from "../assets/export";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="w-full md:px-[3rem] py-[3rem] sm:px-[2rem] xs:px-[1.5rem]">
      <div className="flex md:flex-row xs:flex-col justify-start items-center">
        <div className="basis-1/2 md:mr-12">
          <h1 className="font-bold md:text-[2.6rem] xs:text-[2.4rem] text-white">
            Find a better card deal
            <br />
            in few easy steps.
          </h1>
          <p className="font-normal sm:text-lg xs:text-base text-dimWhite my-8">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button text={"get started"} />
        </div>
        <div className="basis-1/2">
          <img src={card} className="max-w-full md:mt-0 xs:mt-8" alt="card" />
        </div>
      </div>
    </section>
  );
};
export default CardDeal;
