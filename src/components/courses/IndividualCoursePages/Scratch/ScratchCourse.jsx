/* eslint-disable react/no-unescaped-entities */
import block from "../../../../assets/CourseLogos/block.png";
import cat from "../../../../assets/CourseLogos/cat.png";
import scratchLogo from "../../../../assets/CourseLogos/scratchLogo.png";
import kid from "../../../../assets/CourseLogos/kid.jpeg";
import scratchStat from "../../../../assets/CourseLogos/scratchStat.png";
import episodes from "../../../../assets/CourseLogos/episodes.png";
import blockcoder from "../../../../assets/CourseLogos/blockcoder.png";
import age from "../../../../assets/searchfilter/age.png";
import graph from "../../../../assets/searchfilter/graph.png";
import laptop from "../../../../assets/searchfilter/laptop.png";
import certificate from "../../../../assets/searchfilter/certificate.png";
import blockCode from "../../../../assets/searchfilter/blockCode.png";
const ScratchCourse = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#65b57d] pt-[150px] font-comfortaa text-white">
      <section className="flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col items-center bg-[#6FBC87]   md:w-[70%]">
          <img src={blockcoder} alt="blockcoder" className=" w-full" />

          <p className="my-12 w-[90%] text-center text-xl  lg:text-2xl xl:text-3xl">
            "A perfect starting point for young minds to explore the exciting
            world of coding"
          </p>

          {/* Scratch + Kid Pic*/}
        </div>
        <img
          src={kid}
          alt=""
          className="w-full object-cover drop-shadow-2xl   md:w-[40%]"
        />
      </section>

      <section className="flex w-full flex-col bg-[#ACEDBF] md:flex-row">
        <img
          src={scratchStat}
          alt="Course"
          className="w-full object-contain md:w-[55%]"
        />
        <div className="flex w-full  flex-col items-center justify-center bg-[#ACEDBF] p-5 text-black  md:w-[45%]  md:p-10 ">
          <div>
            <p className="mb-2 text-sm font-bold sm:text-base lg:text-lg xl:text-xl">
              Skills Developed
            </p>
            <ul className="list-disc">
              <li className="mb-2 ml-10 text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                Computation Skills & Logical Thinking
              </li>
              <li className="mb-2 ml-10 text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                Introduction to programming concepts and logic
              </li>
              <li className="mb-2 ml-10 text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                Creativity and imagination through project-based learning
              </li>
              <li className="mb-2 ml-10 text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                Basic understanding of algorithms and sequencing
              </li>
              <li className="mb-2 ml-10 text-left text-sm sm:text-base lg:text-lg xl:text-xl">
                Vizualizing and creating interactive stories, animations, and
                games
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center p-10">
        <div className=" flex w-full flex-wrap text-sm sm:text-base  lg:text-lg xl:text-3xl ">
          <div className="mb-3 flex w-[50%] items-center font-bold ">
            <img src={graph} alt="laptop" className="mr-3 w-[15%]" />
            <p>Beginner</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={age} alt="laptop" className="mr-3 w-[15%]" />
            <p>Private / Group Class</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={blockCode} alt="laptop" className="mr-3 w-[15%]" />
            <p>Block-Based Coding</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={certificate} alt="laptop" className="mr-3 w-[15%]" />
            <p>Certificate Included</p>
          </div>
          <div className="mb-3 flex w-[50%] items-center font-bold">
            <img src={laptop} alt="laptop" className="mr-3 w-[15%]" />
            <p>On-site / Online</p>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-green-300 p-10 text-black">
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

      <section className="relative flex w-full  items-center justify-center bg-[#ACEDBF]  p-16">
        <img src={episodes} alt="episodes" className=" md:w-[80%] lg:w-[70%]" />
        <div className="absolute right-0 top-0 bg-[#4CBD80] px-5 py-2">
          <p className="text-center">Our Course Path</p>
        </div>
      </section>

      <section className="flex w-full flex-col bg-white text-black md:flex-row">
        <div className="flex h-[800px] w-full items-center justify-center border-2 border-black text-[10vw] md:w-[50%]">
          Video
        </div>
        <div className="flex h-[800px] w-full items-center justify-center border-2 border-black text-[10vw] md:w-[50%]">
          Photos
        </div>
      </section>
    </div>
  );
};

export default ScratchCourse;
