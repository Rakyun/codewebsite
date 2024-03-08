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
    { image: noncoding, id: 1, filterTest: "kids" },
    { image: blockcode, id: 2, filterTest: "teen" },
    { image: fundamental, id: 3, filterTest: "kids" },
    { image: creative, id: 4, filterTest: "teen" },
    { image: mechanical, id: 5, filterTest: "kids" },
    { image: graduate, id: 6, filterTest: "kids" },
  ];
  const [filterState, setfilterState] = useState("all");
  const coursesFiltered = courses.filter((course) =>
    filterState === "all" ? true : filterState === course.filterTest,
  );

  const filterCourse = (course) => {
    setfilterState(course);
  };

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
      <CourseList courses={coursesFiltered} filter={filterCourse} />
      <Email pageName={page} />
      <Footer />
      <Message />
    </>
  );
};

export default Course;
