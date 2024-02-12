import Header from "../header/Header.jsx";
import Nav from "../header/Nav.jsx";
import { useState, useEffect } from "react";
import Information from "./components/Information";
import Email from "../homepage/components/Email";
import Footer from "../homepage/components/Footer";
const Contact = () => {
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
      <Information />
      <Email />
      <Footer />
    </>
  );
};

export default Contact;
