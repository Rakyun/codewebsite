import { useEffect, useState } from "react";
import code_logo from "../../../assets/code_logo.png";
import nav_logo from "../../../assets/nav.png";
import ukflag from "../../../assets/ukflag.png";

const Header = (props) => {
  const [headerStyle, setHeaderStyle] = useState(" -translate-y-[120px]");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        setHeaderStyle("-translate-y-[120px]");
      } else {
        setHeaderStyle("translate-y-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[9999] flex h-[80px] items-center justify-between bg-[#29446A] px-10 drop-shadow-lg transition duration-500  md:left-12 md:right-12 md:h-[110px] md:rounded-bl-[60px] md:rounded-br-[60px] ${headerStyle}`}
      >
        <img
          src={code_logo}
          alt="Logo"
          className="relative right-11 h-[120px] w-[120px]  md:right-16 md:h-[200px] md:w-[200px]"
        />
        <img
          src={nav_logo}
          onClick={props.toggle}
          alt="nav"
          className="cursor-pointer select-none hover:opacity-90 active:opacity-70 md:hidden"
        />
        <div className="relative right-12 hidden w-[90%] md:flex md:justify-between lg:justify-evenly">
          <a
            className="font-comfortaa cursor-pointer select-none text-white hover:opacity-80  active:opacity-50  md:text-[1.6vw]  lg:text-[1.3vw]"
            rel="noreferrer"
          >
            CO-DE
          </a>
          <a className="font-comfortaa cursor-pointer select-none text-white hover:opacity-80  active:opacity-50 md:text-[1.6vw]  lg:text-[1.3vw]">
            COURSES
          </a>
          <a className="font-comfortaa cursor-pointer select-none text-white hover:opacity-80  active:opacity-50 md:text-[1.6vw]  lg:text-[1.3vw]">
            OUR PLAYGROUND
          </a>
          <a className="font-comfortaa cursor-pointer select-none text-white hover:opacity-80  active:opacity-50 md:text-[1.6vw]  lg:text-[1.3vw]">
            TRENDS
          </a>
          <a className="font-comfortaa cursor-pointer select-none text-white hover:opacity-80  active:opacity-50 md:text-[1.6vw]  lg:text-[1.3vw]">
            CONTACT US
          </a>
        </div>
        <div className="absolute right-10 top-2 hidden cursor-pointer select-none items-center hover:opacity-80 active:opacity-50  md:flex">
          <img src={ukflag} alt="flag" className="h-[20px] w-[30px]" />
          <p className="bold font-comfortaa ml-1 text-[13px] text-white">
            English
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
