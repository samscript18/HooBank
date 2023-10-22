import { logo } from "../assets/export";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="w-full md:px-[3rem] py-[2rem] sm:px-[2rem] xs:px-[1.5rem]">
      <div className="flex flex-col">
        <div className="flex sm:flex-row xs:flex-col justify-start items-start mb-4">
          <div className="basis-1/4 md:mr-[9rem] xs:mr-[4rem]">
            <img src={logo} className="max-w-full" alt="logo" />
            <p className="font-normal md:text-lg xs:text-base text-white my-10">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          {footerLinks.map(({ title, links }, index) => {
            return (
              <div className="basis-1/4" key={index}>
                <h3 className="text-white sm:text-base xs:text-base font-bold mb-2 sm:mt-0 xs:mt-7">
                  {title}
                </h3>
                {links.map(({ name, link }, index) => {
                  return (
                    <div className="flex flex-col" key={index}>
                      <a
                        href={link}
                        className="font-normal md:text-lg xs:text-base text-white my-2 hover:text-secondary duration-500 cursor-pointer"
                      >
                        {name}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex sm:flex-row xs:flex-col justify-between items-center border-t-[1px] border-[#1e1e20] pt-6">
          <p className="text-white xs:text-base font-medium sm:text-start xs:text-center hover:text-secondary duration-500">
            Copyright &copy; 2023 HooBank.Made by Samscript
          </p>
          <div className="flex flex-row justify-start item-center">
            {socialMedia.map(({ id, icon, link }) => {
              return (
                <div className="mr-8 sm:mt-0 xs:mt-8" key={id}>
                  <a href={link}>
                    <img
                      src={icon}
                      className="max-w-full cursor-pointer"
                      alt={id}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
