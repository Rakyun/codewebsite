import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../Footer";
import Email from "../Email";
import CustomCourse from "./components/CustomCourse";
import { useState, useEffect } from "react";
import Message from "../../../msg/Message";

const Custom = () => {
  const page = "Custom Page";
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
      <CustomCourse />
      <Email pageName={page} />
      <Footer />
      <Message />
    </>
  );
};

export default Custom;
