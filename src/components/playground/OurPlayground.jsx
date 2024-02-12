import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../homepage/components/Nav";
import Playground from "./components/Playground";
import Classrooms from "./components/Classrooms";
import Footer from "../homepage/components/Footer";
import Email from "../homepage/components/Email";

const OurPlayground = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <Playground />
      <Classrooms />
      <Email />
      <Footer />
    </>
  );
};

export default OurPlayground;
