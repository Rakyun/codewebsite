import blockcode from "../../../assets/bannerLong/blockcode.jpg";
import creative from "../../../assets/bannerLong/creative.jpg";
import fundamental from "../../../assets/bannerLong/fundamental.jpg";
import mechanical from "../../../assets/bannerLong/mechanical.jpg";
import noncoding from "../../../assets/bannerLong/noncoding.jpg";

import menu from "../../../assets/bannerLong/menu.png";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const CourseList = () => {
  const courses = [
    { image: noncoding, id: 1 },
    { image: blockcode, id: 2 },
    { image: fundamental, id: 3 },
    { image: creative, id: 4 },
    { image: mechanical, id: 5 },
  ];

  const listOfCourses = courses.map((course) => (
    <div
      key={course.id}
      className={`mb-8 flex  w-full  bg-transparent ${course.id % 2 == 0 ? "justify-end" : "justify-normal"}`}
    >
      <img
        src={course.image}
        alt="A course"
        className={`w-[60%] cursor-pointer transition-transform duration-500 hover:scale-105 ${course.id % 2 == 0 ? "rounded-l-2xl" : "rounded-r-2xl"}`}
      />
    </div>
  ));

  return (
    <div className="overflow-x-hidden font-comfortaa flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] text-white">
      <p className="mb-10 text-center text-4xl">Our Courses</p>
      <img
        src={menu}
        alt="menu"
        className="mb-20 w-[80%] rounded-3xl md:w-[50%]"
      />
      <section className="mb-20 flex h-full flex-col">{listOfCourses}</section>
      <section className="flex w-full flex-col items-center ">
        <p className=" w-[80%] text-center text-3xl md:text-4xl">
          Let your children experience Start-up culture from a young age
        </p>
        <p className="my-14 w-[80%] text-center text-lg md:text-xl">
          Our institute emphasizes teaching in a way that allows students to do
          real things using the project based learning method . And with the
          format of the institute in which we adopt a Tech Start-up culture, we
          therefore emphasize giving the students a platform to Pitching and
          presenting your own work. Our team of teachers will guide and help
          you. in doing a project so that our students can present their work.
        </p>
      </section>
      <section className="mb-20 flex w-[90%] flex-col items-center md:flex-row  md:justify-between lg:w-[50%] ">
        <Link
          to="/contactUs"
          className="font-comfortaa bold mb-11 w-[60%] rounded-[50px]  bg-[#F7C94B] p-3 text-center text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880] active:opacity-80 sm:w-[45%]  md:m-0 md:p-4  md:hover:scale-105"
        >
          Contact Us
        </Link>

        <ScrollLink
          to="email"
          smooth={true}
          duration={800}
          offset={0}
          className="font-comfortaa bold mb-11 w-[60%] cursor-pointer select-none  rounded-[50px] bg-[#F7C94B] p-3 text-center text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880] active:opacity-80 sm:w-[45%] md:m-0  md:w-[45%] md:p-4  md:hover:scale-105"
        >
          Free Trial Class
        </ScrollLink>
      </section>
    </div>
  );
};

export default CourseList;
