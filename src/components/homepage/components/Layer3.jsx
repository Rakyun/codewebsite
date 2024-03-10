import { useContext } from "react";
import { CheckBoxContext } from "../../../context/CheckBoxContext";
import { Link } from "react-router-dom";
import img1 from "../../../assets/courses/squarebanner01.png";
import img2 from "../../../assets/courses/squarebanner02.png";
import img3 from "../../../assets/courses/squarebanner03.png";
import img4 from "../../../assets/courses/squarebanner04.png";
import img5 from "../../../assets/courses/squarebanner05.png";
import img6 from "../../../assets/courses/squarebanner06.png";
const Layer3 = (props) => {
  const [radio, setRadio, filter, setFilter] = useContext(CheckBoxContext);

  const courses = [
    {
      image: img1,
      courseName: "Design Thinking Class",
      age: "4+ years old",
      id: "teen",
    },
    {
      image: img2,
      courseName: "Block-Based Coding Class",
      age: "6+ years old",
      id: "teen",
    },
    {
      image: img5,
      courseName: "Mechanical Innovation Class",
      age: "8+ years old",
      id: "kids",
    },
    {
      image: img3,
      courseName: "Fundamental Coding Class",
      age: "9+ years old",
      id: "kids",
    },
    {
      image: img4,
      courseName: "Creative Coding Class",
      age: "9+ years old",
      id: "teen",
    },
    {
      image: img6,
      courseName: "Road to University",
      age: "15+ years old",
      id: "teen",
    },
  ];

  const coursesBox = courses.map((course, index) => (
    <div
      key={index}
      className="mb-8  flex  w-[80%] flex-col  rounded-br-[40px] rounded-tl-[40px] bg-white  transition-transform duration-500  hover:scale-105 sm:w-[70%]  md:w-[30%]   "
    >
      <img src={course.image} className="rounded-tl-[40px]" />
      <div className="p-4 ">
        <p className="mb-6 text-xl font-bold  md:mb-0 md:h-[65px] md:text-lg lg:text-xl xl:h-[80px] xl:text-2xl">
          {course.courseName}
        </p>
        <p className=" text-xl font-bold  xl:text-2xl">{course.age}</p>
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
        id="filterbutton"
        onClick={props.toggle}
        className="bold my-12 w-[300px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
      >
        Filter
      </button>
      {props.filter && (
        <>
          <p className="mb-10 text-2xl text-white lg:text-3xl">
            This is the main Title of Section
          </p>
          <div className="flex w-[90%] flex-col justify-between  text-white md:flex-row ">
            <section className="mb-10 flex w-full flex-col items-center gap-10 md:w-[30%]">
              <p className="text-lg font-bold">
                Step 1 : This is example text to go with
              </p>
              <select
                name="filter"
                value={filter}
                onChange={(event) => {
                  setFilter(event.target.value);
                }}
                className="rounded-lg border-2 bg-[#EA5880] p-2 text-lg font-bold text-white drop-shadow-lg "
              >
                <option value="4+">4+</option>
                <option value="5.5+">5.5+</option>
                <option value="6+">6+</option>
                <option value="7+">7+</option>
                <option value="8+">8+</option>
                <option value="9+">9+</option>
                <option value="10+">10+</option>
                <option value="12+">12+</option>
                <option value="15+">15+</option>
              </select>
            </section>

            <section className="mb-10 flex w-full flex-col items-center gap-10 md:w-[30%]">
              <p className="text-lg font-bold">
                Step 1 : This is example text to go with
              </p>
              <div className="flex flex-col">
                <div className="mb-5 flex w-full">
                  <input
                    type="radio"
                    id="newbie"
                    name="skill"
                    value="newbie"
                    className="mr-3 h-6 w-6"
                    checked={radio === "newbie"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />
                  <label htmlFor="newbie" className="text-lg text-white">
                    Newbie
                  </label>
                </div>

                <div className="mb-5 flex w-full items-center">
                  <input
                    type="radio"
                    id="explorer"
                    name="skill"
                    value="explorer"
                    className="mr-3 h-6 w-6"
                    checked={radio === "explorer"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />

                  <label htmlFor="explorer" className="text-lg text-white">
                    Explorer
                  </label>
                </div>

                <div className="mb-5 flex w-full items-center">
                  <input
                    type="radio"
                    id="master"
                    name="skill"
                    value="master"
                    className="mr-3 h-6 w-6"
                    checked={radio === "master"}
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />

                  <label htmlFor="master" className="text-lg text-white">
                    Master
                  </label>
                </div>
              </div>
            </section>
            <section className="mb-10 flex w-full flex-col items-center gap-10 md:w-[30%]">
              <p className="text-lg font-bold">
                Step 1 : This is example text to go with
              </p>
              <Link
                to="/customCourse"
                className="bold w-[150px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
              >
                Search
              </Link>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Layer3;
