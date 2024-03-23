import { Carousel } from "@material-tailwind/react";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
const CourseSetup = (props) => {
  const courses = props.coursesData.map((course, index) => (
    <div key={index} className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        {course.title}
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={course.pic} alt="pic" className=" rounded-xl" />
        <Link className=" absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-4 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white">
      <Carousel
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        className="w-[80%] rounded-2xl border-8 border-black md:w-[70%]  xl:w-[60%] "
      >
        {props.slideshow.map((item, index) => (
          <img
            className="object-cover "
            key={index}
            src={item}
            alt="slideshow"
          />
        ))}
      </Carousel>

      <p className="mt-8 w-[80%] text-center text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        explicabo suscipit magni iusto eligendi quasi. Debitis eligendi
        repellendus laborum tempora pariatur adipisci consectetur, est odio iure
        fugiat dolore deserunt incidunt fuga optio sit harum nobis ratione quia
        corrupti ex illum necessitatibus sed officiis! Sed sequi magnam
        perferendis enim officiis est!
      </p>

      <p className="mt-28 w-[80%] text-center text-2xl md:text-3xl xl:text-4xl">
        Lorem ipsum dolor sit amet
      </p>
      <p className="mb-20 mt-8 w-[80%] text-center text-base md:text-lg lg:text-xl">
        repellendus laborum tempora pariatur adipisci consectetur, est odio iure
        fugiat dolore deserunt incidunt fuga optio sit harum nobis ratione quia
        corrupti ex illum necessitatibus sed officiis! Sed sequi magnam
        perferendis enim officiis est!
      </p>
      {courses}
    </div>
  );
};

export default CourseSetup;
