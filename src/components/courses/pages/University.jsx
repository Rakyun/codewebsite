import { useState, useEffect } from "react";
import Header from "../../header/Header";
import Nav from "../../header/Nav";
import Footer from "../../homepage/components/Footer";
import Message from "../../msg/Message";
import Email from "../../homepage/components/Email";
import CourseSetup from "./components/CourseSetup";
import img2 from "../../../assets/slideImages/Mechanical/img1.jpg";
import img1 from "../../../assets/slideImages/Mechanical/img2.jpg";
import img3 from "../../../assets/slideImages/Mechanical/img3.jpg";
import roadToUni from "../../../assets/courseDetails/roadToUni.png";
import ReactGA from "react-ga4";

const University = () => {
  const texts = {
    p1: "A compass for your Computer Science journey",
    p2: "To gain acceptance into a computer science program at a university requires careful planning. For top-tier universities, a flawless plan is essential. This course serves as your roadmap to navigate smoothly toward your computer science or computer engineering classes. It not only advises you on the right path but also strengthens your academic preparedness for these classes. With support from our experienced team of teachers, you will be well-prepared to succeed in reaching your goals.",
    p3: "A path to success in life",
    p4: "Securing a place in a top-tier university sets the stage for a lifetime of success. It introduces your child to a community filled with future leaders and influential connections, laying a strong foundation for their academic and personal development. The experiences and networks they cultivate during their time at such a prestigious institution will shape their future endeavors and open doors to countless opportunities.",
  };

  const coursesData = [
    {
      pic: roadToUni,
      title: "Road to University",
    },
  ];
  const slideShowData = [img1, img2, img3];
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", title: "University Page" });
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

export default University;
