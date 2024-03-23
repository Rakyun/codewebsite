import stage from "../../../assets/others/stage.jpg";
const Stage = () => {
  return (
    <>
      <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white ">
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
        <section className="mb-20 flex w-[90%] items-center justify-between">
          <img src={stage} alt="stage" className="w-[45%] rounded-3xl" />
          <p className="md:text-md w-[45%] text-center text-xs sm:text-sm lg:text-lg xl:text-xl ">
            Bringing the work you have created to present to the public will
            help promote the ability to express yourself. You will be able to
            simulate presenting your work as if you were in a startup culture
            where you have to pitch your own work to an audience
          </p>
        </section>

        <section className="mb-20 flex w-[90%] flex-row-reverse items-center justify-between">
          <img src={stage} alt="stage" className="w-[45%] rounded-3xl" />
          <p className="md:text-md w-[45%] text-center text-xs sm:text-sm lg:text-lg xl:text-xl ">
            Bringing the work you have created to present to the public will
            help promote the ability to express yourself. You will be able to
            simulate presenting your work as if you were in a startup culture
            where you have to pitch your own work to an audience
          </p>
        </section>

        <section className="mb-20 flex w-[90%] items-center justify-between">
          <img src={stage} alt="stage" className="w-[45%] rounded-3xl" />
          <p className="md:text-md w-[45%] text-center text-xs sm:text-sm lg:text-lg xl:text-xl ">
            Bringing the work you have created to present to the public will
            help promote the ability to express yourself. You will be able to
            simulate presenting your work as if you were in a startup culture
            where you have to pitch your own work to an audience
          </p>
        </section>
      </main>
    </>
  );
};

export default Stage;
