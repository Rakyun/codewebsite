import front from "../../../assets/playground/front.png";
import shape from "../../../assets/CourseSkills/shape.png";
import color from "../../../assets/CourseSkills/color.png";
import head from "../../../assets/CourseSkills/head.png";
import bulb from "../../../assets/CourseSkills/bulb.png";
import temp from "../../../assets/CourseSkills/temp.png";
import camera from "../../../assets/CourseSkills/camera.png";

const Playground = () => {
  const features = [
    {
      logo: shape,
      title: "Curve and Shape",
      desc: "Increase your imagination and creativity",
    },
    { logo: color, title: "Color", desc: "Stimulate eagerness for learning" },
    { logo: head, title: "Fun", desc: "The desire of learning new things" },
    {
      logo: bulb,
      title: "Lighting",
      desc: "Warm white lights reduce eye strain.",
    },
    {
      logo: temp,
      title: "Temperature",
      desc: "The best room temperature for productivity",
    },
    {
      logo: camera,
      title: "CCTV Safety",
      desc: "Ensure appropriate behavior control.",
    },
  ];

  const featureRender = features.map((feature, index) => (
    <div
      key={index}
      className="flex w-[35%] flex-col items-center text-center sm:w-[30%]"
    >
      <img src={feature.logo} className="-mb-6 md:-mb-11 lg:-mb-14 xl:-mb-20" />
      <p className="mb-5 text-sm font-bold text-[#EA587F] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        {feature.title}
      </p>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl">
        {feature.desc}
      </p>
    </div>
  ));
  return (
    <>
      <main className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white ">
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
        <div className="flex w-[80%] flex-wrap justify-around">
          {featureRender}
        </div>
      </main>
    </>
  );
};

export default Playground;
