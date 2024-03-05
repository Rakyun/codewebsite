import { useState, useEffect } from "react";
import Header from "../../../header/Header";
import Nav from "../../../header/Nav";
import Footer from "../../../homepage/components/Footer";
import Message from "../../../msg/Message";
import BlockCodeComp from "./components/BlockCodeComp";
import Email from "../../../homepage/components/Email";

const BlockCode = () => {
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
      <BlockCodeComp />
      <Email />
      <Footer />
      <Message />
    </>
  );
};

export default BlockCode;
