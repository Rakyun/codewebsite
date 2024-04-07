import stage from "../../../assets/stage/stage.jpg";
import img1 from "../../../assets/stage/img1.jpeg";
import img2 from "../../../assets/stage/img2.jpeg";
import img3 from "../../../assets/stage/img3.jpeg";

const Stage = () => {
  return (
    <>
      <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white ">
        <p className=" w-[80%] text-center text-3xl md:text-4xl">
          Experience the real start-up culture and Project pitching based
          concept
        </p>
        <p className="my-14 w-[80%] text-center text-lg md:text-xl">
          We believe that embracing learning through project pitching empowers
          kids to unleash creativity, hone communication, while fostering
          innovative leaders and confidently sharing their ideas with the world.
        </p>
        <img
          src={stage}
          alt="stage"
          className="mb-40 w-[80%] rounded-3xl md:w-[50%]"
        />
        <section className="mb-20 flex w-[90%] flex-col items-center justify-between md:flex-row">
          <img
            src={img1}
            alt="stage"
            className="mb-10 w-[90%] rounded-3xl md:mb-0 md:w-[45%]"
          />
          <p className="md:text-md w-[90%] text-center text-base text-[#FFDD4F] sm:text-lg md:w-[45%] lg:text-xl xl:text-2xl ">
            Unlock children's potential with captivating project presentations,
            merging innovation and education to ignite limitless possibilities.
          </p>
        </section>

        <section className="mb-32 flex w-[90%] flex-col items-center justify-between md:flex-row-reverse">
          <img
            src={img2}
            alt="stage"
            className="mb-10 w-[90%] rounded-3xl md:mb-0 md:w-[45%]"
          />
          <p className="md:text-md w-[90%] text-center text-base text-[#FFDD4F] sm:text-lg md:w-[45%] lg:text-xl xl:text-2xl">
            A playground stage built for children to showcase their amazing
            ideas, fostering imagination and innovation for an exciting learning
            journey.
          </p>
        </section>

        <section className="mb-20 flex w-[90%] flex-col items-center justify-between">
          <img src={img3} alt="stage" className="mb-10 w-[90%] md:w-[50%] rounded-3xl" />
          <p className=" w-[90%] text-center text-base sm:text-lg lg:text-xl xl:text-2xl ">
            <span className="text-[#B5B32C]">Project pitching base</span> is an
            innovative educational strategy where students present coding-based
            project ideas to peers and teachers. Using their coding skills, they
            transform theoretical concepts into practical projects, showcasing
            their creativity and problem- solving abilities through captivating
            presentations.
          </p>
        </section>
      </main>
    </>
  );
};

export default Stage;
