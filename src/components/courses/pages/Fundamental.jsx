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
  const texts = {
    p1: "The beginning of strong academic coding background",
    p2: "Our fundamental coding class focuses on teaching the concept of coding theory, making it ideal for learners who have a specific purpose in mind for their future programming endeavors, or for those who need a strong foundational understanding of coding theory for future studies in coding programs.",
    p3: "Strong basic is everything",
    p4: "A strong foundation in coding is essential for programmers, and we understand this deeply. That's why our course focuses primarily on strengthening your fundamental skills. With diverse exercises and expert instructors with strong academic backgrounds, we aim to build your confidence in navigating the coding world.",
  };

  const coursesData = [
    {
      pic: python,
      title: "Basic Coding with Python",
      portal: "/courses/fundamental/python",
    },
    {
      pic: java,
      title: "Basic Coding with Java",
      portal: "/courses/fundamental/java"
    },
    {
      pic: advPython,
      title: "Advanced Coding with Python",
      portal: "/courses/fundamental/advpython"
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
      <CourseSetup
        slideshow={slideShowData}
        coursesData={coursesData}
        texts={texts}
      />
      <Email />
      <Footer />
      <Message />
    </>
  );
};

export default Fundamental;
