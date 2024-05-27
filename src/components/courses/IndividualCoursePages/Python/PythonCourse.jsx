/* eslint-disable react/no-unescaped-entities */
import kid from "../../../../assets/CourseLogos/Python/main.jpeg";
import pythonStat from "../../../../assets/CourseLogos/Python/pythonStat.png";
import check from "../../../../assets/CourseLogos/Python/check.png";
import episodes from "../../../../assets/CourseLogos/Python/episodes.png";
import python from "../../../../assets/CourseLogos/Python/python.png";
import group from "../../../../assets/CourseIcons/group.png";
import level2 from "../../../../assets/CourseIcons/level2.png";
import laptop from "../../../../assets/CourseIcons/laptop.png";
import certificate from "../../../../assets/CourseIcons/certificate.png";
import textCode from "../../../../assets/CourseIcons/textCode.png";
import img1 from "../../../../assets/CourseLogos/Python/images/img1.jpg";
import img2 from "../../../../assets/CourseLogos/Python/images/img2.jpg";
import img3 from "../../../../assets/CourseLogos/Python/images/img3.jpg";

import { Carousel } from "@material-tailwind/react";
const PythonCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#00AEE4] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#00AEE4]   lg:w-[70%]">
          <img src={python} alt="blockcoder" className=" w-full" />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "A Desired class that empowers your basic fundamental Python
            skills."
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt=""
          className=" w-full   object-cover drop-shadow-2xl lg:w-[40%] "
        />
      </section>

      <section className="flex w-full flex-col bg-[#71DDFF] md:flex-row">
        <img
          src={pythonStat}
          alt="Course"
          className="w-full object-contain md:w-[55%]"
        />
        <div className="flex w-full  flex-col items-center justify-center  p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              Skills Developed
            </p>
            <ul style={listStyle} className="ml-10 ">
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Solid understanding of programming concepts
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Be able to break down problems into smaller steps and design
                  efficient algorithms to solve them.
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Strong problem-solving skills and Coding technique when
                  dealing with Programming problem
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Be able to design and implement object-oriented solutions to
                  problems
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#00AEE4] p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <img src={level2} alt="laptop" className="mr-3 w-[15%]" />
            <p>Intermediate</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={textCode} alt="laptop" className="mr-3 w-[15%]" />
            <p>Text-Based Code</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={laptop} alt="laptop" className="mr-3 w-[15%]" />
            <p>On-site / Online</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={group} alt="laptop" className="mr-3 w-[15%]" />
            <p>Private / Group Class</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={certificate} alt="laptop" className="mr-3 w-[15%]" />
            <p>Certificate Included</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#5dcff5] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Learning Process
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Introduction to Python:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Gain an understanding of the concept of low-level language and
                high-level language in coding.
              </li>
              <li>Introduction to Python and its applications.</li>
              <li>Explanation of Python's syntax and its data types.</li>
            </ul>

            <li className="font-bold">Control Flow and Functions:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Understand conditional statements.</li>
              <li>Explore the variation of loops in Python.</li>
              <li>Introduction to functions and their importance.</li>
            </ul>

            <li className="font-bold">Data Structures in Python:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Learn about organizing and storing data, along with its
                advantages and use cases.
              </li>
            </ul>

            <li className="font-bold">Error Handling:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Understand program bugs and the concept of error handling
                techniques.
              </li>
            </ul>

            <li className="font-bold">
              Introduction to Object-Oriented Programming (OOP):
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>Introduction to OOP concepts: classes and objects.</li>
              <li>Defining classes with attributes and methods.</li>
              <li>
                Exploration of encapsulation, inheritance, and polymorphism.
              </li>
            </ul>

            <li className="font-bold">Algorithm and Diagram Design:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Learn about algorithm design principles.</li>
              <li>
                Introduction to flowcharts and pseudocode for algorithm
                visualization and design.
              </li>
            </ul>

            <li className="font-bold"> Hands-on Project:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Review and reinforce concepts covered in the previous weeks.
              </li>
              <li>
                Encourage students to brainstorm ideas for their final project.
              </li>
              <li>
                Students work on their final projects under supervision,
                receiving assistance and guidance as needed.
              </li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#71DDFF]  p-12 ">
        <img src={episodes} alt="episodes" className=" md:w-[80%] lg:w-[70%]" />
        <div className="absolute right-0 top-0 bg-[#F4CC42] px-5 py-2">
          <p className="text-center">Our Course Path</p>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white text-black lg:flex-row">
        <div className="flex h-[500px] w-full  lg:w-[50%]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/x8Rjqw6KFPk?"
            title="CO-DE : Block-based code with Scratch"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" flex h-[500px] w-full items-center justify-center border-2 border-black bg-[#6FBC87] text-[10vw] lg:w-[50%]">
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
            className="drop-shadow-2xl"
          >
            {slideShowData.map((item, index) => (
              <img
                className="h-full w-full object-cover"
                key={index}
                src={item}
                alt="slideshow"
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default PythonCourse;
