import { useEffect, useState } from "react";
import code_logo from "../../assets/others/code_logo.png";
import nav_logo from "../../assets/others/nav.png";
import ukflag from "../../assets/others/ukflag.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [headerStyle, setHeaderStyle] = useState(" translate-y-0");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        setHeaderStyle("md:-translate-y-[120px]");
      } else {
        setHeaderStyle("md:translate-y-0");
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
        <div className="relative hidden w-[90%]  gap-[1%]  md:flex md:text-[1.45vw]  lg:text-[1.3vw]">
          <Link
            to="/"
            className="flex-grow cursor-pointer select-none font-comfortaa text-white  hover:opacity-80  active:opacity-50"
          >
            CO-DE
          </Link>

          <Link
            to="/courses"
            className="flex-grow cursor-pointer select-none font-comfortaa text-white  hover:opacity-80  active:opacity-50"
          >
            COURSES
          </Link>

          <Link
            to="/playground"
            className="flex-grow cursor-pointer select-none font-comfortaa text-white  hover:opacity-80  active:opacity-50"
          >
            OUR PLAYGROUND
          </Link>

          <a className="flex-grow cursor-pointer select-none font-comfortaa text-white  hover:opacity-80 active:opacity-50">
            TRENDS
          </a>

          <Link
            to="/contactUs"
            className="flex-grow cursor-pointer select-none font-comfortaa text-white  hover:opacity-80  active:opacity-50"
          >
            CONTACT US
          </Link>
        </div>
        {/* <div className="absolute right-10 top-2 hidden cursor-pointer select-none items-center hover:opacity-80 active:opacity-50  md:flex">
          <img src={ukflag} alt="flag" className="h-[20px] w-[30px]" />
          <p className="bold ml-1 font-comfortaa text-[13px] text-white">
            English
          </p>
        </div> */}
      </header>
    </>
  );
};

export default Header;
