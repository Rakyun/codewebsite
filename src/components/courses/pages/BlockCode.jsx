import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import Email from "../../homepage/components/Email";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "../../../assets/slideImages/blockCode/img1.jpg";
import img2 from "../../../assets/slideImages/blockCode/img2.jpg";
import img3 from "../../../assets/slideImages/blockCode/img3.jpg";
import img4 from "../../../assets/slideImages/blockCode/img4.jpg";
import octo from "../../../assets/courseDetails/octo.png";
import scratch from "../../../assets/courseDetails/scratch.png";

const BlockCode = () => {
  const texts = {
    p1: "The start of building a programming mindset.",
    p2: "Our block-based coding program is all about making coding fun and easy for kids. We teach them the Coding Theory Concept, which is important for building their future programming skills. With a user-friendly interface and visually stimulating blocks, we create a playful and enjoyable learning experience for children.",
    p3: "The key elements are logical and systematical thinking.",
    p4: "Logical thinking and systematic thinking are the core concepts of this course. Through carefully selected tasks aimed at nurturing young minds, children are encouraged to understand the purpose of each block of code in their tasks. This approach helps them cultivate expertise in reasoning and problem-solving skills for their future.",
  };
  const coursesData = [
    {
      pic: octo,
      title: "Dino Code : Adventures of Gong",
      portal: "/courses/blockcode/octo",
    },
    {
      pic: scratch,
      title: "Block Coder : The Journey of Superpower",
      portal: "/courses/blockcode/scratch",
    },
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

export default BlockCode;
