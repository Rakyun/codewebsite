import Header from "../header/Header";
import Nav from "../header/Nav";
import { useState, useEffect } from "react";
import CourseList from "./components/CourseList";
import Email from "../homepage/components/Email";
import Footer from "../homepage/components/Footer";
import Message from "../msg/Message";
const Course = () => {
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
      <CourseList />
      <Email pageName={page}/>
      <Footer />
      <Message/>
    </>
  );
};

export default Course;
