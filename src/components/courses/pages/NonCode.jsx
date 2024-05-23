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
import ReactGA from "react-ga4";

const NonCode = () => {
  const texts = {
    p1: "Where enjoyment meets education",
    p2: "Our Design Thinking course is designed to nurture your child's growth in five crucial areas: gross motor skills, fine motor skills, language development, cognitive abilities, and social-emotional and behavioral well-being. With an emphasis on 21st-century skills such as coding and fostering imagination, our curriculum promises an enjoyable and enriching learning journey perfectly tailored for your young coder.",
    p3: "The logical sequencing in young minds",
    p4: "Storytelling and coding together help kids be more creative and think logically. This mix boosts their imagination, language skills, and problem-solving abilities. By doing storytelling with coding, parents give their children important skills for success in today's digital world, setting them up to do well in the future.",
  };

  const coursesData = [
    {
      pic: designThinking,
      title: "Design Thinking : BunBun's Journey",
      portal: "/courses/noncode/designthinking",
    },
  ];
  const slideShowData = [img1, img2, img3, img4, img5];

  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", title: "Non-Code Page" });
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

export default NonCode;
