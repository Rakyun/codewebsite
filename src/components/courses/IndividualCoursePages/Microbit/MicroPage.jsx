import { useState, useEffect } from "react";
import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../../../homepage/components/Footer";
import Message from "../../../msg/Message";
import Email from "../../../homepage/components/Email";
import MicroCourse from "./MicroCourse";

const MicroPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <Header toggle={toggleNav} />
      <Nav isVisible={isNavOpen} />
      <MicroCourse />
      <Email />
      <Footer />
      <Message />
    </>
  );
};

export default MicroPage;