import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="w-full md:px-[3rem] py-[3rem] sm:px-[2rem] xs:px-[1.5rem] xs:py-0">
      <div className="flex sm:flex-row xs:flex-col justify-center items-center">
        {clients.map(({ id, logo }) => {
          return (
            <div
              className="sm:min-w-[100px] xs:max-w-[150px] md:mr-[4rem] sm:mr-[3rem] xs:m-[2rem] cursor-pointer"
              key={id}
            >
              <img src={logo} className="max-w-full" alt={id} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Clients;
