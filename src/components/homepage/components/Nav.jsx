import ukflag from "../../../assets/ukflag.png";

const Nav = (props) => {
  return (
    <>
      <div
        className={`fixed left-0 right-0 top-[80px]  z-50 flex h-[400px] flex-col rounded-b-[20px] bg-[#00B0E6] py-4 pl-10 transition-transform duration-500 md:hidden ${
          props.isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white   hover:opacity-80  active:opacity-50"
          rel="noreferrer"
        >
          CO-DE
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          COURSES
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          OUR PLAYGROUND
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          TRENDS
        </a>
        <a className="font-comfortaa my-4 cursor-pointer select-none text-xl text-white  hover:opacity-80 active:opacity-50">
          CONTACT US
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
