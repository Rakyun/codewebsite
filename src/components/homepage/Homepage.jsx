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
import ReactGA from "react-ga4";
const Homepage = () => {
  const page = "Home";
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    ReactGA.event({
      category: "Navigation",
      action: "Open / Close Nav",
      label: "For Checking Closing and Opening Nav",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", title: "Home Page" });
  }, []);

  return (
    <div className="">
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Layer4 />
      <Email pageName={page} />
      <Footer />
      <Message />
    </div>
  );
};

export default Homepage;
