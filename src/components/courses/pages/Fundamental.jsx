import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import Email from "../../homepage/components/Email";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "../../../assets/slideImages/Fundamental/img1.jpg";
import img2 from "../../../assets/slideImages/Fundamental/img2.jpg";
import img3 from "../../../assets/slideImages/Fundamental/img3.jpg";
import img4 from "../../../assets/slideImages/Fundamental/img4.jpg";
import img5 from "../../../assets/slideImages/Fundamental/img5.jpg";
import python from "../../../assets/courseDetails/python.png";
import advPython from "../../../assets/courseDetails/advPython.png";
import java from "../../../assets/courseDetails/java.png";

const Fundamental = () => {
  const coursesData = [
    {
      pic: python,
      title: "Basic Coding with Python",
    },
    {
      pic: java,
      title: "Basic Coding with Java",
    },
    {
      pic: advPython,
      title: "Advanced Coding with Python",
    },
  ];
  const slideShowData = [img1, img2, img3, img4, img5];

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

export default Fundamental;
