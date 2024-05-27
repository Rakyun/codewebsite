import { useState, useEffect } from "react";
import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../../../homepage/components/Footer";
import Message from "../../../msg/Message";
import Email from "../../../homepage/components/Email";
import MicroCourse from "./MicroCourse";
import ReactGA from "react-ga4";

const MicroPage = () => {
  const page = "Micro-bit";
 

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", title: "Microbit Page" });
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <MicroCourse />
      <Email pageName={page} />
      <Footer />
      <Message />
    </>
  );
};

export default MicroPage;
