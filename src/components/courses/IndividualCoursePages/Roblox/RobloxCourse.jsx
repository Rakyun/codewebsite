/* eslint-disable react/no-unescaped-entities */
import kid from "../../../../assets/CourseLogos/Roblox/main.jpeg";
import robloxStat from "../../../../assets/CourseLogos/Roblox/robloxStat.png";
import check from "../../../../assets/CourseLogos/Roblox/check.png";
import episodes from "../../../../assets/CourseLogos/Roblox/episodes.png";
import roblox from "../../../../assets/CourseLogos/Roblox/roblox.png";
import group from "../../../../assets/CourseIcons/group.png";
import level1 from "../../../../assets/CourseIcons/level1.png";
import laptop from "../../../../assets/CourseIcons/laptop.png";
import certificate from "../../../../assets/CourseIcons/certificate.png";
import textCode from "../../../../assets/CourseIcons/textCode.png";
import img1 from "../../../../assets/CourseLogos/Roblox/images/img1.jpeg";
import img2 from "../../../../assets/CourseLogos/Roblox/images/img2.jpeg";
import img3 from "../../../../assets/CourseLogos/Roblox/images/img3.jpeg";

import { Carousel } from "@material-tailwind/react";
const RobloxCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#E9587E] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#E9587E]   lg:w-[70%]">
          <img src={roblox} alt="blockcoder" className=" w-full" />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "Where fun meets fundamentals. Learn coding through your child's
            favorite game."
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt=""
          className="w-full   object-cover drop-shadow-2xl lg:w-[40%] "
        />
      </section>

      <section className="flex w-full flex-col bg-[#FF9AB5] md:flex-row">
        <img
          src={robloxStat}
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
                <p className="ml-2">Coding Principles with Lua Programming</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Creativity and Imagination through Project-Based Learning
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Problem Solving and Logical Thinking Concepts
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Game Developer’s Mindset</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">Confidence in Public Presentation</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#E9587E] p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <img src={level1} alt="laptop" className="mr-3 w-[15%]" />
            <p>Beginner</p>
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

      <section className="flex w-full items-center justify-center bg-[#fe7398] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Learning Process
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Exploring the Interface:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>Familiarize yourself with the Roblox Studio interface.</li>
              <li>
                Understand the tools and developer environment controls in
                Roblox Studio.
              </li>
            </ul>

            <li className="font-bold">Learning Lua:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Begin by learning the basics of Lua programming, both specific
                to Roblox and more general Lua programming principles.
              </li>
              <li>
                Gain more experience in coding principles through gameplay.
              </li>
            </ul>

            <li className="font-bold">Understanding the APIs:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Familiarize yourself with the concept of APIs while applying
                them through Roblox game development.
              </li>
              <li>
                Take the time to understand these APIs and how to use them
                effectively in your projects.
              </li>
            </ul>

            <li className="font-bold">
              Learning through Play with Simple Tasks:
            </li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Begin your coding journey by working on simple tasks in class.
              </li>
              <li>
                Start with basic games or simulations that allow you to practice
                your coding skills without feeling overwhelmed.
              </li>
            </ul>

            <li className="font-bold">Experimenting and Iterating:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                As you gain more confidence in your coding abilities, start
                experimenting with more complex projects.
              </li>
            </ul>

            <li className="font-bold">Building Portfolio Projects:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                As you become more skilled in coding with Roblox Studio, start
                working on portfolio projects that showcase your abilities.
                These projects can be shared with others on the Roblox platform
                for the world to see.
              </li>
              <li>
                Experiment with advanced features and techniques in Scratch to
                stretch your creativity and problem-solving abilities.
              </li>
            </ul>

            <li className="font-bold">Project Showcase:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Showcase your projects to the class or in a public exhibition.
              </li>
              <li>
                Present your work, explain your creative process, and share
                insights gained from the project.
              </li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="relative flex w-full  items-center justify-center bg-[#FF9AB5]  p-12 ">
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

export default RobloxCourse;
