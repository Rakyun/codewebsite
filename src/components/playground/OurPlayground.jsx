import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav.jsx";
import Playground from "./components/Playground";
import Classrooms from "./components/Classrooms";
import Footer from "../homepage/components/Footer";
import Email from "../homepage/components/Email";
import Message from "../msg/Message.jsx";
import ReactGA from "react-ga4";
const OurPlayground = () => {
  const page = "Playground";
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", title: "Playground Page" });
  }, []);

  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <Playground />
      <Classrooms />
      <Email pageName={page} />
      <Footer />
      <Message />
    </>
  );
};

export default OurPlayground;
