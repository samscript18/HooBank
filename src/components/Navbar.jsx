import { useState } from "react";
import { logo, close, menu } from "../assets/export";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav className="w-full md:px-[3rem] py-[1rem] flex flex-row justify-between items-center xs:px-[1.5rem] xs:pt-[1.5rem] sm:px-[2rem]">
      <div className="logo">
        <img src={logo} className="w-[130px] h-[38px]" alt="navbar-logo" />
      </div>
      <ul className="sm:flex flex-row justify-center items-end xs:hidden">
        {navLinks.map(({ id, title }, index) => {
          return (
            <li
              key={index}
              className={`font-normal md:text-base sm:text-sm cursor-pointer ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } ${active === title ? "text-secondary" : "text-white"}`}
              onClick={() => setActive(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden xs:flex">
        <img
          src={toggle ? close : menu}
          className="w-[25px] h-[25px]"
          onClick={() => setToggle(!toggle)}
          alt="nav-toggle"
        />
      </div>
      {toggle && (
        <div className="w-[200px] bg-black-gradient absolute top-[9%] right-[5%] z-10 px-[1rem] py-[1.5rem] rounded-xl sm:hidden sidebar box-shadow">
          <ul className="flex flex-col justify-center items-center">
            {navLinks.map(({ id, title }, index) => {
              return (
                <li
                  key={index}
                  className={` py-4 font-medium text-xl cursor-pointer ${
                    active === title ? "text-secondary" : "text-white"
                  }`}
                  onClick={() => setActive(title)}
                >
                  <a href={`#${id}`} onClick={() => setToggle(false)}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
