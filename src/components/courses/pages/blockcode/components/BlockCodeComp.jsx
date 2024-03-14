import front from "../../../../../assets/playground/front.png";
import octo from "../../../../../assets/courseDetails/octo.jpg";
import scratch from "../../../../../assets/courseDetails/scratch.jpg";
import dede from "../../../../../assets/messageUs.png";
import { useState } from "react";
const BlockCodeComp = () => {
  const feature = [
    { image: dede, text: "Beginner" },
    { image: dede, text: "Story-Telling" },
    { image: dede, text: "Block-Based Code  " },
    { image: dede, text: "Algorithm" },
    { image: dede, text: "Onsite" },
    { image: dede, text: "Ipad" },
    { image: dede, text: "Basic Class" },
    { image: dede, text: "Entertainment" },
  ];

  const features = feature.map((content, index) => (
    <div key={index} className="flex w-[50%] items-center ">
      <img src={content.image} alt="dede" className="w-[25%]" />
      <p className="text-sm font-bold text-white lg:text-base">
        {content.text}
      </p>
    </div>
  ));

  const [showMore, setShowMore] = useState(false);

  const showInfo = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#042451] pt-[150px] font-comfortaa text-white">
      <img
        src={front}
        alt="front"
        className="my-2 w-[80%] rounded-3xl md:w-[50%]"
      />
      <p className="mt-8 w-[80%] text-center text-lg md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        explicabo suscipit magni iusto eligendi quasi. Debitis eligendi
        repellendus laborum tempora pariatur adipisci consectetur, est odio iure
        fugiat dolore deserunt incidunt fuga optio sit harum nobis ratione quia
        corrupti ex illum necessitatibus sed officiis! Sed sequi magnam
        perferendis enim officiis est!
      </p>

      <p className="mt-28 w-[80%] text-center text-3xl md:text-4xl">
        พัฒนาความคิดเชิง Programming อย่างเป็นระบบ
      </p>
      <p className="mt-8 w-[80%] text-center text-lg md:text-xl">
        หลักสูตร Blocked code programming ของเราถูกพัฒนามาเพื่อช่วยให้น้องๆ
        ได้คิดเชิงหลักการ และเหตุผล
        อย่างเป็นระบบแบบที่นักพัฒนาซอฟแวร์คิดหลักสูตรนี้เหมาะกับเด็กอายุ 6
        ปีขึ้นไป
      </p>

      <p className="mb-6 mt-28 w-[80%] text-center text-3xl md:text-4xl">
        Octo Studio : Make Seafood using Octopus
      </p>
      <img src={octo} alt="scratch" className="my-2 mb-20 w-[85%] rounded-xl" />

      <p className="mb-6 mt-28 w-[80%] text-center text-3xl md:text-4xl">
        Scratch : The Journey of Superpower
      </p>
      <img
        src={scratch}
        alt="scratch"
        className="my-2 mb-20 w-[85%] rounded-xl"
      />

      {/*
        <section className="mb-6 flex  w-[90%] flex-col bg-[#83CE9F] pb-10">
          <div className="flex w-full flex-col md:flex-row">
            <div className="md:w-[50%] ">
              <img src={scratchCourse} alt="ScratchCourse" className="w-full" />
            </div>
            <div className="w-full pt-2 md:w-[50%]">
              <p className="sm:text-md lg:text-md text-center md:text-xs lg:text-base xl:text-lg">
                นำน้องๆ เข้าสู่โลกแห่ง Scratch โลกของการคิดอย่างเป็นเหตุเป็นผล
              </p>
              <div className="my-1 flex w-full text-sm lg:text-lg">
                <div className="w-[50%] bg-[#F8C84D] py-2 text-center font-bold">
                  <p>Available in TH/ENG</p>
                </div>
                <div className="w-[50%] bg-[#F65353] py-2 text-center font-bold">
                  <p>6++</p>
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center justify-around p-4">
                {features}
              </div>
              <div className="text-md mt-5 flex items-center justify-between px-10 text-white md:px-5 lg:text-lg">
                <div className="mr-3">
                  <p>จำนวนครั้ง : 10 ครั้ง</p>
                  <p>10 ชั่วโมง (ครั้งละ 1 ชั่วโมง)</p>
                </div>
                <button
                  onClick={showInfo}
                  className=" w-[150px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-3 hover:opacity-90 active:opacity-50"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
          {showMore && (
            <div className="mt-16 flex flex-col items-center text-sm text-white lg:text-base">
              <p className="mb-10 text-3xl font-bold">Course Details</p>
              <p className="w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus rem libero dolore eum velit quod minus unde
                consectetur aut incidunt. Vitae iusto eius, quas reprehenderit
                consectetur harum praesentium vel magnam facilis excepturi cum
                dolorum quae culpa, maxime aliquam consequuntur non? Sunt soluta
                magni dolorum dignissimos minima, enim a animi consectetur
                temporibus id! Perferendis voluptatibus soluta corporis enim
                odio, provident sapiente adipisci consequatur culpa eveniet
                corrupti, optio reiciendis! Voluptatibus deserunt totam cum
                nisi, perferendis vitae rerum impedit pariatur sapiente
                voluptatem adipisci, atque ipsam eveniet numquam sit nam ab
                voluptates doloremque nesciunt omnis assumenda dignissimos,
                explicabo rem? Atque illum delectus voluptates architecto!
              </p>
            </div>
          )}
        </section>
          */}
    </div>
  );
};

export default BlockCodeComp;
