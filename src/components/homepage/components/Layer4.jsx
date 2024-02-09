import classroom from "../../../assets/about/classroom.png";
import kidsproject from "../../../assets/about/kidsproject.png";
import stage from "../../../assets/about/stage.png";
import team from "../../../assets/about/team.png";
const Layer4 = () => {
  return (
    <>
      <div className="font-comfortaa flex h-full w-full flex-col items-center justify-between bg-[#6FBC87] py-[70px]   text-white">
        <div className="flex w-[85%] flex-col items-center bg-transparent md:flex-row md:justify-around ">
          <div className="relative my-5 flex w-[90%] items-center justify-center drop-shadow-xl transition-transform duration-500  hover:scale-105 md:w-[45%]">
            <img
              src={classroom}
              className="rounded-3xl opacity-[0.95]"
              alt="A picture"
            />
            <p className="absolute text-center text-2xl underline underline-offset-[20px]">
              Our Classroom
            </p>
          </div>
          <div className="relative my-5 flex w-[90%] items-center justify-center drop-shadow-xl transition-transform duration-500  hover:scale-105 md:w-[45%]">
            <img
              src={team}
              className="rounded-3xl opacity-[0.95]"
              alt="A picture"
            />
            <p className="absolute text-center text-xl underline underline-offset-[20px]">
              Our Team and Curriculum
            </p>
          </div>
        </div>
        <div className="flex w-[85%] flex-col items-center bg-transparent md:flex-row md:justify-around ">
          <div className="relative my-5 flex w-[90%] items-center  justify-center drop-shadow-xl transition-transform duration-500  hover:scale-105 md:w-[45%]">
            <img
              src={stage}
              className="rounded-3xl opacity-[0.95]"
              alt="A picture"
            />
            <p className="absolute  text-center text-2xl underline underline-offset-[20px]">
              Our Pitching Stage
            </p>
          </div>
          <div className="relative my-5 flex w-[90%] items-center justify-center  drop-shadow-xl transition-transform duration-500  hover:scale-105 md:w-[45%]">
            <img
              src={kidsproject}
              className="rounded-3xl opacity-[0.95]"
              alt="A picture"
            />
            <p className="absolute text-center text-2xl underline underline-offset-[20px]">
              Our kid's project
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layer4;
