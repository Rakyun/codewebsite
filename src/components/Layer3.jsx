import img1 from "../assets/courses/squarebanner01.png";
import img2 from "../assets/courses/squarebanner02.png";
import img3 from "../assets/courses/squarebanner03.png";
import img4 from "../assets/courses/squarebanner04.png";
import img5 from "../assets/courses/squarebanner05.png";
const Layer3 = () => {
  const courses = [
    { image: img1, courseName: "Design Thinking Class", age: "4++", id: "dtc" },
    {
      image: img2,
      courseName: "Block-Based Coding Class",
      age: "6++",
      id: "bbcc",
    },
    {
      image: img3,
      courseName: "Mechanical Innovation Class",
      age: "8++",
      id: "mic",
    },
    {
      image: img4,
      courseName: "Fundamental Coding Class",
      age: "9++",
      id: "fcc",
    },
    { image: img5, courseName: "Creative Coding Class", age: "9++", id: "ccc" },
  ];

  const coursesBox = courses.map((course) => (
    <div
      key={course.id}
      className=" mb-8 box-border flex w-[80%] flex-col  rounded-br-[40px] rounded-tl-[40px] bg-white  transition-transform duration-500  hover:scale-105 sm:w-[70%]  md:w-[19%] xl:h-[450px]"
    >
      <img src={course.image} className="rounded-tl-[40px]" />
      <div className="p-4 ">
        <p className="mb-10 h-[30px] text-xl font-bold md:h-[80px] md:text-[1.5vw]">
          {course.courseName}
        </p>
        <p className=" text-xl font-bold">{course.age}</p>
      </div>
    </div>
  ));

  return (
    <div className="font-comfortaa flex h-full w-full flex-col items-center bg-[#042451] py-24">
      <div className="m-auto mb-14 flex w-[90%] flex-col items-center justify-evenly bg-transparent md:flex-row">
        {coursesBox}
      </div>
      <button className="font-comfortaa bold w-[300px]  rounded-[50px] bg-[#F7C94B] p-2 text-white drop-shadow-lg transition duration-500 hover:scale-110 hover:bg-[#EA5880] active:opacity-80 active:duration-0 md:p-4">
        More on our Courses
      </button>
    </div>
  );
};

export default Layer3;
