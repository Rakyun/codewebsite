import { useState, useEffect } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav";
import Stage from "./components/Stage";
import Email from "../homepage/components/Email";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message";

const PitchingPage = () => {
  const page = "Pitching";
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
      <Stage />
      <Email pageName={page}/>
      <Footer />
      <Message/>
    </>
  );
};

export default PitchingPage;
