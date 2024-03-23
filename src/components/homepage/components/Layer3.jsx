import { useContext, useState } from "react";
import { CheckBoxContext } from "../../../context/CheckBoxContext";
import { Link } from "react-router-dom";
import img1 from "../../../assets/courses/squarebanner01.png";
import img2 from "../../../assets/courses/squarebanner02.png";
import img3 from "../../../assets/courses/squarebanner03.png";
import img4 from "../../../assets/courses/squarebanner04.png";
import img5 from "../../../assets/courses/squarebanner05.png";
import img6 from "../../../assets/courses/squarebanner06.png";
import age from "../../../assets/searchfilter/age.png";
import graph from "../../../assets/searchfilter/graph.png";
import laptop from "../../../assets/searchfilter/laptop.png";
import info from "../../../assets/others/info.png";
const Layer3 = () => {
  const [radio, setRadio, filter, setFilter] = useContext(CheckBoxContext);

  const [showNewbie, setShowNewbie] = useState(false);
  const [showExplorer, setShowExplorer] = useState(false);
  const [showMaster, setShowMaster] = useState(false);

  const handleNewbie = () => {
    setShowNewbie((prev) => !prev);
  };

  const handleExplorer = () => {
    setShowExplorer((prev) => !prev);
  };

  const handleMaster = () => {
    setShowMaster((prev) => !prev);
  };

  const courses = [
    {
      image: img1,
      courseName: "Design Thinking Class",
      age: "4+ years old",
      id: "teen",
      direct: "/courses/noncode",
    },
    {
      image: img2,
      courseName: "Block-Based Coding Class",
      age: "6+ years old",
      id: "teen",
      direct: "/courses/blockcode",
    },
    {
      image: img5,
      courseName: "Mechanical Innovation Class",
      age: "8+ years old",
      id: "kids",
      direct: "/courses/mechanical",
    },
    {
      image: img3,
      courseName: "Fundamental Coding Class",
      age: "9+ years old",
      id: "kids",
      direct: "/courses/fundamental",
    },
    {
      image: img4,
      courseName: "Creative Coding Class",
      age: "9+ years old",
      id: "teen",
      direct: "/courses/creative",
    },
    {
      image: img6,
      courseName: "Road to University",
      age: "15+ years old",
      id: "teen",
    },
  ];

  const coursesBox = courses.map((course, index) => (
    <Link
      to={course.direct}
      key={index}
      className="mb-8  flex  w-[80%] flex-col  rounded-br-[40px] rounded-tl-[40px] bg-white  transition-transform duration-500  hover:scale-105 sm:w-[70%]  md:w-[30%]   "
    >
      <img src={course.image} className="rounded-tl-[40px]" />
      <div className="p-4 ">
        <p className="mb-6 text-xl font-bold  md:mb-0 md:h-[65px] md:text-lg lg:text-xl xl:h-[80px] xl:text-2xl">
          {course.courseName}
        </p>
        <p className="text-xl font-bold  xl:text-2xl">{course.age}</p>
      </div>
    </Link>
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
        className="bold mb-20 w-[300px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
      >
        More on our Courses
      </Link>

      <section
        id="filterbutton"
        className="border-neutral-800 flex w-[90%] flex-col items-center  rounded-3xl bg-[#f3e49a] p-8 text-black drop-shadow-2xl"
      >
        <p className="mb-8 text-center text-2xl  lg:text-3xl">
          Let us help you choose what is best for you!
        </p>
        <div className="flex w-full flex-col justify-between   md:flex-row ">
          <section className="mb-10 flex w-full flex-col items-center gap-10 md:mb-0 md:w-[30%]">
            <div className="flex flex-col  items-center ">
              <img src={age} alt="age" className="w-22 mb-4 h-20" />
              <p className="text-center text-lg font-bold  lg:text-xl">
                Select your age
              </p>
            </div>
            <select
              name="filter"
              value={filter}
              onChange={(event) => {
                setFilter(event.target.value);
              }}
              className="rounded-lg border-2 border-[#F7C94B] bg-[#F7C94B] p-2 text-lg font-bold text-white drop-shadow-lg "
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

          <section className="mb-10 flex w-full flex-col items-center gap-10 md:mb-0 md:w-[30%]">
            <div className="flex flex-col  items-center ">
              <img src={graph} alt="age" className="w-22 mb-4 h-20" />
              <p className="text-center text-lg font-bold  lg:text-xl">
                Select your Coding Proficiency
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex w-full items-center">
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
                <label htmlFor="newbie" className="mr-3 text-lg ">
                  Newbie
                </label>
                <div
                  onMouseEnter={handleNewbie}
                  onMouseLeave={handleNewbie}
                  className="relative h-5 w-5 "
                >
                  <img src={info} alt="info" className="w-full" />
                  <div
                    className={`absolute bottom-5 left-[20px]  h-32 w-32 items-center justify-center rounded-t-full rounded-br-full bg-[#FFEDB3] px-5 text-center drop-shadow-xl ${showNewbie ? "flex" : "hidden"}`}
                  >
                    <p className="text-xs ">No Experience in coding</p>
                  </div>
                </div>
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

                <label htmlFor="explorer" className="mr-3 text-lg ">
                  Explorer
                </label>
                <div
                  onMouseEnter={handleExplorer}
                  onMouseLeave={handleExplorer}
                  className="relative h-5 w-5"
                >
                  <img src={info} alt="info" className="w-full" />
                  <div
                    className={`absolute bottom-5 left-[20px]  h-32 w-32 items-center justify-center rounded-t-full rounded-br-full bg-[#FFEDB3] px-5 text-center drop-shadow-xl   ${showExplorer ? "flex" : "hidden"}`}
                  >
                    <p className="text-xs ">
                      You have some knowledge about basic coding principles.
                    </p>
                  </div>
                </div>
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

                <label htmlFor="master" className="mr-3 text-lg ">
                  Master
                </label>
                <div
                  onMouseEnter={handleMaster}
                  onMouseLeave={handleMaster}
                  className="relative h-5 w-5"
                >
                  <img src={info} alt="info" className="w-full" />
                  <div
                    className={`absolute bottom-5 left-[20px] h-32 w-32 items-center justify-center rounded-t-full rounded-br-full bg-[#FFEDB3] px-5 text-center drop-shadow-xl ${showMaster ? "flex" : "hidden"}`}
                  >
                    <p className="text-xs ">
                      You want to expand your coding knowledge further.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-10 flex w-full flex-col items-center gap-10 md:mb-0 md:w-[30%]">
            <div className="flex flex-col  items-center ">
              <img src={laptop} alt="age" className="w-22 mb-4 h-20" />
              <p className="text-center text-lg font-bold  lg:text-xl ">
                See the best courses for you
              </p>
            </div>
            <Link
              to="/customCourse"
              className="bold w-[150px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
            >
              Search
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Layer3;
