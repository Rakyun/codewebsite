import phone from "../../assets/logos/phone.png";

const Message = () => {
  return (
    <>
      <a
        href="https://www.facebook.com/messages/t/102949192458304"
        className="fixed bottom-4 right-10 flex h-14 w-14 animate-bounce cursor-pointer items-center justify-center rounded-full bg-[#F7C94B] hover:opacity-90 active:opacity-80"
        target="_blank"
        rel="noreferrer"
      >
        <img src={phone} className="w-[50%]" />
      </a>
    </>
  );
};

export default Message;
