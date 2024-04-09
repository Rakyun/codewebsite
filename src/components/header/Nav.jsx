import ukflag from "../../assets/others/ukflag.png";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 flex h-[480px] flex-col rounded-b-[20px] bg-[#00B0E6] py-4 pl-10 pt-[80px] transition-transform duration-500 md:hidden ${
          props.isVisible ? "translate-y-0" : "-translate-y-[500px]"
        }`}
      >
        <Link
          to="/"
          className="my-4 cursor-pointer select-none font-comfortaa text-xl text-white  hover:opacity-80 active:opacity-50"
        >
          CO-DE
        </Link>
        <Link
          to="/courses"
          className="my-4 cursor-pointer select-none font-comfortaa text-xl text-white  hover:opacity-80 active:opacity-50"
        >
          COURSES
        </Link>
        <Link
          to="/playground"
          className="my-4 cursor-pointer select-none font-comfortaa text-xl text-white  hover:opacity-80 active:opacity-50"
        >
          OUR PLAYGROUND
        </Link>
        <a className="my-4 cursor-pointer select-none font-comfortaa text-xl text-white  hover:opacity-80 active:opacity-50">
          TRENDS
        </a>
        <Link
          to="/contactUs"
          className="my-4 cursor-pointer select-none font-comfortaa text-xl text-white  hover:opacity-80 active:opacity-50"
        >
          CONTACT US
        </Link>

        {/* <div className="my-3 flex cursor-pointer select-none items-center hover:opacity-80 active:opacity-50">
          <img src={ukflag} alt="flag" className="h-[25px] w-[40px]" />
          <p className="bold ml-3 font-comfortaa text-xl text-white">English</p>
        </div> */}
      </div>
    </>
  );
};

export default Nav;
