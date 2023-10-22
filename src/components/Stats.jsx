import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className="w-full md:px-[3rem] 
   xs:px-[1.5rem] pt-[1rem] pb-[3rem]"
    >
      <div className="flex sm:flex-row xs:flex-wrap lg:flex-nowrap xs:flex-col lg:justify-start sm:justify-center items-center text-white">
        {stats.map(({ id, title, value }) => {
          return (
            <div
              className="flex md:flex-row xs:flex-col lg:justify-start sm:justify-center  items-center sm:min-w-[350px] md:mr-20 xs:py-[2rem] cursor-pointer"
              key={id}
            >
              <h1 className="font-bold text-4xl md:mr-4">{value}</h1>
              <h2 className="text-base uppercase text-gradient  md:mt-0 xs:mt-2">
                {title}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Stats;
