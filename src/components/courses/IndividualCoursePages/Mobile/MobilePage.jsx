import { useState, useEffect } from "react";
import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../../../homepage/components/Footer";
import Message from "../../../msg/Message";
import Email from "../../../homepage/components/Email";
import MobileCourse from "./MobileCourse";
import ReactGA from "react-ga4";

const MobilePage = () => {
  const page = "Mobile Development";
 

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", title: "Mobile Dev Page" });
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <MobileCourse />
      <Email pageName={page}/>
      <Footer />
      <Message />
    </>
  );
};

export default MobilePage;
