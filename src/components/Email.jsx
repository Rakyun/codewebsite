import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_danilopablito",
        "template_4qvtp1p",
        form.current,
        "u9BG08vzxqup94kfh",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="text-bold bg-black text-amber-500 ">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-[100%] flex-col items-center p-4"
      >
        <label>Name</label>
        <input type="text" name="user_name" className="rounded-xl p-3 px-24" />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="rounded-xl p-3 px-24"
        />
        <label>Message</label>
        <textarea name="message" className="rounded-xl p-3 px-24" />
        <input
          type="submit"
          value="Send"
          className="mt-4 w-[200px] rounded-xl bg-red-700 p-3 hover:opacity-80 active:opacity-50"
        />
      </form>
    </div>
  );
};

export default Email;
