import dede from "../../assets/messageUs.png"
const Message = () => {
  return (
    <>
      <a
        href="https://www.facebook.com/messages/t/102949192458304"
        className="fixed bottom-3 right-3 w-[150px]  animate-bounce-slow cursor-pointer  hover:opacity-90 active:opacity-80"
        target="_blank"
        rel="noreferrer"
      >
        <img src={dede} className="" />
      </a> 
    </> 
  ); 
};

export default Message;
