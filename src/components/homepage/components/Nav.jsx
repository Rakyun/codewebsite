const Nav = (props) => {
  return (
    <>
      <div
        className={`fixed left-0 right-0 top-[80px] z-50 h-[500px] rounded-b-[20px] bg-[#00B0E6] transition-transform duration-500 md:hidden ${
          props.isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>
    </>
  );
};

export default Nav;
