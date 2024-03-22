import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import Email from "../../homepage/components/Email";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img2 from "../../../assets/slideImages/Mechanical/img1.jpg";
import img1 from "../../../assets/slideImages/Mechanical/img2.jpg";
import img3 from "../../../assets/slideImages/Mechanical/img3.jpg";
import microbit from "../../../assets/courseDetails/microbit.png";

const Mechanical = () => {
  const coursesData = [
    { pic: microbit, title: "Microbit - Get creative and connected" },
  ];
  const slideShowData = [img1, img2, img3];

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
      <CourseSetup slideshow={slideShowData} coursesData={coursesData} />
      <Email />
      <Footer />
      <Message />
    </>
  );
};

export default Mechanical;
