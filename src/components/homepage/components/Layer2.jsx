/* eslint-disable react/no-unescaped-entities */
import prepare from "../../../assets/others/prepare.png";
import why from "../../../assets/others/why.png";
import catpeek from "../../../assets/others/catpeek.png";
import star from "../../../assets/others/star.png";
import { Link } from "react-router-dom";
const Layer2 = () => {
  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center bg-[#98E7FF] py-[70px] font-comfortaa">
        <div className="m-auto mb-10 flex w-[90%] flex-col items-center bg-transparent md:flex-row md:items-start md:justify-between ">
          <div className="mb-10 flex  w-[90%] flex-col items-center md:w-[45%]">
            <p className="mb-10  text-center text-2xl font-extrabold md:h-12 md:w-[400px]">
              Prepare your child's skills for the world of the future
            </p>
            <img
              className="my-3 drop-shadow-xl"
              src={prepare}
              alt="A picture"
            />
            <p className="text-center">
              CO-DE academy is a school that aims to prepare students. To the
              world of the 21st century, our school controls and conducts
              teaching as well. National level engineer You will learn important
              skills for the future world. There are many courses to choose from
              such as Scratch, Python, Web developer, Roblox Developer and many
              more.
            </p>
          </div>
          <div className="mb-10 flex w-[90%] flex-col  items-center md:w-[45%]">
            <p className="mb-10 flex h-12 items-end justify-center text-center text-2xl font-extrabold  md:w-[400px]">
              Why study with us?
            </p>
            <div className="relative">
              <img className="my-3 drop-shadow-xl" src={why} alt="A picture" />
              <img
                src={catpeek}
                className="absolute left-0 top-0 w-[25%] -translate-x-[35%] -translate-y-[40%] transform md:-translate-y-[45%]"
                alt="Cat peeking"
              />
            </div>

            <p className="text-center">
              Our academy emphasizes teaching and learning that allows students
              to experience coding skills and develop systematic thinking.
              Through learning{" "}
              <Link
                to="/pitchingStage"
                className="text-lg font-bold text-red-800"
              >
                Project-Based learning{" "}
              </Link>
              with a team of engineers and programmers who will work directly
              with you.You will practice your skills in pitching projects and
              present your project at the end of class. To develop skills
              Prepare yourself to be a citizen of the digital world of the
              future.
            </p>
          </div>
        </div>
        <div className="flex w-[90%] items-center justify-center md:justify-normal  ">
          <Link
            className="font-comfortaa text-2xl font-bold  text-[#F7C94B] drop-shadow-md"
            to="/aboutUs"
          >
            {" "}
            {">> Get to know us more"}{" "}
          </Link>
          <img src={star} alt="flag" className="hidden w-[8%] md:block" />
        </div>
      </div>
    </>
  );
};

export default Layer2;
