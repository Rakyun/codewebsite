import chula from "../../../assets/universities/chula.png";
import kaset from "../../../assets/universities/kaset.png";
import kmitl from "../../../assets/universities/kmitl.png";
import palo from "../../../assets/universities/palo.png";
import siit from "../../../assets/universities/siit.png";
import web from "../../../assets/universities/webster.png";
import foxtrot from "../../../assets/playground/foxtrot.jpg";
import teacher1 from "../../../assets/teachers/teacher1.jpeg";
import teacher2 from "../../../assets/teachers/teacher2.jpeg";
const Detail = () => {
  return (
    <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white ">
      <p className="mb-8 w-[80%] text-center text-xl md:text-3xl">
        Study with real software engineers and programmers
      </p>
      <p className="mb-16 w-[80%] text-center text-sm sm:text-base md:text-lg  ">
        CO-DE academy places great importance on teachers who come to teach
        young children. All of our teachers are programming experts, engineers
        or teachers who have degrees in teaching young children directly. Our
        teachers have experience working in real programming or have a
        systematic thought process in engineering. Because we believe These
        teachers will be able to pass on their experiences to the students. very
        well
      </p>
      <p className="mb-8 w-[80%]  text-center text-xl md:mb-8 md:text-3xl">
        Our instructors studied and graduated from these education institutes
      </p>
      <div className="mb-16 flex w-[80%] flex-wrap justify-around rounded-2xl border-4 border-black bg-[#F5D785] p-3 drop-shadow-2xl lg:w-[60%]">
        <img src={chula} alt="image" className="mx-1 w-[40%] object-contain" />
        <img src={kaset} alt="image" className="mx-1 w-[40%] object-contain" />
        <img src={kmitl} alt="image" className="mx-1 w-[40%] object-contain" />
        <img src={palo} alt="image" className="mx-1 w-[40%] object-contain" />
        <img src={siit} alt="image" className="mx-1 w-[40%] object-contain" />
        <img src={web} alt="image" className="mx-1 w-[40%] object-contain" />
      </div>
      <section className="mb-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#29446A] px-5 py-10">
        <p className="mb-8  text-center text-xl md:text-3xl">
          Continously Developed Curriculum with strong a foundation.
        </p>
        <p className=" text-center text-sm sm:text-base md:text-lg  ">
          Our curriculum is continually evolving. to provide our content Keep up
          with the ever-moving digital world. so that our students can
          understand and keep up with current technology content Our curriculum
          development team is a new generation. People who are experts and have
          real experience in various fields of technology. While still providing
          basic knowledge in writing code firmly.
        </p>
      </section>

      <img src={teacher1} alt="foxtrot" className="w-[80%] rounded-2xl" />

      <section className="my-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#29446A] px-5 py-10">
        <p className="mb-8  text-center text-xl md:text-3xl">
          Our teachers understand children very well.
        </p>
        <p className=" text-center text-sm sm:text-base md:text-lg  ">
          Our institute provides training. and develop our teachers all the time
          Including the use of specialized teachers to suit the age of the
          children. This allows us to develop the children in the direction that
          they want. Good at it and interested
        </p>
      </section>

      <img src={teacher2} alt="foxtrot" className="w-[80%] rounded-2xl" />

      <section className="my-16 flex w-[80%] flex-col items-center rounded-2xl  bg-[#29446A] px-5 py-10">
        <p className="mb-8  text-center text-xl md:text-3xl">
          Online content that you can review any time.
        </p>
        <p className=" text-center text-sm sm:text-base md:text-lg  ">
          Our school uses modern tools to help you learn. Practice coding
          efficiently along with online exercises that the kids You can review
          and try additional CODE by yourself at any time.
        </p>
      </section>
    </main>
  );
};

export default Detail;
