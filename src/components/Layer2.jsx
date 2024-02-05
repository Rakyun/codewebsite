import prepare from "../assets/prepare.png";
import why from "../assets/why.png";
import catpeek from "../assets/catpeek.png";
import star from "../assets/star.png";
const Layer2 = () => {
  return (
    <>
      <div className="font-comfortaa relative flex h-full w-full flex-col items-center bg-[#98E7FF] py-[70px]">
        <div className="m-auto mb-10 flex w-[90%] flex-col items-center bg-transparent md:flex-row md:items-start md:justify-between ">
          <div className="mb-10 flex  w-[90%] flex-col items-center md:w-[45%]">
            <p className="mb-10  h-12 w-[400px] text-center text-2xl font-extrabold">
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
            <p className="mb-10 flex h-12 w-[400px] items-end justify-center text-center text-2xl  font-extrabold">
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
              Through learning Project-Based learning with a team of engineers
              and programmers who will work directly with you.You will practice
              your skills in pitching projects and present your project at the
              end of class. To develop skills Prepare yourself to be a citizen
              of the digital world of the future.
            </p>
          </div>
        </div>
        <div className="flex w-[90%] items-center justify-center md:justify-normal  ">
          <a className="bold font-comfortaa text-2xl  text-[#F7C94B] drop-shadow-md">
            >> Get to know us more
          </a>
          <img src={star} alt="flag" className="hidden w-[8%] md:block" />
        </div>
      </div>
    </>
  );
};

export default Layer2;
