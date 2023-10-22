import Button from "./Button";

const CTA = () => {
  return (
    <section className="md:px-[3rem] py-[3rem] sm:px-[2rem] xs:px-[1.5rem]">
      <div className="w-full flex md:flex-row xs:flex-col justify-start md:items-center xs:items-start bg-black-gradient-2 sm:px-10 sm:py-8 xs:px-7 xs:py-5 rounded-xl">
        <div className="flex flex-col flex-1">
          <h1 className="font-bold sm:text-[2.6rem] xs:text-[2.4rem] text-white">
            Let's try our service now.
          </h1>
          <p className="font-normal md:text-lg xs:text-base text-dimWhite my-4">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex flex-col">
          <Button text={"get started"} />
        </div>
      </div>
    </section>
  );
};
export default CTA;
