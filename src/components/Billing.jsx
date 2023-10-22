import { apple, bill, google } from "../assets/export";

const Billing = () => {
  return (
    <section
      id="product"
      className="w-full md:px-[3rem] py-[3rem] sm:px-[2rem] xs:px-[1.5rem]"
    >
      <div className="flex md:flex-row xs:flex-col justify-start items-center">
        <div className="basis-1/2">
          <img src={bill} className="max-w-full" alt="bill" />
        </div>
        <div className="basis-1/2">
          <h1 className="font-bold sm:text-[2.6rem] xs:text-[2.4rem] text-white">
            Easily control your
            <br />
            billing and invoicing.
          </h1>
          <p className="font-normal md:text-lg xs:text-base text-dimWhite my-8">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex flex-row justify-start item-center">
            <img src={apple} className="max-w-full" alt="apple" />
            <img src={google} className="max-w-full" alt="goggle" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Billing;
