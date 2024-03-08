/* eslint-disable no-unused-vars */
import { CheckBoxContext } from "../../../../../context/CheckBoxContext";
import { useContext } from "react";

const CustomCourse = () => {
  const [radio, setRadio, filter] = useContext(CheckBoxContext);

  const customCourses = {
    custom1: ["microbit", "minecraft", "roblox", "3D"],
    custom2: ["microbit", "minecraft", "roblox", "3D", "python"],
    custom3: ["roblox", "3D", "python"],
    custom4: ["roblox", "3D", "python", "web dev"],
    custom5: ["roblox", "3D", "python", "arduino"],
    custom6: [
      "roblox",
      "3D",
      "python",
      "arduino",
      "web dev",
      "mobile app dev",
      "advanced python",
    ],
    custom7: ["roblox", "3D", "python", "arduino", "java"],
    custom8: [
      "roblox",
      "3D",
      "python",
      "arduino",
      "web dev",
      "mobile app dev",
      "advanced python",
      "java",
    ],
    custom9: [
      "roblox",
      "3D",
      "python",
      "arduino",
      "web dev",
      "mobile app dev",
      "advanced python",
      "java",
      "road to university",
    ],

    custom10: ["design thinking"],
    custom11: ["design thinking", "octostudio"],
    custom12: ["octostudio", "scratch"],
    custom13: ["scratch"],
    custom14: ["scratch", "microbit", "minecraft"],
  };

  const testContent = () => {
    switch (true) {
      // 9+
      case radio === "newbie" && filter === "9+":
        return customCourses.custom1;

      case (radio === "explorer" || radio === "master") && filter === "9+":
        return customCourses.custom2;

      // 10+
      case radio === "newbie" && filter === "10+":
        return customCourses.custom3;

      case (radio === "explorer" || radio === "master") && filter === "10+":
        return customCourses.custom4;

      // 12+
      case radio === "newbie" && filter === "12+":
        return customCourses.custom5;

      case (radio === "explorer" || radio === "master") && filter === "12+":
        return customCourses.custom6;

      // 15+
      case radio === "newbie" && filter === "15+":
        return customCourses.custom7;

      case radio === "explorer" && filter === "15+":
        return customCourses.custom8;

      case radio === "master" && filter === "15+":
        return customCourses.custom9;

      // 4+
      case (radio === "explorer" || radio === "master" || radio === "newbie") &&
        filter === "4+":
        return customCourses.custom10;

      // 5+
      case (radio === "explorer" || radio === "master" || radio === "newbie") &&
        filter === "5.5+":
        return customCourses.custom11;

      // 6+
      case (radio === "explorer" || radio === "master" || radio === "newbie") &&
        filter === "6+":
        return customCourses.custom12;

      // 7+
      case radio === "newbie" && filter === "7+":
        return customCourses.custom12;

      case (radio === "explorer" || radio === "master") && filter === "7+":
        return customCourses.custom13;

      // 8+
      case radio === "newbie" && filter === "8+":
        return customCourses.custom13;

      case (radio === "explorer" || radio === "master") && filter === "8+":
        return customCourses.custom14;

      // No matching condition
      default:
        return ["No Course Found"];
    }
  };

  const filteredCourse = testContent();
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white">
      <p className="mb-14 mt-28 w-[80%] text-center text-3xl md:text-4xl">
        Reccommended Courses
      </p>

      {filteredCourse.map((course, index) => (
        <div key={index} className="my-5 bg-green-500 p-10 text-3xl">
          <p>{course}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomCourse;
