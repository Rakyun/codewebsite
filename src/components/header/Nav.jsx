import ukflag from "../../assets/ukflag.png";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 flex h-[480px] flex-col rounded-b-[20px] bg-[#00B0E6] py-4 pl-10 pt-[80px] transition-transform duration-500 md:hidden ${
          props.isVisible ? "translate-y-0" : "-translate-y-[500px]"
        }`}
      >
        <a
          className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white   hover:opacity-80  active:opacity-50"
          rel="noreferrer"
        >
          <Link to="/">CO-DE</Link>
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          COURSES
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          <Link to="/playground">OUR PLAYGROUND</Link>
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          TRENDS
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          <Link to="/contactUs">CONTACT US</Link>
        </a>
        <div className="my-3 flex cursor-pointer select-none items-center hover:opacity-80 active:opacity-50">
          <img src={ukflag} alt="flag" className="h-[25px] w-[40px]" />
          <p className="bold font-comfortaa ml-3 text-xl text-white">English</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
