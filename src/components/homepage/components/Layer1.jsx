import { Player } from "@lottiefiles/react-lottie-player";
import intro from "../../../lottie/intro.json";
import { Link as ScrollLink } from "react-scroll";
const Layer1 = (props) => {
  return (
    <>
      <main className="flex h-full w-full flex-col items-center bg-[#042451] py-[70px] ">
        <Player
          src={intro}
          className="h-[425px] w-full "
          autoplay
          keepLastFrame={true}
        />
        <div className="relative bottom-10 flex flex-col items-center">
          <ScrollLink
            to="layer3"
            smooth={true}
            duration={800}
            offset={0}
            className="bold mb-10 w-[200px] cursor-pointer select-none rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
          >
            Our Curriculum
          </ScrollLink>
          <ScrollLink
            onClick={props.openFilter}
            to="filterbutton"
            smooth={true}
            duration={800}
            offset={-550}
            className="bold w-[280px] cursor-pointer select-none rounded-[50px] bg-[#F7C94B] p-2 text-center font-comfortaa text-white drop-shadow-lg transition-transform duration-500 hover:bg-[#EA5880]  active:opacity-80 md:p-4  md:hover:scale-105"
          >
            Find Course Suitable for you
          </ScrollLink>
        </div>
      </main>
    </>
  );
};

export default Layer1;
