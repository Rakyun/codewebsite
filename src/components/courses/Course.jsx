import Header from "../header/Header";
import Nav from "../header/Nav";
import { useState, useEffect } from "react";
import CourseList from "./components/CourseList";
import Email from "../homepage/components/Email";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message";

import blockcode from "../../assets/bannerLong/blockcode.jpg";
import creative from "../../assets/bannerLong/creative.jpg";
import fundamental from "../../assets/bannerLong/fundamental.jpg";
import mechanical from "../../assets/bannerLong/mechanical.jpg";
import noncoding from "../../assets/bannerLong/noncoding.jpg";
import graduate from "../../assets/bannerLong/graduate.jpg";

const Course = () => {
  const courses = [
    {
      image: noncoding,
      id: 12,
      filterTest: "kids",
      direct: "/courses/noncode",
    },
    {
      image: blockcode,
      id: 23,
      filterTest: "teen",
      direct: "/courses/blockcode",
    },
    {
      image: fundamental,
      id: 34,
      filterTest: "kids",
      direct: "/courses/fundamental",
    },
    {
      image: creative,
      id: 45,
      filterTest: "teen",
      direct: "/courses/creative",
    },
    {
      image: mechanical,
      id: 56,
      filterTest: "kids",
      direct: "/courses/mechanical",
    },
    {
      image: graduate,
      id: 67,
      filterTest: "kids",
    },
  ];

  const page = "Courses";
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
      <CourseList courses={courses} />
      <Email pageName={page} />
      <Footer />
      <Message />
    </>
  );
};

export default Course;
