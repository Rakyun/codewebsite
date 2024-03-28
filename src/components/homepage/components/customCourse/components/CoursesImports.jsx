import octoStudio from "../../../../../assets/courseDetails/octo.png";
import scratch from "../../../../../assets/courseDetails/scratch.png";

import threeDeeModel from "../../../../../assets/courseDetails/3DModel.png";
import arduino from "../../../../../assets/courseDetails/arduino.png";

import designThinking from "../../../../../assets/courseDetails/designThinking.png";
import fullstack from "../../../../../assets/courseDetails/fullstack.png";

import java from "../../../../../assets/courseDetails/java.png";
import microbit from "../../../../../assets/courseDetails/microbit.png";

import mobile from "../../../../../assets/courseDetails/mobile.png";
import python from "../../../../../assets/courseDetails/python.png";

import roadToUni from "../../../../../assets/courseDetails/roadToUni.png";
import roblox from "../../../../../assets/courseDetails/roblox.png";
import advPython from "../../../../../assets/courseDetails/advPython.png";

import { Link } from "react-router-dom";

export const Scratch = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Scratch : The Journey of Superpower
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={scratch} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Octo = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Octo Studio : Make Seafood using Octopus
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={octoStudio} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const ThreeDeeModel = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        3D Modelling : Design and Create
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={threeDeeModel} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Arduino = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Arduino : Basic Board and Circuit
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={arduino} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const DesignThinking = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Design Thinking : BunBun's Journey
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={designThinking} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const FullStack = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Full-stack Web Development with Python
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={fullstack} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Java = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Basic Coding with Java
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={java} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Microbit = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Microbit : Get creative and connected
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={microbit} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Mobile = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Mobile App Development
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={mobile} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Python = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Basic Coding with Python
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={python} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const RoadToUni = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Road to University
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={roadToUni} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const Roblox = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Roblox : Game Development
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={roblox} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};

export const AdvPython = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center">
      <p className="mb-6  w-[80%] text-center text-2xl  md:text-3xl xl:text-4xl">
        Advanced Coding with Python
      </p>
      <div className="relative my-2 w-[90%] rounded-xl sm:w-[85%]">
        <img src={advPython} alt="pic" className=" rounded-xl" />
        <Link className="absolute bottom-[3%] right-[5%] flex  h-[8%] w-[20%] items-center justify-center rounded-3xl bg-[#F38E45] px-5 py-3 text-center text-[1.7vw]">
          More Details
        </Link>
      </div>
    </div>
  );
};
