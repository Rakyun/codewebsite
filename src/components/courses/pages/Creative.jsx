import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import Email from "../../homepage/components/Email";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "../../../assets/slideImages/Creative/img1.jpg";
import img2 from "../../../assets/slideImages/Creative/img2.jpg";
import img3 from "../../../assets/slideImages/Creative/img3.jpg";
import img4 from "../../../assets/slideImages/Creative/img4.jpg";
import roblox from "../../../assets/courseDetails/roblox.png";
import fullstack from "../../../assets/courseDetails/fullstack.png";

const Creative = () => {
  const coursesData = [
    { pic: roblox, title: "Roblox : Game Development" },
    { pic: fullstack, title: "Full-stack Web Development with Python" },
  ];
  const slideShowData = [img1, img2, img3, img4];

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

export default Creative;
