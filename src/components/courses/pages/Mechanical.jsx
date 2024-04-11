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
import threeDee from "../../../assets/courseDetails/3DModel.png";
import arduino from "../../../assets/courseDetails/arduino.png";
const Mechanical = () => {
  const texts = {
    p1: "Make your idea tangible",
    p2: "At the heart of our Mechanical Innovation course lies a firm belief in the boundless creativity of every child. Beginning with crafting their own 3D models, understanding electrical circuits, and mastering the integration of embedded systems to bring their creations to life. Beyond mechanical principles, our aim is to instill in them an engineering mindset—a mindset that sparks curiosity, problem- solving, and innovation.",
    p3: "Launching into Engineering perspective",
    p4: "Instilling an engineering mindset in young minds, we equip them to approach problems systematically, teaching them to think methodically and break down complex issues into manageable steps. Through hands-on activities and interactive learning experiences, students develop critical thinking skills and apply engineering principles to real- world scenarios.",
  };

  const coursesData = [
    {
      pic: microbit,
      title: "Microbit : Get creative and connected",
      portal: "/courses/mechanical/microbit",
    },
    {
      pic: threeDee,
      title: "3D Modelling : Design and Create",
      portal: "/courses/mechanical/3dmodelling",
    },
    {
      pic: arduino,
      title: "Arduino : Basic Board and Circuit",
      portal: "/courses/mechanical/arduino",
    },
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

export default Mechanical;
