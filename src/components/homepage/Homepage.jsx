import { useState, useEffect } from "react";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Header from "../header/Header";
import Layer1 from "./components/Layer1";
import Layer2 from "./components/Layer2";
import Layer3 from "./components/Layer3";
import Layer4 from "./components/Layer4";
import Nav from "../header/Nav";
import Message from "../msg/Message";

const Homepage = () => {
  const page = "Home";
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const showFilter = () => {
    setOpenFilter(true);
  };

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <Layer1 openFilter={showFilter} />
      <Layer2 />
      <Layer3 filter={openFilter} toggle={toggleFilter} />
      <Layer4 />
      <Email pageName={page} />
      <Footer />
      <Message />
    </div>
  );
};

export default Homepage;
