import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import Email from "../../homepage/components/Email";
import CourseSetup from "./components/CourseSetup";

// Assets of Slideshow Images
import img1 from "../../../assets/slideImages/nonCode/img1.jpg";
import img2 from "../../../assets/slideImages/nonCode/img2.jpg";
import img3 from "../../../assets/slideImages/nonCode/img3.jpg";
import img4 from "../../../assets/slideImages/nonCode/img4.jpg";
import img5 from "../../../assets/slideImages/nonCode/img5.jpg";
import designThinking from "../../../assets/courseDetails/designThinking.png";

const NonCode = () => {
  const coursesData = [
    {
      pic: designThinking,
      title: "Design Thinking : BunBun's Journey",
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

export default NonCode;
