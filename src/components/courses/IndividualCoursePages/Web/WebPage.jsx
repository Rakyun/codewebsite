import { useState, useEffect } from "react";
import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../../../homepage/components/Footer";
import Message from "../../../msg/Message";
import Email from "../../../homepage/components/Email";
import WebCourse from "./WebCourse";
import ReactGA from "react-ga4";

const WebPage = () => {
  const page = "Web Development";

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", title: "Web Dev Page" });
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <WebCourse />
      <Email pageName={page} />
      <Footer />
      <Message />
    </>
  );
};

export default WebPage;
