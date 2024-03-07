import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/courses/squarebanner01.png";
import img2 from "../../../assets/courses/squarebanner02.png";
import img3 from "../../../assets/courses/squarebanner03.png";
import img4 from "../../../assets/courses/squarebanner04.png";
import img5 from "../../../assets/courses/squarebanner05.png";
import img6 from "../../../assets/courses/squarebanner06.png";
const Layer3 = (props) => {
  const [filter, setFilter] = useState("all");
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const courses = [
    {
      image: img1,
      courseName: "Design Thinking Class",
      age: "4++",
      id: "teen",
    },
    {
      image: img2,
      courseName: "Block-Based Coding Class",
      age: "6++",
      id: "teen",
    },
    {
      image: img5,
      courseName: "Mechanical Innovation Class",
      age: "8++",
      id: "kids",
    },
    {
      image: img3,
      courseName: "Fundamental Coding Class",
      age: "9++",
      id: "kids",
    },
    {
      image: img4,
      courseName: "Creative Coding Class",
      age: "9++",
      id: "teen",
    },
    {
      image: img6,
      courseName: "Road to University",
      age: "15++",
      id: "teen",
    },
  ];

  const coursesFiltered = courses.filter((course) =>
    filter == "all" ? true : filter == course.id,
  );

  const coursesBox = coursesFiltered.map((course, index) => (
    <div
      key={index}
      className="mb-8  flex  w-[80%] flex-col  rounded-br-[40px] rounded-tl-[40px] bg-white  transition-transform duration-500  hover:scale-105 sm:w-[70%]  md:w-[30%]   "
    >
      <img src={course.image} className="rounded-tl-[40px]" />
      <div className="p-4 ">
        <p className="mb-6 text-xl font-bold  md:mb-0 md:h-[120px] md:text-lg lg:text-xl xl:text-2xl">
          {course.courseName}
        </p>
        <p className=" text-xl font-bold md:text-2xl xl:text-3xl">
          {course.age}
        </p>
      </div>
    </div>
  ));

  return (
    <div
      id="layer3"
      className="flex h-full w-full flex-col items-center bg-[#042451] py-24 font-comfortaa"
    >
      <div className="m-auto mb-14 flex w-[90%] flex-col flex-wrap items-center justify-evenly bg-transparent md:flex-row">
        {coursesBox}
      </div>
      <Link
        to="/courses"
        className="bold w-[300px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
      >
        More on our Courses
      </Link>
      <button
        onClick={props.toggle}
        className="bold my-12 w-[300px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
      >
        Filter
      </button>
      {props.filter && (
        <>
          <select
            name="filter"
            value={filter}
            onChange={(event) => {
              setFilter(event.target.value);
            }}
            className="my-5 rounded-lg border-2 bg-[#EA5880] p-2 text-lg font-bold text-white drop-shadow-lg "
          >
            <option value="all">All</option>
            <option value="kids">Kids</option>
            <option value="teen">Teens</option>
          </select>

          <label htmlFor="option1" className="text-lg text-white">
            <input
              type="checkbox"
              id="option1"
              name="option1"
              value={checkboxes.option1}
              className="mb-5 mr-3"
              checked={checkboxes.option1}
              onChange={() =>
                setCheckboxes({ ...checkboxes, option1: !checkboxes.option1 })
              }
            />
            Option1
          </label>

          <label htmlFor="option2" className="text-lg text-white">
            <input
              type="checkbox"
              id="option2"
              name="option2"
              value={checkboxes.option2}
              className="mb-5 mr-3"
              checked={checkboxes.option2}
              onChange={() =>
                setCheckboxes({ ...checkboxes, option2: !checkboxes.option2 })
              }
            />
            Option2
          </label>

          <label htmlFor="option3" className="text-lg text-white">
            <input
              type="checkbox"
              id="option3"
              name="option3"
              value={checkboxes.option3}
              className="mb-5 mr-3"
              checked={checkboxes.option3}
              onChange={() =>
                setCheckboxes({ ...checkboxes, option3: !checkboxes.option3 })
              }
            />
            Option3
          </label>
        </>
      )}
    </div>
  );
};

export default Layer3;
