import stage from "../../../assets/stage.jpg";
const Stage = () => {
  return (
    <>
      <main className="font-comfortaa flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] text-white ">
        <p className=" w-[80%] text-center text-3xl md:text-4xl">
          Experience the real Start-up culture and Pitching stage
        </p>
        <p className="my-14 w-[80%] text-center text-lg md:text-xl">
          Bringing the work you have created to present to the public will help
          promote the ability to express yourself. You will be able to simulate
          presenting your work as if you were in a startup culture where you
          have to pitch your own work to an audience
        </p>
        <img
          src={stage}
          alt="stage"
          className="mb-20 w-[80%] rounded-3xl md:w-[50%]"
        />
      </main>
    </>
  );
};

export default Stage;
