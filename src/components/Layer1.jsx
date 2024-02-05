import { Player } from "@lottiefiles/react-lottie-player";
import intro from "../lottie/intro.json";
const Layer1 = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center bg-[#042451] py-[70px] ">
        <Player
          src={intro}
          className="h-[425px] w-full "
          autoplay
          keepLastFrame={true}
        />
        <div className="relative bottom-10 flex flex-col">
          <button className="font-comfortaa bold mb-10 w-[200px] rounded-[50px] bg-[#F7C94B] p-2 text-white drop-shadow-lg transition duration-500 hover:scale-110 hover:bg-[#EA5880] active:opacity-80 active:duration-0 md:p-4">
            Our Curriculum
          </button>
          <button className="font-comfortaa bold w-[200px] rounded-[50px] bg-[#F7C94B] p-2 text-white drop-shadow-lg transition  duration-500 hover:scale-110 hover:bg-[#EA5880] active:opacity-80 active:duration-0 md:p-4">
            Free Trial Class
          </button>
        </div>
      </div>
    </>
  );
};

export default Layer1;
