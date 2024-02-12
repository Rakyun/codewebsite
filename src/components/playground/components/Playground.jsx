import front from "../../../assets/playground/front.png";
const Playground = () => {
  return (
    <>
      <main className="font-comfortaa flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] text-white ">
        <p className=" w-[80%] text-center text-3xl md:text-4xl">
          Environment that creates creative thinking
        </p>
        <p className="my-14 w-[80%] text-center text-lg md:text-xl">
          We believe that a conducive environment fosters imagination and
          creativity. Therefore, we prioritize the classroom setting to ensure
          your child feels happy, relaxed, and stimulated for effective
          learning.
        </p>
        <img
          src={front}
          alt="front"
          className="w-[80%] rounded-3xl md:w-[50%]"
        />
      </main>
    </>
  );
};

export default Playground;
