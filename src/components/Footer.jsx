import code_logo from "../assets/code_logo.png";
import facebook from "../assets/logos/facebook.png";
import line from "../assets/logos/line.png";
import phone from "../assets/logos/phone.png";
import email from "../assets/logos/email.png";
import location from "../assets/logos/location.png";
const Footer = () => {
  const contacts = [
    { logo: facebook, text: "CO-DE academy", key: "logo1" },
    { logo: line, text: "@CO-DE", key: "logo2" },
    { logo: phone, text: "0808300899", key: "logo3" },
    { logo: email, text: "codeacademy.ad@gmail.com", key: "logo4" },
    {
      logo: location,
      text: "CO-DE academy",
      text2: "Floor 3. Mille Malle , Sukhumvit 20",
      key: "logo5",
    },
  ];
  const contactList = contacts.map((contact) => (
    <div className=" my-1 flex text-lg  font-bold text-white" key={contact.key}>
      <img
        src={contact.logo}
        alt="logo"
        className={`mr-3  h-[35px] ${contact.key == "logo5" ? "relative left-[5px] mr-[22px] w-[25px]" : "w-[35px]"}`}
      />
      <div>
        <p>{contact.text}</p>
        {contact.key == "logo5" && <p>{contact.text2}</p>}
      </div>
    </div>
  ));

  return (
    <footer className="font-comfortaa h-full w-full">
      <section className=" flex  flex-col items-center bg-[#042451]  md:flex-row">
        <img
          src={code_logo}
          alt="Logo"
          className="inline h-[300px] w-[300px]"
        />
        <div className="auto mb-10 flex w-[80%] flex-col justify-center px-12 md:mb-0">
          {contactList}
        </div>
      </section>
      <div className="flex w-full items-center justify-center bg-[#29446A] p-5 text-lg font-bold text-white md:justify-normal">
        Copyright © CO-DE Academy
      </div>
    </footer>
  );
};

export default Footer;
