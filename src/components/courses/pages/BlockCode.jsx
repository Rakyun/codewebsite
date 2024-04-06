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
      <CourseSetup slideshow={slideShowData} coursesData={coursesData} />
      <Email />
      <Footer />
      <Message />
    </>
  );
};

export default BlockCode;
