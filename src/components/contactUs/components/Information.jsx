import qrcode from "../../../assets/contact/qrcode.png";
import line from "../../../assets/logos/line.png";
import facebook from "../../../assets/logos/facebook.png";
import phone from "../../../assets/logos/phone.png";
import email from "../../../assets/logos/email.png";
import location from "../../../assets/logos/location.png";
const Information = () => {
  const contacts = [
    {
      portal: "https://www.facebook.com/codeacademy.thailand",
      logo: facebook,
      text: "CO-DE academy",
      key: "logo1",
    },
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
    <div
      className=" sm:text-md my-1  flex text-sm font-bold text-white lg:text-lg"
      key={contact.key}
    >
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
    <>
      <main className="font-comfortaa flex h-full w-full flex-col items-center bg-[#042451] py-10 pt-[150px] text-white ">
        <p className="mb-12 w-[80%] text-center text-3xl md:text-4xl">
          Plan your study with us!
        </p>
        <div className="flex w-[95%] flex-col items-center justify-center md:flex-row">
          <div className="mb-12 flex flex-col items-center md:mr-20">
            <div className="mb-2 flex items-center p-2">
              <img src={line} alt="linelogo" className="mr-2 w-[40px]" />
              <p className="  h-8  text-center text-2xl">@CO-DE</p>
            </div>
            <img src={qrcode} alt="qrcode" className="border-8 border-black" />
          </div>
          <div className="flex w-[90%] flex-col rounded-2xl border-4 border-black bg-[#29446A] p-4 drop-shadow-xl sm:w-[60%] md:w-[45%]">
            {contactList}
          </div>
        </div>
      </main>
    </>
  );
};

export default Information;
