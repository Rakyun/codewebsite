import code_logo from "../../../assets/code_logo.png";
import facebook from "../../../assets/logos/facebook.png";
import line from "../../../assets/logos/line.png";
import phone from "../../../assets/logos/phone.png";
import email from "../../../assets/logos/email.png";
import location from "../../../assets/logos/location.png";
const Footer = () => {
  const contacts = [
    {
      portal: "https://www.facebook.com/codeacademy.thailand",
      logo: facebook,
      text: "CO-DE academy",
      key: "logo1",
    },
    { portal: "", logo: line, text: "@CO-DE", key: "logo2" },
    { portal: "", logo: phone, text: "0808300899", key: "logo3" },
    { portal: "", logo: email, text: "codeacademy.ad@gmail.com", key: "logo4" },
    {
      portal:
        "https://www.google.com/maps/dir//Mille+Malle+Mall,+Sukhumvit+20+Alley,+Khlong+Toei,+Bangkok+10110/@13.730056,100.4810962,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x30e29ff6f10ee8f3:0x76076b242bf23d09!2m2!1d100.5634996!2d13.7301107?entry=ttu",
      logo: location,
      text: "CO-DE academy",
      text2: "Floor 3. Mille Malle , Sukhumvit 20",
      key: "logo5",
    },
  ];
  const contactList = contacts.map((contact) => (
    <div className=" text-md my-1 flex font-bold text-white" key={contact.key}>
      <img
        src={contact.logo}
        alt="logo"
        className={`mr-3  h-[35px] ${contact.key == "logo5" ? "relative left-[5px] mr-[22px] w-[25px]" : "w-[35px]"}`}
      />
      <div>
        <a href={contact.portal}>{contact.text}</a>
        {contact.key == "logo5" && (
          <a className="block" href={contact.portal}>
            {contact.text2}
          </a>
        )}
      </div>
    </div>
  ));

  return (
    <footer className="h-full w-full font-comfortaa">
      <section className=" flex  flex-col items-center bg-[#042451]  md:flex-row">
        <img
          src={code_logo}
          alt="Logo"
          className="inline h-[300px] w-[300px]"
        />
        <div className="auto mb-10 flex w-[80%] flex-col justify-center  md:mb-0">
          {contactList}
        </div>
      </section>
      <div className="flex w-full items-center justify-center  bg-[#29446A]  p-3 font-bold text-white md:justify-between md:px-10">
        <p className="mr-10 text-base sm:text-xl  md:mr-0">
          Copyright © CO-DE Academy
        </p>

        <a
          href="mailto:jobscode@gmail.com"
          className="text-base text-[#FFAC1C] sm:text-xl "
        >
          Work with Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
