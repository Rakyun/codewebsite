import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav";
import Email from "../homepage/components/Email";
import Footer from "../homepage/components/Footer";
import Detail from "./components/Detail";
import Message from "../msg/Message";
const AboutCoding = () => {
  const page = "About Coding";
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
      <Detail />
      <Email pageName={page} />
      <Footer />
      <Message />
    </>
  );
};

export default AboutCoding;
