/* eslint-disable react/no-unescaped-entities */
import kid from "../../../../assets/CourseLogos/Design/main.jpeg";
import designStat from "../../../../assets/CourseLogos/Design/designStat.png";
import check from "../../../../assets/CourseLogos/Design/check.png";
import episodes from "../../../../assets/CourseLogos/Design/episodes.png";
import designThinking from "../../../../assets/CourseLogos/Design/designThinking.png";
import level1 from "../../../../assets/CourseIcons/level1.png";
import blockCode from "../../../../assets/CourseIcons/blockCode.png";
import laptop from "../../../../assets/CourseIcons/laptop.png";
import group from "../../../../assets/CourseIcons/group.png";
import learnPlay from "../../../../assets/CourseIcons/learnPlay.png";

import img1 from "../../../../assets/CourseLogos/Design/images/img1.jpeg";
import img2 from "../../../../assets/CourseLogos/Design/images/img2.jpeg";
import img3 from "../../../../assets/CourseLogos/Design/images/img3.jpeg";
import img4 from "../../../../assets/CourseLogos/Design/images/img4.jpeg";

import { Carousel } from "@material-tailwind/react";
const DesignCourse = () => {
  const listStyle = {
    listStyleImage: `url(${check})`,
  };
  const slideShowData = [img1, img2, img3, img4];

  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F9E5AC] pt-[80px] font-comfortaa text-white md:pt-[110px]">
      <section className="flex w-full flex-col lg:flex-row ">
        <div className="flex w-full flex-col items-center bg-[#F6C94B]   lg:w-[70%]">
          <img src={designThinking} alt="blockcoder" className=" w-full" />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "Spark creativity and logical thinking in your little ones, aligning
            with their developmental milestones"
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt=""
          className=" w-full   object-cover drop-shadow-2xl lg:w-[40%] "
        />
      </section>

      <section className="flex w-full flex-col bg-[#FEE397] md:flex-row">
        <img
          src={designStat}
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
                <p className="ml-2">Computation Skills & Logical Thinking</p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Introduction to programming concepts and logic
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Creativity and imagination through project-based learning
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Basic understanding of algorithms and sequencing
                </p>
              </li>
              <li className="mb-2  text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                <p className="ml-2">
                  Vizualizing and creating interactive stories, animations, and
                  games
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#F3C74A] p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <img src={level1} alt="laptop" className="mr-3 w-[15%]" />
            <p>Beginner</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={blockCode} alt="laptop" className="mr-3 w-[15%]" />
            <p>Screen Free Coding</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={laptop} alt="laptop" className="mr-3 w-[15%]" />
            <p>On-site</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={group} alt="laptop" className="mr-3 w-[15%]" />
            <p>Private / Group Class</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={learnPlay} alt="laptop" className="mr-3 w-[15%]" />
            <p>Learning Through Play</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-[#fddb7e] p-10 text-black">
        <div>
          <p className="mb-5 text-2xl font-bold lg:text-3xl">
            Learning Process
          </p>
          <ul className="ml-4 list-disc text-base md:text-lg lg:text-xl">
            <li className="font-bold">Introduction To Scratch:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Start by learning the basics of Scratch, including the
                interface, sprites, and blocks.
              </li>
              <li>
                Understand the purpose and potential of Scratch for creating
                interactive projects.
              </li>
            </ul>

            <li className="font-bold">Foundational Concepts:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Learn fundamental programming concepts such as sequencing,
                loops, conditionals, and variables.
              </li>
              <li>
                Understand how these concepts are applied in Scratch through
                hands-on activities and examples.
              </li>
            </ul>

            <li className="font-bold">Guided Projects:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Follow guided projects provided by the course instructor or
                curriculum.
              </li>
              <li>
                Work through step-by-step instructions to create projects that
                demonstrate key concepts and techniques.
              </li>
            </ul>

            <li className="font-bold">Hands-On Practice:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Spend time practicing with Scratch on your own, applying what
                you've learned in guided projects.
              </li>
              <li>
                Experiment with creating your own projects, starting with simple
                ideas and gradually increasing in complexity.
              </li>
            </ul>

            <li className="font-bold">Feedback and Review with teacher:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Receive feedback from the instructor and peers on your projects.
              </li>
              <li>
                Reflect on your own work and identify areas for improvement
                based on feedback received.
              </li>
            </ul>

            <li className="font-bold">Challenges and Extensions:</li>
            <ul className="mb-5 ml-7 list-square">
              <li>
                Take on challenges and extensions to deepen your understanding
                and skills.
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

      <section className="relative flex w-full  items-center justify-center bg-[#FEE397]  p-12 ">
        <img src={episodes} alt="episodes" className=" md:w-[80%] lg:w-[70%]" />
        <div className="absolute right-0 top-0 bg-[#F7A2A0] px-5 py-2">
          <p className="text-center">Our Adventure</p>
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

export default DesignCourse;
